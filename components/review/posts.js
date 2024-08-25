import { View, Text, StyleSheet, Button, Modal, Image, Pressable, Alert, TouchableOpacity, } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { useState, useEffect } from "react";
import { Buffer } from 'buffer';
import * as actions from '../redux/actions';


import { useSelector, useDispatch } from 'react-redux';
import { storeData, getData, removeValue } from '../storage/asyncStorage'

const styles = StyleSheet.create({
    container: {
        fontSize: 10,
        color: "red",
        height: "auto",
        borderBottomWidth: 2,
        borderColor: "black",
        marginBottom: 10

    }
})


const PostsScreen = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [postsImage, setPostsImage] = useState('');
    const [avatar, setAvatar] = useState('');




    useEffect(() => {
        let imageBase64 = '';
        if (props.postsImage) {
            imageBase64 = new Buffer(props.postsImage, 'base64').toString('binary')
            if (imageBase64) {


                setPostsImage(imageBase64)

            }
        }
        let imageBase641 = ''
        if (props.avatar) {
            imageBase641 = new Buffer(props.avatar, 'base64').toString('binary')
            if (imageBase641) {


                setAvatar(imageBase641)

            }
        }





    }, [props.postsImage])

    let date = new Date(props.time);


    const handleDelete = () => {
        Alert.alert("Xóa bài viết", "Bạn có chắc muốn xóa bài viết?",
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'ok', onPress: () => console.log('ok Pressed')
                }
            ]
        )
    }






    return (
        <View style={styles.container}>
            <View style={{
                height: 70,
                borderBottomWidth: 2,
                borderColor: "#dde2e7",
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: "center",
                padding: 10
            }}>
                <Pressable
                    onPress={() => { navigation.navigate("PersonalPage") }}
                >
                    <Image
                        style={{
                            height: 50,
                            width: 50,
                            borderWidth: 2,
                            borderColor: "red",
                            borderRadius: 50,

                        }}
                        source={require("../images/star.png")}

                    />
                </Pressable>
                <View style={{
                    // borderWidth: 2,
                    // borderColor: "red",
                    width: 275,
                    height: "auto",
                    marginLeft: 5
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "600"
                    }}
                        onPress={() => { navigation.navigate("PersonalPage") }}
                    >{props.lastName} {props.firstName}</Text>
                    <Text style={{

                    }}

                    >{date.toLocaleString()}</Text>
                </View>
                {console.log("idPost post", props.idPosts)}
                <MaterialCommunityIcons name="dots-horizontal" size={24} color="black"
                    onPress={() => { handleDelete() }}

                />
            </View>
            <View style={{
                // borderWidth: 2,
                // borderColor: "red",
                height: "auto",
                padding: 10
            }}>
                <Text style={{
                    // borderWidth: 2,
                    // borderColor: "red",
                    minHeight: 100,
                    fontSize: 20
                }}
                >{props.postsContent}</Text>
                {postsImage && <Image

                    style={{
                        height: 300,
                        width: "100%",
                    }}

                    source={{ uri: postsImage }}

                />}

            </View>
            <View style={{
                height: 70,
                width: "100%",
                borderWidth: 2,
                borderColor: "#dde2e7",
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: "center",
                padding: 10


            }}

            >
                <TouchableOpacity style={{
                    // borderWidth: 2,
                    backgroundColor: "#e3e6ed",
                    width: 110,
                    height: 40,
                    borderRadius: 20,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                }}

                >
                    <AntDesign name="like2" size={24} color="black" />
                    <Text style={{
                        marginLeft: 5
                    }}>{props.likes && props.likes.length}</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{
                    // borderWidth: 2,
                    backgroundColor: "#e3e6ed",
                    width: 110,
                    height: 40,
                    borderRadius: 20,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                    onPress={() => { navigation.navigate("Posts_infor", { idPosts: props.idPosts }) }}
                >
                    <Feather name="message-circle" size={24} color="black" />
                    <Text style={{
                        marginLeft: 5
                    }}

                    >{props.comment && props.comment.length}</Text>

                </TouchableOpacity>
                <Pressable style={{
                    // borderWidth: 2,
                    backgroundColor: "#e3e6ed",
                    width: 110,
                    height: 40,
                    borderRadius: 20,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <MaterialCommunityIcons name="share-all-outline" size={24} color="black" />


                </Pressable>

            </View>
        </View>

    )
}

export default PostsScreen;