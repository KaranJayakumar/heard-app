import { StyleSheet, Text, View } from 'react-native';
import Logo from '../components/logo';
import React, { useState, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FilledButton from '../components/buttonFilled';
import TextBox from '../components/textBox';
import { AuthContext } from '../context/authContext';
const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const { register } = useContext(AuthContext);
    return (
        <View style={styles.paddedContainer}>
            <View style={styles.topBar}>
                <Logo style={styles.logo} height={60} width={60} />
                <Text style={[styles.text, styles.loginText]}>
                    Sign Up
                </Text>
            </View>
            <View style={styles.inputs}>
                <Text style={[styles.text, styles.suggestions]}>Username</Text>
                <TextBox onChangeText={setUsername} value={username} secureText={false} />
                <Text style={[styles.text, styles.suggestions]}>Email</Text>
                <TextBox onChangeText={setEmail} value={email} secureText={false} />
                <Text style={[styles.text, styles.suggestions]} >Password</Text>
                <TextBox onChangeText={setPassword} value={password} secureText={true} />
                <Text style={[styles.text, styles.suggestions]} >Confirm Password</Text>
                <TextBox onChangeText={setRepeatPassword} value={repeatPassword} secureText={true} />
                <FilledButton style={styles.submit} text="Sign Up" onPress={() => { register(username, password) }} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    paddedContainer: {
        flex: 1,
        paddingHorizontal: 30,
    },
    loginText: {
        fontSize: 18,
        alignSelf: 'center',
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
    inputs: {
        alignItems: 'flex-start',
    },
    submit: {
        alignSelf: 'center',
    }
});
export default Login;
