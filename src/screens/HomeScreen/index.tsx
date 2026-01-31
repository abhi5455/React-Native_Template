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
    Sparkles, // For Gradient Library
    MessageSquareText, // For Toast Notifications
    ChevronRight,
} from 'lucide-react-native';
import {useFocusEffect} from "@react-navigation/native";
import {useCallback} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'; // Added useNavigation

export default function HomeScreen() {
    const navigation = useNavigation(); // Initialized useNavigation

    useFocusEffect(
        useCallback(() => {
            StatusBar.setBarStyle('dark-content')
            StatusBar.setBackgroundColor('#F9FAFB')
        }, [])
    );

    const features = [
        {
            icon: <Layers size={22} color="#0891b2" />,
            title: "Stack Navigator",
            subtitle: "Manage screen transitions with ease.",
            action: () => console.log("Navigate to Stack Navigator Demo")
        },
        {
            icon: <LayoutGrid size={22} color="#0891b2" />,
            title: "Tab Navigator",
            subtitle: "Effortless bottom tab navigation.",
            action: () => navigation.navigate('Profile' as never) // Example action
        },
        {
            icon: <ScreenShare size={22} color="#0891b2" />,
            title: "Onboarding Screen",
            subtitle: "Smooth first-time user experience.",
            action: () => console.log("Navigate to Onboarding Screen Demo")
        },
        {
            icon: <Palette size={22} color="#0891b2" />,
            title: "NativeWind Styling",
            subtitle: "Tailwind CSS for React Native.",
            action: () => console.log("Explore NativeWind Documentation")
        },
        {
            icon: <Star size={22} color="#0891b2" />,
            title: "Lucide Icons",
            subtitle: "Beautiful and consistent SVG icons.",
            action: () => console.log("Browse Lucide Icons")
        },
        {
            icon: <CheckSquare size={22} color="#0891b2" />,
            title: "Pre-built Screens",
            subtitle: "Jumpstart your app with ready screens.",
            action: () => console.log("View Available Screens")
        },
        {
            icon: <Sparkles size={22} color="#0891b2" />,
            title: "Gradient Support",
            subtitle: "Add stunning visual gradients.",
            action: () => console.log("Explore Gradient Examples")
        },
        {
            icon: <MessageSquareText size={22} color="#0891b2" />,
            title: "Toast Notifications",
            subtitle: "User-friendly feedback with toasts.",
            action: () => console.log("Show Toast Notification Demo")
        },
    ];

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
                            <TouchableOpacity className="bg-white p-3 rounded-full shadow-md">
                                <Search size={20} color="#a1a1aa" />
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-white p-3 rounded-full shadow-md">
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
                    <View className="flex flex-col gap-3 py-4">
                        {features.map((item, index) => (
                            <TouchableOpacity
                                className={`flex bg-white rounded-2xl flex-row items-center justify-between py-5 shadow-md ${index < features.length - 1 ? 'border-b border-gray-100' : ''}`}
                                key={index}
                                onPress={item?.action}>
                                <View className="flex flex-row items-center gap-4">
                                    <View
                                        className="flex justify-center items-center self-start ml-2 bg-cyan-100 w-[45px] h-[45px] rounded-full">
                                        {item?.icon}
                                    </View>
                                    <View className="">
                                        <Text className="font-semibold text-lg text-gray-800">{item?.title}</Text>
                                        <Text className="text-[13px] text-gray-600">{item?.subtitle}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
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
