import {View, Text, TouchableOpacity, StatusBar, ActivityIndicator} from 'react-native';
import {Rocket, ArrowRight} from 'lucide-react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback} from "react";

export default function SplashScreen() {
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            StatusBar.setBarStyle('dark-content')
            StatusBar.setBackgroundColor('#F9FAFB')
            const timer = setTimeout(() => {
                navigation.navigate("TabNavigator" as never);
            }, 1000);
            return () => clearTimeout(timer);
        }, [])
    );

    return (
        <View className="flex-1 bg-gray-50 items-center justify-center px-8">
            <View
                className="bg-cyan-600 w-20 h-20 rounded-3xl items-center justify-center mb-8 shadow-lg shadow-cyan-400/50">
                <Rocket size={40} color="#fff"/>
            </View>

            <Text className="text-gray-800 text-3xl font-bold text-center mb-2">RN Quick Start</Text>
            <Text className="text-gray-500 text-center mb-12">
                A minimal React Native CLI template{''}to kickstart your next project
            </Text>

            <TouchableOpacity
                className="bg-cyan-600 flex-row items-center px-8 py-4 rounded-full shadow-md shadow-cyan-400/50"
                onPress={() => navigation.navigate('TabNavigator' as never)}
            >
                <Text className="text-white font-semibold text-lg mr-3 py-0.5">Get Started</Text>
                <ActivityIndicator color={'#ffffff'} size={18}/>
            </TouchableOpacity>

            <Text className="text-gray-400 text-sm absolute bottom-12">Made with ❤️ for developers</Text>
        </View>
    );
}
