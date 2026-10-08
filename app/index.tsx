import React, {useState} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();

const App = () => {
    const [biometryType, setBiometryType] = useState(null);

    const checkBiometricsAvailability = async () => {

        const {biometryType} = await rnBiometrics.isSensorAvailable();
        if (biometryType === BiometryTypes.TouchID) {
            setBiometryType('Touch ID');
        }
    };

    const createFingerprintKey = async () => {
        rnBiometrics.createSignature({
            promptMessage: 'Sign in',
            payload: "test payload"
        })
            .then((resultObject) => {
                const {success, signature} = resultObject

                if (success) {
                    console.log(signature)
                    Alert.alert('Fingerprint Verified', 'finger print verified successfully');
                    // verifySignatureWithServer(signature, payload)
                }
            })
    };

    const verifyFingerprint = async () => {
        const {success} = await rnBiometrics.simplePrompt({promptMessage: 'Confirm fingerprint'});
        if (success) {
            Alert.alert('Fingerprint Verified', 'Fingerprint authentication successful');
        } else {
            Alert.alert('Fingerprint Verification Failed', 'Authentication unsuccessful');
        }
    };

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Biometry Type: {biometryType}</Text>
            <Button title="Check Biometrics Availability" onPress={checkBiometricsAvailability}/>
            <Button title="Register Fingerprint" onPress={createFingerprintKey}/>
            <Button title="Verify Fingerprint" onPress={verifyFingerprint}/>
        </View>
    );
};

export default App;
