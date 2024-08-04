import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../review/home";
import AboutScreen from "../review/about";


export default function AppNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            {/* initialRouteName mặc định điều hướng */}
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}
                    options={{ title: "trang chủ", headerShown: false }}
                />
                <Stack.Screen name="About" component={AboutScreen}
                    options={{ title: "About", headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


