import {View, Text, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {
    Home,
    Bell,
    Search,
    ArrowRight,
    Layers,
    LayoutGrid,
    CheckSquare,
    Palette,
    Star,
    ScreenShare,
    PlusCircle,
    Compass,
    MessageSquare,
} from 'lucide-react-native';
import {useFocusEffect} from "@react-navigation/native";
import {useCallback} from "react";
import {SafeAreaView} from "react-native-safe-area-context";

export default function HomeScreen() {

    useFocusEffect(
        useCallback(() => {
            StatusBar.setBarStyle('dark-content')
            StatusBar.setBackgroundColor('#ffffff')
        }, [])
    );

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
        <ScrollView className="flex-1 bg-gray-50">
            <View className="px-6 pt-5 pb-8">
                <View className="flex-row items-center justify-between mb-8">
                    <View>
                        <Text className="text-gray-500 text-sm">Welcome back</Text>
                        <Text className="text-gray-800 text-2xl font-bold">Explorer</Text>
                    </View>
                    <View className="flex-row gap-4">
                        <TouchableOpacity className="bg-white p-3 rounded-full shadow-sm">
                            <Search size={20} color="#a1a1aa" />
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-white p-3 rounded-full shadow-sm">
                            <Bell size={20} color="#a1a1aa" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="bg-cyan-600 rounded-3xl p-6 mb-8 shadow-lg shadow-cyan-400/50">
                    <View className="bg-white/20 self-start px-3 py-1 rounded-full mb-4">
                        <Text className="text-white text-xs font-medium">Quick Start Template</Text>
                    </View>
                    <Text className="text-white text-xl font-bold mb-2">Build something amazing</Text>
                    <Text className="text-white/70 text-sm mb-4">
                        This template is your starting point for your next great application.
                    </Text>
                    <TouchableOpacity className="bg-white flex-row items-center self-start px-4 py-2 rounded-full">
                        <Text className="text-cyan-600 font-semibold mr-2">Learn More</Text>
                        <ArrowRight size={16} color="#0891b2" />
                    </TouchableOpacity>
                </View>

                <View className="mb-8">
                    <Text className="text-gray-800 text-lg font-semibold mb-4">Quick Actions</Text>
                    <View className="flex-row justify-around">
                        <QuickActionButton icon={PlusCircle} label="New Project" />
                        <QuickActionButton icon={Compass} label="Explore" />
                        <QuickActionButton icon={MessageSquare} label="Messages" />
                    </View>
                </View>

                <Text className="text-gray-800 text-lg font-semibold mb-4">Features Included</Text>
                <View className="flex-row flex-wrap justify-between">
                    <FeatureCard icon={Layers} title="Stack Navigator" />
                    <FeatureCard icon={LayoutGrid} title="Tab Navigator" />
                    <FeatureCard icon={ScreenShare} title="Onboarding Screen" />
                    <FeatureCard icon={Palette} title="NativeWind Styling" />
                    <FeatureCard icon={Star} title="Lucide Icons" />
                    <FeatureCard icon={CheckSquare} title="Pre-built Screens" />
                </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}

const QuickActionButton = ({icon: Icon, label}: {icon: any; label: string}) => (
    <TouchableOpacity className="items-center">
        <View className="bg-white p-4 rounded-full shadow-md mb-2">
            <Icon size={24} color="#0891b2" />
        </View>
        <Text className="text-gray-600 text-sm font-medium">{label}</Text>
    </TouchableOpacity>
);

const FeatureCard = ({icon: Icon, title}: {icon: any; title: string}) => (
    <View className="bg-white rounded-2xl p-4 w-[48%] mb-4 items-center shadow-sm">
        <View className="bg-cyan-100 p-3 rounded-full mb-2">
            <Icon size={24} color="#0891b2" />
        </View>
        <Text className="text-gray-800 font-medium text-center">{title}</Text>
    </View>
);
