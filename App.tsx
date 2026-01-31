import "./global.css"
import {NavigationContainer} from "@react-navigation/native";
import {StackNavigator} from "./src/navigation/StackNavigator";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import {SafeAreaView} from "react-native-safe-area-context";
import {toastConfig} from "./toast.config";

export default function App() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <SafeAreaView className="flex-1 bg-gray-50">
                <NavigationContainer>
                    <StackNavigator/>
                    <Toast config={toastConfig}/>
                </NavigationContainer>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}
