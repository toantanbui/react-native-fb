import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../review/home";
import AboutScreen from "../review/about";
import SignupScreen from "../review/signup";
import LoginScreen from "../review/login";
import PersonalScreen from "../review/personalPage";
import PostsScreen from "../review/posts";


export default function AppNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            {/* initialRouteName mặc định điều hướng */}
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Signup" component={SignupScreen}
                    options={{ title: "Signup", headerShown: false }}
                />
                <Stack.Screen name="Home" component={HomeScreen}
                    options={{ title: "trang chủ", headerShown: false }}
                />
                <Stack.Screen name="About" component={AboutScreen}
                    options={{ title: "About", headerShown: false }}
                />
                <Stack.Screen name="Login" component={LoginScreen}
                    options={{ title: "Login", headerShown: false }}
                />
                <Stack.Screen name="PersonalPage" component={PersonalScreen}
                    options={{ title: "Trang cá nhân" }}
                />
                <Stack.Screen name="Posts" component={PostsScreen}
                    options={{ title: "bài viét", headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}


