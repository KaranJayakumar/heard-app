import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import FilledButton from '../components/buttonFilled.js';
import { } from '@expo-google-fonts/dm-sans'
import Logo from '../components/logo.js';
import { AuthContext } from '../context/authContext.js';
const Home = () => {
    const { logout } = useContext(AuthContext);
    return (
        <View style={styles.paddedContainer}>
            <View style={styles.home}>
                <View>
                    <View style={styles.topBar}>
                        <Logo style={styles.logo} height={60} width={60} />
                        <Text style={[styles.text, styles.loginText]}>
                            Heard
                        </Text>
                    </View>
                </View>
                <View>

                </View>
                <FilledButton text="Sign Out" onPress={logout} />
            </View>
        </View>
    )
}
export default Home;
const styles = StyleSheet.create({
    paddedContainer: {
        flex: 1,
        paddingHorizontal: 30,
    },
    home: {
        flex: 1,
        flexDirection: 'column',
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
});

