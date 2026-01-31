import {View, Text, TouchableOpacity} from 'react-native';
import {Settings, ChevronRight, User, Code, Github, Star} from 'lucide-react-native';

export default function ProfileScreen() {
    return (
        <View className="flex-1 bg-zinc-950 px-6 pt-16">
            <View className="flex-row items-center justify-between mb-8">
                <Text className="text-white text-2xl font-bold">Profile</Text>
                <TouchableOpacity className="bg-zinc-900 p-3 rounded-full">
                    <Settings size={20} color="#a1a1aa" />
                </TouchableOpacity>
            </View>

            <View className="items-center mb-8">
                <View className="bg-violet-600 w-24 h-24 rounded-full items-center justify-center mb-4">
                    <User size={40} color="#fff" />
                </View>
                <Text className="text-white text-xl font-bold">Developer</Text>
                <Text className="text-zinc-500">@quickstart_user</Text>
            </View>

            <View className="flex-row justify-around bg-zinc-900 rounded-2xl p-4 mb-8">
                {[
                    {label: 'Projects', value: '12'},
                    {label: 'Stars', value: '2.4k'},
                    {label: 'Following', value: '89'},
                ].map((stat, i) => (
                    <View key={i} className="items-center">
                        <Text className="text-white text-xl font-bold">{stat.value}</Text>
                        <Text className="text-zinc-500 text-sm">{stat.label}</Text>
                    </View>
                ))}
            </View>

            <View className="gap-3">
                {[
                    {icon: Code, label: 'My Projects'},
                    {icon: Github, label: 'GitHub'},
                    {icon: Star, label: 'Favorites'},
                ].map((item, i) => (
                    <TouchableOpacity key={i} className="bg-zinc-900 p-4 rounded-2xl flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <item.icon size={20} color="#8b5cf6" />
                            <Text className="text-white ml-3">{item.label}</Text>
                        </View>
                        <ChevronRight size={20} color="#52525b" />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}
