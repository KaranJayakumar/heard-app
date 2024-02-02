import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Search from "../screens/search";
import NewPost from "../screens/newPost";
import Notifications from "../screens/notification";
import Account from "../screens/account";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AppStack() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: '#161F3D',
                tabBarInactiveTintColor: 'B8BBC4',
                showLabel: false,
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
                            size={24}
                            color={{ color }}
                        />
                    )
                }}
            />
            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="search" size={24} color={color} />
                )
            }
            }
            />
            <Tab.Screen name="NewPost" component={NewPost} options={{
                tabBarIcon: ({ color }) => (
                    <AntDesign name="pluscircle" size={24} color={color} />
                )
            }} />
            <Tab.Screen name="Notifications" component={Notifications} options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="envelope" size={24} color={color} />
                )
            }} />
            <Tab.Screen name="Account" component={Account} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account-circle-outline" size={24} color={color} />
                )
            }} />
        </Tab.Navigator >
    );
}
