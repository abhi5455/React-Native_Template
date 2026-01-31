import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplashScreen from "../../screens/OnboardingScreen/SplashScreen.tsx";
import TabNavigator from "../TabNavigator";
import SectionNavigator from "../SectionNavigator";

export const StackNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SplashScreen"
                options={{headerShown: false, gestureEnabled: false}}
                component={SplashScreen}
            />
            <Stack.Screen
                name="TabNavigator"
                options={{headerShown: false, gestureEnabled: false}}
                component={TabNavigator}
            />
            <Stack.Screen
                name="SectionNavigator"
                options={{headerShown: false, gestureEnabled: false}}
                component={SectionNavigator}
            />
        </Stack.Navigator>
    )
}
