# Project Setup Guide for Mac

Welcome to the React App with Expo project! Follow the steps below to set up the project on your local Mac machine.
You can use the doc here: https://docs.expo.dev/get-started/set-up-your-environment/?mode=development-build&buildEnv=local

## Prerequisites

Before you begin, make sure you have the following installed on your Mac:

- [Node.js](https://nodejs.org/) (version 20 or higher)
- https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating ( use this to install node version )
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## Step 1: Clone the Repository

First, you need to clone the project repository from GitHub. Open your terminal and run the following command:

```bash
git clone https://github.com/Newton-School/adv-course-assignment.git
```

## Step 2: Navigate to the Project Directory

Change to the project directory using the `cd` command:

```bash
cd your-repo-name
```

## Step 3: Install Dependencies

Install the necessary dependencies using `npm`:

```bash
npm install
```
## Step 4: Start the Expo Server

Start the Expo development server by running:

```bash
expo start
```

## Step 5: Run the App on an Emulator or Physical Device

### On an iOS Simulator

1. Make sure you have Xcode installed from the Mac App Store.
2. click on the `Run on iOS simulator` button in the Expo development tools.

### On a Physical Device

1. Download the Expo Go app from the App Store on your iOS device.
2. Scan the QR code displayed in the Expo development tools with the Expo Go app.

### On an Android Emulator

1. Download and install [Android Studio](https://developer.android.com/studio).
2. Open Android Studio and follow the setup wizard to install the necessary SDK tools.
3. Create a new virtual device (AVD) by going to `AVD Manager` > `Create Virtual Device`.
4. Select a device definition and click `Next`.
5. Choose a system image (ensure it's an x86 image for better performance) and click `Next`.
6. Verify the configuration and click `Finish` to create the AVD.
7. Start the AVD by clicking the `Play` button in the `AVD Manager`.
8. click on the `Run on Android device/emulator` button in the Expo development tools.

### On a Physical Android Device

1. Enable Developer Options and USB Debugging on your Android device:
   - Go to `Settings` > `About phone` and tap `Build number` seven times to enable Developer Options.
   - Go to `Settings` > `Developer options` and enable `USB debugging`.
2. Connect your Android device to your Mac via USB.
3. click on the `Run on Android device/emulator` button in the Expo development tools.
4. Follow the prompts on your Android device to allow USB debugging and install the Expo Go app.
5. The app should now run on your connected Android device.


# Steps to Build the App Locally

Follow these steps to build your Android app locally.

## Prerequisites

Ensure you have the following tools installed:

- [Node.js](https://nodejs.org/)
- [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm)
- [Homebrew](https://brew.sh/)

Create an account https://expo.dev/ [expo dev]
## Step-by-Step Instructions

```bash
# 1. Install `eas-cli` Globally
npm install --global eas-cli

# 2. Set Default Node.js Version Using `nvm`
nvm alias default 20

# 3. Install `bundletool` via Homebrew
brew install bundletool

# 4. Generate a Keystore (if you haven't already)
keytool -genkeypair -v -keystore ./keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias keyAlias

# 5. Build the Android App Locally
eas build --platform android --local

# 6. Generate APKs Using `bundletool`
bundletool build-apks --bundle=path/to/your_app.aab --output=path/to/your_app.apks --mode=universal --ks=./keystore.jks --ks-key-alias=keyAlias --ks-pass=pass:test123

# 7. Install the APKs Using `bundletool`
bundletool install-apks --apks=path/to/your_app.apks

# 8. Clean Up Generated Files
rm -rf path/to/your_app.apks
