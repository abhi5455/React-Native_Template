import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import {Home, User} from "lucide-react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#0891b2', // cyan-600
                tabBarInactiveTintColor: '#a1a1aa', // gray-400
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopColor: '#e5e7eb', // border-gray-200
                    height: 60,
                    paddingVertical: 5,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{tabBarIcon: ({color, size}) => <Home size={size} color={color} />}}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{tabBarIcon: ({color, size}) => <User size={size} color={color} />}}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
