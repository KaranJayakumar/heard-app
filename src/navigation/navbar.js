import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Search from "../screens/search";
import Notifications from "../screens/notification";
import Account from "../screens/account";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import { View } from "react-native";
const Placeholder = () => {
    return (
        <View style = {{flex : 1, backgroundColor : 'red'}}>
        </View>
    )
}
const Tab = createBottomTabNavigator();
export default function Navbar() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarStyle: {
                    height: 70,
                },
                tabBarActiveTintColor: '#b297e8',
                tabBarInactiveTintColor: '#93979e',
                tabBarShowLabel: false,
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="ios-home"
                            size={35}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="search" size={35} color={color} />
                )
            }
            }
            />
            <Tab.Screen 
                name="NewPost" 
                component={Placeholder} 
                options={{
                tabBarIcon: ({ color }) => (
                    <AntDesign name="pluscircle" size={50} color='#2AFDC2' />
                )
            }}
                listeners={
                    ({ navigation}) => ({
                        tabPress: (e) => {
                            e.preventDefault();
                            navigation.navigate("PostScreen")
                        }
                    })
                } />
            <Tab.Screen name="Notifications" component={Notifications} options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="envelope" size={35} color={color} />
                )
            }} />
            <Tab.Screen name="Account" component={Account} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account-circle-outline" size={35} color={color} />
                )
            }} />
        </Tab.Navigator >
    );
}
