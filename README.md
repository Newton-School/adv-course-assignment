# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# Project Setup Guide for Mac

Welcome to the React App with Expo project! Follow the steps below to set up the project on your local Mac machine.

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
