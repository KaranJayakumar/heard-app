import React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/authContext";
import AppStack from "./appStack";
import AuthStack from './authStack';

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
    const { authState } = useContext(AuthContext);
    return (
        <NavigationContainer theme={MyTheme}>
            {authState.authenticated ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default AppNav;

