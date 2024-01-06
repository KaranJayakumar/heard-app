import { StyleSheet, ImageBackground, Text, Image, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
const Launch = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.background}>
                <Image source={require('../../assets/headphoneImg.png')} style={styles.logo} />
            </ImageBackground>
        </SafeAreaView>
    )
}
export default Launch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        backgroundColor: "#080B19", // Fixed the backgroundColor value
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
    }
});

