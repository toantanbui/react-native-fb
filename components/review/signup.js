import { View, Text, StyleSheet, Button, TextInput } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';


const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height: "auto",
        // borderColor: "red",
        // borderWidth: 1,
        padding: 10,
        backgroundColor: "#ebf3fe"
    },
    container_route: {
        width: "100%",
        height: 50,
        // borderColor: "red",
        // borderWidth: 1,
        justifyContent: "center"

    },
    container_title: {
        width: "100%",
        height: 70,
        // borderColor: "red",
        // borderWidth: 1,
        //justifyContent: "space-between"

    },
    container_content: {
        width: "100%",
        height: "auto",
        // borderColor: "red",
        // borderWidth: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingTop: 10
    },
    container_content_input: {
        borderColor: "#c1c8d0",
        borderWidth: 1,
        width: 170,
        height: 80,
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
        backgroundColor: "#ffffff",


    }

})



const SignupScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.container_route}>
                <AntDesign name="arrowleft" size={24} color="black"
                    onPress={() => { navigation.navigate("Login") }}
                />
            </View>
            <View style={styles.container_title}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: "600",
                    marginBottom: 10
                }}
                >Bạn tên gì ?</Text>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: "600"
                    }}
                >Nhập thông tin cá nhân của bạn</Text>
            </View>
            <View style={styles.container_content}>
                <View style={styles.container_content_input}>
                    <Text style={{

                    }}>Họ</Text>
                    <TextInput />
                </View>
                <View style={styles.container_content_input}>
                    <Text style={{

                    }}>Tên</Text>
                    <TextInput />
                </View>
                <View style={{
                    borderColor: "#c1c8d0",
                    borderWidth: 1,
                    width: "100%",
                    height: 80,
                    padding: 10,
                    borderRadius: 20,
                    marginBottom: 10,
                    backgroundColor: "#ffffff"
                }}>
                    <Text style={{

                    }}>Email</Text>
                    <TextInput />
                </View>
                <View style={{
                    borderColor: "#c1c8d0",
                    borderWidth: 1,
                    width: "100%",
                    height: 80,
                    padding: 10,
                    borderRadius: 20,
                    marginBottom: 10,
                    backgroundColor: "#ffffff"

                }}>
                    <Text style={{

                    }}>Mật khẩu</Text>
                    <TextInput />
                </View>





            </View>
            <View >
                <Button title="sign up"
                //  color="red"
                />
            </View>

        </View>
    )
}

export default SignupScreen;