import { StyleSheet, ImageBackground, Button, Image, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FilledGreenButton from '../components/button-green-filled';
import Logo from '../components/logo';
import { } from '@expo-google-fonts/dm-sans'
const Launch = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Logo width={125} height={125} />
            </View>
            <FilledGreenButton text="Login" onPress={() => { onLoginPress(navigation) }} />
            <FilledGreenButton text="Sign Up" onPress={() => { onSignUpPress(navigation) }} />
        </SafeAreaView>
    )
}
export default Launch;
function onLoginPress(navigation) {
    navigation.navigate('Login');
}

function onSignUpPress(navigation) {
    navigation.navigate('SignUp');
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

