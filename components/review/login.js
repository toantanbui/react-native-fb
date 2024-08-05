import { View, Text, StyleSheet, Button, TextInput, Pressable, Image } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';

const styles = StyleSheet.create({
    container: {
        fontSize: 10,
        color: "red",
        height: "auto",
        // borderColor: "red",
        // borderWidth: 1,
        padding: 10,
        backgroundColor: "#eef7fe"

    },
    container_title: {
        // borderColor: "red",
        // borderWidth: 1,
        height: 300
    },
    container_content: {
        // borderColor: "red",
        // borderWidth: 1,
        height: "auto"
    },
    container_footer: {
        // borderColor: "red",
        // borderWidth: 1,
        height: 300,
        justifyContent: "space-between"
    },
    container_footer_top: {

    },
    container_footer_bottom: {

    }
})


const LoginScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.container_title}>
                <View style={{
                    // borderColor: "red",
                    // borderWidth: 1,
                    height: "20%",
                    justifyContent: "center"
                }}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </View>
                <View style={{
                    // borderColor: "red",
                    // borderWidth: 1,
                    height: "80%",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image
                        style={{ height: 50, width: 50 }}
                        source={require("../images/star.png")} />
                </View>
            </View>
            <View style={styles.container_content}>
                <TextInput
                    style={{
                        borderColor: "#dde2e7",
                        borderWidth: 2,
                        height: 60,
                        borderRadius: 10,
                        color: "#bac3ca",
                        fontWeight: "600",
                        fontSize: 15,
                        padding: 10,
                        marginBottom: 10,
                        backgroundColor: "#ffffff"
                    }}

                    placeholder="Số điện thoại di hoặc email"

                />
                <TextInput
                    style={{
                        borderColor: "#dde2e7",
                        borderWidth: 2,
                        height: 60,
                        borderRadius: 10,
                        color: "#bac3ca",
                        fontWeight: "600",
                        fontSize: 15,
                        padding: 10,
                        marginBottom: 10,
                        backgroundColor: "#ffffff"
                    }}

                    placeholder="Mật khẩu"

                />
            </View>
            <View style={styles.container_footer}>
                <View style={styles.container_footer_top}>
                    <Pressable style={{
                        // borderColor: "#dde2e7",
                        // borderWidth: 2,
                        height: 60,
                        backgroundColor: "#0163e0",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 30

                    }}
                        onPress={() => { navigation.navigate("PersonalPage") }}
                    >
                        <Text>Đăng nhập</Text>
                    </Pressable >
                    <Pressable style={{
                        // borderColor: "#dde2e7",
                        // borderWidth: 2,
                        height: 60,
                        // backgroundColor: "#0163e0",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 30

                    }}>
                        <Text>Bạn quên mật khẩu ư?</Text>
                    </Pressable >
                </View>
                <View style={styles.container_footer_bottom}>
                    <Pressable style={{
                        borderColor: "#7990e1",
                        borderWidth: 2,
                        height: 60,
                        // backgroundColor: "#0163e0",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 30



                    }}
                        onPress={() => { navigation.navigate("Signup") }}
                    >
                        <Text>Tạo tài khoản</Text>
                    </Pressable >
                </View>

            </View>

        </View>
    )
}

export default LoginScreen;