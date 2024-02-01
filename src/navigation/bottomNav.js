import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
const Tab = createBottomTabNavigator();
function BottomNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}></Tab.Screen>
            <Tab.Screen name="Search"></Tab.Screen>
            <Tab.Screen></Tab.Screen>
            <Tab.Screen></Tab.Screen>
        </Tab.Navigator>
    );
}
