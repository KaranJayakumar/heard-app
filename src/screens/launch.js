import { StyleSheet, ImageBackground, Button, Image, View } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FilledButton from '../components/buttonFilled.js';
import Logo from '../components/logo';
import { } from '@expo-google-fonts/dm-sans'
import { AuthContext } from '../context/authContext.js';
const Launch = ({ navigation }) => {
    const { login } = useContext(AuthContext);
    const navigateToSignUp = () => {
        navigation.navigate('SignUp'); // Replace 'SignUpScreen' with the actual name of your sign-up screen
    };
    const navigateToLogin = () => {
        navigation.navigate('Login'); // Replace 'SignUpScreen' with the actual name of your sign-up screen
    };
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Logo width={125} height={125} />
            </View>
            <FilledButton text="Login" onPress={navigateToLogin} />
            <FilledButton text="Sign Up" onPress={navigateToSignUp} />
        </SafeAreaView>
    )
}
export default Launch;
//Flow : 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

