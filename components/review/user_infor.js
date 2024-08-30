import { View, Text, StyleSheet, Button, TextInput } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState, useEffect } from "react";
import * as actions from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { storeData, getData, removeValue } from '../storage/asyncStorage'


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



const User_inforScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    let userInfoRedux = useSelector(state => state.admin.userInfo)
    let errMessageUserInfoRedux = useSelector(state => state.admin.errMessageUserInfo)

    const [email, setEmail] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');

    const [idUsers, setIdUsers] = useState('');

    useEffect(() => {


        getData('userInfo')
            .then(data => {
                let dataStorage = JSON.parse(data)
                console.log("isLoggendIn", dataStorage.idUser)
                dispatch(actions.handleGetUserInfo({

                    idUsers: dataStorage.idUser
                }))
                setIdUsers(dataStorage.idUser)
            })
            .catch((e) => {
                console.log(e)
            })


    }, [])


    useEffect(() => {


        if (userInfoRedux !== null) {
            console.log('posting ', userInfoRedux)
            setLastName(userInfoRedux[0].lastName)
            setFirstName(userInfoRedux[0].firstName)
            setEmail(userInfoRedux[0].email)
            setPassword(userInfoRedux[0].password)
            setAge(userInfoRedux[0].age)



        }






    }, [userInfoRedux])








    const onChangeInputEmail = (event) => {
        let data = event.nativeEvent.text
        console.log("data la", data)
        setEmail(data)
    }
    const onChangeInputLastName = (event) => {
        let data = event.nativeEvent.text
        console.log("data la", data)
        setLastName(data)
    }
    const onChangeInputFirstName = (event) => {
        let data = event.nativeEvent.text
        console.log("data la", data)
        setFirstName(data)
    }
    const onChangeInputPassword = (event) => {
        let data = event.nativeEvent.text
        console.log("data la", data)
        setPassword(data)
    }

    const onChangeInputAge = (event) => {
        let data = event.nativeEvent.text
        console.log("data la", data)
        setAge(data)
    }

    const handleUpdateUserInfo = () => {
        dispatch(actions.handleUpdateUserInfo({
            idUsers: idUsers,
            lastName: lastName,
            firstName: firstName,

            password: password,
            age: age

        }))

    }



    return (
        <View style={styles.container}>
            {/* <View style={styles.container_route}>
                <AntDesign name="arrowleft" size={24} color="black"
                    onPress={() => { navigation.navigate("Login") }}
                />
            </View> */}
            <View style={styles.container_title}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: "600",
                    marginBottom: 10
                }}
                >Cập nhật thông tin</Text>
                {/* <Text
                    style={{
                        fontSize: 15,
                        fontWeight: "600"
                    }}
                >Nhập thông tin cá nhân của bạn</Text> */}
            </View>
            <View style={styles.container_content}>
                <View style={styles.container_content_input}>
                    <Text style={{

                    }}>Họ</Text>
                    <TextInput
                        onChange={(event) => onChangeInputLastName(event)}
                        style={{
                            borderBottomWidth: 2,
                            borderBottomColor: "black"

                        }}
                        value={lastName}
                    />
                </View>
                <View style={styles.container_content_input}>
                    <Text style={{

                    }}>Tên</Text>
                    <TextInput
                        onChange={(event) => onChangeInputFirstName(event)}
                        style={{
                            borderBottomWidth: 2,
                            borderBottomColor: "black"

                        }}
                        value={firstName}
                    />
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
                    <TextInput
                        onChange={(event) => onChangeInputEmail(event)}
                        style={{
                            borderBottomWidth: 2,
                            borderBottomColor: "black"

                        }}
                        value={email}
                    />
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
                    <TextInput
                        onChange={(event) => onChangeInputPassword(event)}
                        style={{
                            borderBottomWidth: 2,
                            borderBottomColor: "black"

                        }}
                        value={password}
                    />
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

                    }}>Tuổi</Text>
                    <TextInput

                        onChange={(event) => onChangeInputAge(event)}
                        style={{
                            borderBottomWidth: 2,
                            borderBottomColor: "black"

                        }}
                        value={age}
                    />
                    {console.log('age la ', age)}
                </View>







            </View>
            <View >
                <Button title="update"
                    onPress={() => handleUpdateUserInfo()}
                />
                <Text
                    style={{
                        color: "red",
                        paddingTop: 10,
                        fontSize: 20
                    }}
                >{errMessageUserInfoRedux}</Text>
            </View>

        </View>
    )
}

export default User_inforScreen;