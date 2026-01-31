import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Home, Bell, Search, ArrowRight} from 'lucide-react-native';

export default function HomeScreen() {
    return (
        <ScrollView className="flex-1 bg-zinc-950">
            <View className="px-6 pt-16 pb-8">
                <View className="flex-row items-center justify-between mb-8">
                    <View>
                        <Text className="text-zinc-500 text-sm">Welcome back</Text>
                        <Text className="text-white text-2xl font-bold">Explorer</Text>
                    </View>
                    <View className="flex-row gap-4">
                        <TouchableOpacity className="bg-zinc-900 p-3 rounded-full">
                            <Search size={20} color="#a1a1aa" />
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-zinc-900 p-3 rounded-full">
                            <Bell size={20} color="#a1a1aa" />
                        </TouchableOpacity>
                    </View>
                </View><View className="bg-violet-600 rounded-3xl p-6 mb-8">
                <View className="bg-white/20 self-start px-3 py-1 rounded-full mb-4">
                    <Text className="text-white text-xs font-medium">Quick Start Template</Text>
                </View>
                <Text className="text-white text-xl font-bold mb-2">Build Amazing Apps</Text>
                <Text className="text-white/70 text-sm mb-4">
                    A minimal React Native CLI template with navigation, styling, and icons pre-configured.
                </Text>
                <TouchableOpacity className="bg-white flex-row items-center self-start px-4 py-2 rounded-full">
                    <Text className="text-violet-600 font-semibold mr-2">Get Started</Text>
                    <ArrowRight size={16} color="#7c3aed" />
                </TouchableOpacity>
            </View>

                <Text className="text-white text-lg font-semibold mb-4">Features</Text>
                <View className="gap-3">
                    {[
                        {title: 'Navigation', desc: 'React Navigation configured'},
                        {title: 'Styling', desc: 'NativeWind (TailwindCSS)'},
                        {title: 'Icons', desc: 'Lucide React Native'},
                    ].map((item, i) => (
                        <View key={i} className="bg-zinc-900 p-4 rounded-2xl flex-row items-center">
                            <View className="bg-violet-600/20 p-2 rounded-xl mr-4">
                                <Home size={20} color="#8b5cf6" />
                            </View>
                            <View>
                                <Text className="text-white font-medium">{item.title}</Text>
                                <Text className="text-zinc-500 text-sm">{item.desc}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}
