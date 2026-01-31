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
                tabBarActiveTintColor: '#2196F3',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#09090b', // zinc-950
                    borderTopColor: '#09090b',
                },
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
