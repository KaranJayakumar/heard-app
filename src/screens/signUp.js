import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Logo from '../components/logo';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FilledButton from '../components/buttonFilled';
import TextBox from '../components/textBox';
const Login = () => {
    return (
        <SafeAreaView style={styles.login}>
            <View style={styles.topBar}>
                <Logo style={styles.logo} height={60} width={60} />
                <Text style={[styles.text, styles.loginText]}>
                    Sign Up
                </Text>
            </View>
            <View style={styles.inputs}>
                <Text style={[styles.text, styles.suggestions]}>Username</Text>
                <TextBox secureText={false} />
                <Text style={[styles.text, styles.suggestions]} >Email</Text>
                <TextBox />
                <Text style={[styles.text, styles.suggestions]} >Password</Text>
                <TextBox />
                <Text style={[styles.text, styles.suggestions]} >Confirm Password</Text>
                <TextBox />
                <FilledButton text="Sign Up" />

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    loginText: {
        fontSize: 18,
        alignSelf: 'center',
    },
    login: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
    },
    topBar: {
        flexDirection: 'row',
        marginBottom: 60,
    },
    logo: {
        marginRight: 20,
    },
    text: {
        color: '#F7FFFF',
    },
    text: {
        color: '#F7FFFF',
    },
    suggestions: {
        alignSelf: 'flex-start',
    },
    inputs: {
        alignItems: 'center'
    }
});
export default Login;
