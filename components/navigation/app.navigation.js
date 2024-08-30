import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignupScreen from "../review/signup";
import LoginScreen from "../review/login";
import PersonalScreen from "../review/personalPage";
import PostsScreen from "../review/posts";
import Posts_inforScreen from "../review/posts_infor";
import CommentScreen from "../review/comment";
import HomefbScreen from "../review/homefb";

import PostingScreen from "../review/posting";
import QR from "../qr";
import User_inforScreen from "../review/user_infor";



export default function AppNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            {/* initialRouteName mặc định điều hướng */}
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Signup" component={SignupScreen}
                    options={{ title: "Signup", headerShown: false }}
                />
                <Stack.Screen name="userInfor" component={User_inforScreen}
                    options={{ title: "Thông tin cá nhân", headerShown: true }}
                />


                <Stack.Screen name="Login" component={LoginScreen}
                    options={{ title: "Login", headerShown: false }}
                />
                <Stack.Screen name="PersonalPage" component={PersonalScreen}
                    options={{ title: "Trang cá nhân" }}
                />
                <Stack.Screen name="Posts" component={PostsScreen}
                    options={{ title: "bài viết", headerShown: false }}
                />
                <Stack.Screen name="Posts_infor" component={Posts_inforScreen}
                    options={{ title: "bài viết", headerShown: true }}
                />
                <Stack.Screen name="comment" component={CommentScreen}
                    options={{ title: "Bình luận", headerShown: true }}
                />
                <Stack.Screen name="homefb" component={HomefbScreen}
                    options={{ title: "trang chủ", headerShown: false }}
                />

                <Stack.Screen name="posting" component={PostingScreen}
                    options={{ title: "Tạo bài viết", headerShown: true }}
                />



            </Stack.Navigator>
        </NavigationContainer>
    );
}


