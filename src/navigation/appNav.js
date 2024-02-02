import React, { useContext } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from 'react-native';
import { AuthContext } from "../context/authContext";
import AppStack from "./appStack";
import AuthStack from './authStack';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyTheme = {
    dark: true,
    colors: {
        primary: '#23FF39',
        background: '#080B19',
        card: 'rgb(255, 255, 255)',
        text: '#F4F4F4',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};
const AppNav = () => {
    const { session } = useContext(AuthContext);
    return (
        <View style={styles.backgroundView}>
            <NavigationContainer theme={MyTheme}>
                <SafeAreaView style={styles.safeView}>
                    <View style={styles.appContainer}>
                        {session !== null ? <AppStack /> : <AuthStack />}
                    </View>
                </SafeAreaView>
            </NavigationContainer>
        </View>
    );
};
export default AppNav;
const styles = StyleSheet.create({
    backgroundView: {
        flex: 1,
        backgroundColor: '#080B19',
    },
    safeView: {
        flex: 1,
    },
    appContainer: {
        flex: 1,
        paddingHorizontal: 30,
    }
})
