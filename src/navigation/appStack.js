import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from "./navbar";
import NewPost from "../screens/newPost";
const AppNav = createNativeStackNavigator();
export default function AppStack() {
    return (
        <AppNav.Navigator screenOptions={{
            headerShown: false,
            animationEnabled: true,
            cardStyle : {backgroundColor : "transparent"},
        }}>
            <AppNav.Screen name="Main" component={Navbar} />
            <AppNav.Screen
                name="PostScreen"
                component={NewPost}
            />
        </AppNav.Navigator>
    );
}
