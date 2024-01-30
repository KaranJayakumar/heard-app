import { StyleSheet, ImageBackground, Button, Image, View } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FilledButton from '../components/buttonFilled.js';
import { } from '@expo-google-fonts/dm-sans'
import { AuthContext } from '../context/authContext.js';
const Home = () => {
    const { logout } = useContext(AuthContext);
    return (
        <SafeAreaView style={styles.container}>
            <FilledButton text="Sign Out" onPress={logout} />
        </SafeAreaView>
    )
}
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

