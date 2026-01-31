import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplashScreen from "../../screens/OnboardingScreen/SplashScreen.tsx";

export default function SectionNavigator() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SplashScreen"
                options={{headerShown: false, gestureEnabled: false}}
                component={SplashScreen}
            />
        </Stack.Navigator>
    )
}
