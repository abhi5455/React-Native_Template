import {View, Text, TouchableOpacity} from 'react-native';
import {Rocket, ArrowRight} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';

export default function SplashScreen() {
    const navigation = useNavigation();

    return (
        <View className="flex-1 bg-zinc-950 items-center justify-center px-8">
            <View className="bg-violet-600 w-20 h-20 rounded-3xl items-center justify-center mb-8">
                <Rocket size={40} color="#fff" />
            </View>

            <Text className="text-white text-3xl font-bold text-center mb-2">RN Quick Start</Text>
            <Text className="text-zinc-500 text-center mb-12">
                A minimal React Native CLI template{'\n'}to kickstart your next project
            </Text>

            <TouchableOpacity
                className="bg-violet-600 flex-row items-center px-8 py-4 rounded-full"
                onPress={() => navigation.navigate('TabNavigator' as never)}
            >
                <Text className="text-white font-semibold text-lg mr-2">Get Started</Text>
                <ArrowRight size={20} color="#fff" />
            </TouchableOpacity>

            <Text className="text-zinc-700 text-sm absolute bottom-12">Made with ❤️ for developers</Text>
        </View>
    );
}
