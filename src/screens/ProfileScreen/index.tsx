import {View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, StatusBar} from 'react-native';
import {Settings, User, CreditCard, Shield, HelpCircle, LogOut} from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect} from "@react-navigation/native";
import {useCallback} from "react";
import {SafeAreaView} from "react-native-safe-area-context"; // Assuming 'react-native-linear-gradient' is installed for the gradient effect.

export default function ProfileScreen() {
    useFocusEffect(
        useCallback(() => {
            StatusBar.setBarStyle('light-content')
            StatusBar.setBackgroundColor('#164e63')
        }, [])
    );

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <ScrollView className="flex-1 bg-gray-100">
                <LinearGradient
                    colors={['#164e63', '#0891b2', '#06b6d4']}
                    style={styles.header}
                >
                    <View
                        className="flex items-center justify-center bg-primary rounded-full h-20 w-20 bg-white rounded-full">
                        <Text
                            className="text-[#0891b2] font-poppinsMedium text-xl">JD</Text>
                    </View>
                    <Text className="text-white text-2xl font-bold mt-3">John Doe</Text>
                    <Text className="text-white/80">Premium Member</Text>
                </LinearGradient>

                <View className="p-4 -mt-10">
                    <View className="bg-white rounded-2xl p-4 shadow-md">
                        <ProfileStat value="1,284" label="Followers"/>
                        <ProfileStat value="572" label="Following"/>
                        <ProfileStat value="98" label="Projects" last/>
                    </View>

                    <View className="mt-6">
                        <MenuItem icon={User} text="Account Information"/>
                        <MenuItem icon={CreditCard} text="Payment Methods"/>
                        <MenuItem icon={Shield} text="Privacy Settings"/>
                    </View>

                    <View className="mt-6">
                        <MenuItem icon={Settings} text="App Settings"/>
                        <MenuItem icon={HelpCircle} text="Help & Support"/>
                    </View>

                    <TouchableOpacity className="mt-6 bg-white rounded-2xl p-4 flex-row items-center justify-center">
                        <LogOut size={20} color="#ef4444"/>
                        <Text className="text-red-500 ml-2 font-bold">Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const ProfileStat = ({value, label, last}: { value: string; label: string; last?: boolean }) => (
    <View className={`flex-row items-center justify-between py-3 ${!last ? 'border-b border-gray-200' : ''}`}>
        <Text className="text-gray-500">{label}</Text>
        <Text className="text-gray-800 font-semibold">{value}</Text>
    </View>
);

const MenuItem = ({icon: Icon, text}: { icon: any; text: string }) => (
    <TouchableOpacity className="bg-white rounded-2xl p-4 flex-row items-center mb-3 shadow-sm">
        <Icon size={22} color="#0891b2"/>
        <Text className="text-gray-800 text-base ml-4">{text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    header: {
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
});
