import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextBox from '../components/textBox'
import Logo from '../components/logo';
import FilledButton from '../components/buttonFilled.js';
import { AuthContext } from '../context/authContext.js';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    return (
        <View style={styles.login}>
            <View style={styles.topBar}>
                <Logo style={styles.logo} height={60} width={60} />
                <Text style={[styles.text, styles.loginText]}>
                    Log In
                </Text>
            </View>
            <View style={styles.inputs}>
                <Text style={[styles.text, styles.suggestions]}>Username</Text>

                <TextBox secureText={false} onChangeText={setUsername} value={username} />

                <Text style={[styles.text, styles.suggestions]} >Password</Text>

                <TextBox secureText={true} onChangeText={setPassword} value={password} />

                <FilledButton text="Log In" style={styles.loginButton} onPress={() => login(username, password)} />
            </View>
        </View>
    )
}
export default Login;
const styles = StyleSheet.create({
    login: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
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
    loginText: {
        fontSize: 18,
        alignSelf: 'center',
    },
    inputs: {
        alignItems: 'flex-start',
    },
    loginButton: {
        alignSelf: 'center',
    }
});
