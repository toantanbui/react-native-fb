import { View, Text, StyleSheet, Button, TextInput, Pressable, Image } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions';
import { storeData, getData, removeValue } from '../storage/asyncStorage'

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
    const dispatch = useDispatch()
    let errMessage = useSelector(state => state.user.errMessage)


    useEffect(() => {
        getData('userInfo')
            .then(data => {
                let dataStorage = JSON.parse(data)
                console.log("isLoggendIn", dataStorage.idUser)

                if (dataStorage.isLoggedIn === true) {
                    navigation.navigate("homefb")
                }
            })
            .catch((e) => {
                console.log(e)
            })



    }, [])


    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const onChangeInputEmail = (event) => {
        let data = event.nativeEvent.text
        console.log("data la", data)
        setEmail(data)
    }

    const onChangeInputPassword = (event) => {
        let data = event.nativeEvent.text
        console.log("data la", data)
        setPassword(data)
    }



    const handleLogin = async () => {

        dispatch(actions.handleLogin({

            email: email,
            password: password

        }))
        getData('userInfo')
            .then(data => {
                let dataStorage = JSON.parse(data)
                console.log("isLoggendIn", dataStorage.idUser)

                if (dataStorage.isLoggedIn === true) {
                    navigation.navigate("homefb")
                }
            })
            .catch((e) => {
                console.log(e)
            })




    }



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
                    onChange={(event) => onChangeInputEmail(event)}
                    style={{
                        borderColor: "#dde2e7",
                        borderWidth: 2,
                        height: 60,
                        borderRadius: 10,

                        fontWeight: "600",
                        fontSize: 15,
                        padding: 10,
                        marginBottom: 10,
                        backgroundColor: "#ffffff"
                    }}

                    placeholder="Số điện thoại di hoặc email"

                />
                <TextInput
                    onChange={(event) => onChangeInputPassword(event)}
                    style={{
                        borderColor: "#dde2e7",
                        borderWidth: 2,
                        height: 60,
                        borderRadius: 10,
                        // color: "#bac3ca",
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
                        onPress={() => { handleLogin() }}
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
                    <Pressable style={{
                        // borderColor: "#dde2e7",
                        // borderWidth: 2,
                        height: 60,
                        // backgroundColor: "#0163e0",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 30,


                    }}>
                        <Text
                            style={{
                                color: "red",
                                paddingTop: 10,
                                fontSize: 20
                            }}
                        >{errMessage}</Text>
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
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text>Tạo tài khoản</Text>
                    </Pressable >
                </View>

            </View>

        </View>
    )
}

export default LoginScreen;