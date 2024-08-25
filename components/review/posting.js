import { View, Text, StyleSheet, Button, Pressable, Image, TextInput, TouchableOpacity } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions';
import { storeData, getData, removeValue } from '../storage/asyncStorage'
//buffer để chuyen dang binary sang string
import { Buffer } from 'buffer';

import * as ImagePicker from 'expo-image-picker';

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // borderColor: "red"

    }
})


const PostingScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [idUsers, setIdUsers] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [avatar, setAvatar] = useState('');

    const [postsName, setPostsName] = useState('');
    const [postsContent, setPostsContent] = useState('');
    const [postsImage, setPostsImage] = useState('');
    let userInfoRedux = useSelector(state => state.admin.userInfo)
    let errMessageCreatePostsRedux = useSelector(state => state.admin.errMessageCreatePosts)

    useEffect(() => {
        getData('userInfo')
            .then(data => {
                let dataStorage = JSON.parse(data)
                console.log("isLoggendIn", dataStorage.idUser)
                dispatch(actions.handleGetUserInfo({ idUsers: dataStorage.idUser }))
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
            // setPostsName(userInfoRedux[0].postsName)
            // setPostsContent(userInfoRedux[0].postsContent)
        }

    }, [userInfoRedux])

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
        });

        //console.log("base64 la", result.assets[0].base64, " xin chao");
        //let a = new Buffer(result.assets[0].base64, 'base64').toString('binary')

        if (!result.canceled) {
            // setPostsImage(result.assets[0].uri);
            setPostsImage('data:image/png;base64,' + result.assets[0].base64);
        }
    };

    let handleCreatePosts = () => {
        dispatch(actions.handleCreatePosts({
            idUsers: idUsers,
            firstName: firstName,
            lastName: lastName,
            avatar: avatar,

            postsName: postsName,
            postsContent: postsContent,
            postsImage: postsImage

        }))
        setPostsContent('')
        setPostsImage('')
    }

    const onChangeInputContent = (event) => {
        let data = event.nativeEvent.text
        console.log("data la", data)
        setPostsContent(data)
    }





    return (
        <View style={styles.container}>
            {console.log('postsImage', postsImage, 'file anh')}
            <View style={{
                // borderWidth: 1,
                // borderColor: "red",
                height: "auto",
                padding: 10,
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Pressable>
                    <Image
                        style={{
                            height: 50,
                            width: 50,
                            borderWidth: 2,
                            borderColor: "red",
                            borderRadius: 50,

                        }}
                        source={require("../images/star.png")}
                        onPress={() => { navigation.navigate("PersonalPage") }}
                    />
                </Pressable>
                <Text style={{
                    fontWeight: "600",
                    fontSize: 20,
                    marginLeft: 10
                }}>
                    Bùi Tấn Toàn
                </Text>

            </View>
            <View style={{
                // borderWidth: 1,
                // borderColor: "red",
                height: "auto",
                padding: 10,

            }}>
                <View style={{
                    height: 200,
                    // borderWidth: 1,
                    // borderColor: "red",


                }}>
                    <TextInput
                        onChange={(event) => onChangeInputContent(event)}
                        value={postsContent}
                        multiline={true}
                        //Đưa con trỏ lên đầu hàng
                        textAlignVertical="top"
                        style={{
                            // borderColor: "#dde2e7",
                            // borderWidth: 2,
                            height: "100%",
                            width: "100%",
                            borderRadius: 10,

                            fontWeight: "600",
                            fontSize: 15,
                            padding: 10,
                            //marginRight: 10,
                            backgroundColor: "#f7f8fa"
                        }}
                        placeholder="Bạn đang nghĩa gì?"
                    />
                </View>
            </View>
            <TouchableOpacity style={{
                // borderColor: "red",
                // borderWidth: 2,
                padding: 10,
                flexDirection: "row",
                alignItems: "center"
            }}
                onPress={() => { selectImage() }}
            >
                <AntDesign name="picture" size={24} color="black"

                />
                <Text style={{
                    marginLeft: 10
                }}

                >Ảnh/video</Text>
            </TouchableOpacity>
            {postsImage ? <Pressable style={{
                // borderColor: 'red',
                // borderWidth: 1,
                minHeight: 50,
                paddingLeft: 10
            }}>
                {postsImage && <Image source={{ uri: postsImage }} style={{
                    minHeight: 50,
                    width: 50
                }} />}
            </Pressable> : ''}
            <View style={{
                padding: 10
            }}>
                <Button title="ĐĂNG"
                    onPress={() => { handleCreatePosts() }}
                />
            </View>
            <View>
                <Text style={{
                    fontSize: 20,
                    color: 'red',
                    marginTop: 5,
                    paddingLeft: 10
                }}

                >{errMessageCreatePostsRedux}</Text>
            </View>
        </View>
    )
}

export default PostingScreen;