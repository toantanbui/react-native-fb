import { View, Text, StyleSheet, Button, Modal, Image, Pressable, ScrollView, TextInput, TouchableOpacity } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import CommentScreen from "./comment";
import * as actions from '../redux/actions';
import { Buffer } from 'buffer';
import { storeData, getData, removeValue } from '../storage/asyncStorage'
import * as ImagePicker from 'expo-image-picker';



const styles = StyleSheet.create({
    container: {
        fontSize: 10,
        color: "red",
        height: "auto",
        // borderBottomWidth: 2,
        // borderColor: "black",
        marginBottom: 10

    }
})

let filerStatus = (arr, id) => {
    let filer = []
    filer = arr.filter((item, index) => {
        return item.idUsers === id;
    })

    return filer;
}


const Posts_inforScreen = () => {
    const [list, setList] = useState([1, 1, 2, 3, 2, 12, 312, 312, 312, 2312])
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const route = useRoute()
    const [idPosts, setIdPosts] = useState('');
    let dataPostsInfoRedux = useSelector(state => state.admin.dataPostsInfo)
    let userInfoRedux = useSelector(state => state.admin.userInfo)

    const [idUsers, setIdUsers] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [time, setTime] = useState('');

    const [postsName, setPostsName] = useState('');
    const [postsContent, setPostsContent] = useState('');
    const [postsImage, setPostsImage] = useState('');
    const [likes, setLikes] = useState(0);
    const [comment, setComment] = useState('');

    const [status, setStatus] = useState(false);

    useEffect(() => {


        getData('userInfo')
            .then(data => {
                let dataStorage = JSON.parse(data)
                console.log("isLoggendIn", dataStorage.idUser)
                dispatch(actions.handleGetPostsInfo({
                    idPosts: route.params?.idPosts,
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
            setLastNameUsers(userInfoRedux[0].lastName)
            setFirstNameUsers(userInfoRedux[0].firstName)

            let imageBase64Users = ''
            if (userInfoRedux[0].avatar) {
                imageBase64Users = new Buffer(userInfoRedux[0].avatar, 'base64').toString('binary')
                if (imageBase64Users) {


                    setAvatarUsers(imageBase64Users)

                }
            }

        }



        if (dataPostsInfoRedux !== null) {
            setIdPosts(dataPostsInfoRedux[0]._id)
            setLastName(dataPostsInfoRedux[0].lastName)
            setFirstName(dataPostsInfoRedux[0].firstName)
            setTime(dataPostsInfoRedux[0].createAt)
            setPostsContent(dataPostsInfoRedux[0].postsContent)
            setComment(dataPostsInfoRedux[0].comment)
            setLikes(dataPostsInfoRedux[0].likes)

            if (dataPostsInfoRedux[0].likeStatus && dataPostsInfoRedux[0].likeStatus.length > 0) {

                let filter = []
                filter = filerStatus(dataPostsInfoRedux[0].likeStatus, idUsers);
                console.log('FILTER là', filter, "xin chao", filter.length)
                if (filter && filter.length > 0) {

                    setStatus(filter[0].status)
                }





            }


            let imageBase64 = '';
            if (dataPostsInfoRedux[0].postsImage) {
                imageBase64 = new Buffer(dataPostsInfoRedux[0].postsImage, 'base64').toString('binary')
                if (imageBase64) {


                    setPostsImage(imageBase64)

                }
            }
            let imageBase641 = ''
            if (dataPostsInfoRedux[0].avatar) {
                imageBase641 = new Buffer(dataPostsInfoRedux[0].avatar, 'base64').toString('binary')
                if (imageBase641) {


                    setAvatar(imageBase641)

                }
            }

        }


    }, [dataPostsInfoRedux, userInfoRedux])


    const [lastNameUsers, setLastNameUsers] = useState('');
    const [firstNameUsers, setFirstNameUsers] = useState('');
    const [avatarUsers, setAvatarUsers] = useState('');


    const [commentContent, setCommentContent] = useState('');
    const [commentImage, setCommentImage] = useState('');



    const onChangeInputContent = (event) => {
        let data = event.nativeEvent.text
        console.log("data la", data)
        setCommentContent(data)
    }

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
        });



        if (!result.canceled) {

            setCommentImage('data:image/png;base64,' + result.assets[0].base64);
        }
    };

    let handleCreateComment = () => {
        dispatch(actions.handleCreateComment({
            idPosts: idPosts,

            idUsers: idUsers,
            firstName: firstNameUsers,
            lastName: lastNameUsers,

            commentContent: commentContent,
            commentImage: commentImage,

        }))
        setCommentContent('')
        setCommentImage('')

    }

    const handleCreateLikeStatus = (data) => {




        dispatch(actions.handleCreateLikeStatus({

            idUsers: idUsers,
            idPosts: idPosts,
            status: `${data}`


        }))
        setStatus(data)


    }





    return (
        <View style={styles.container}>
            {console.log('ảnh', postsImage)}
            <ScrollView style={{
                minHeight: 200
            }}>
                <View style={{
                    height: 70,
                    borderBottomWidth: 2,
                    borderColor: "#dde2e7",
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    alignItems: "center",
                    padding: 10
                }}>
                    <Image
                        style={{
                            height: 50,
                            width: 50,
                            borderWidth: 2,
                            borderColor: "red",
                            borderRadius: 50,

                        }}
                        source={require("../images/star.png")} />
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
                        >{lastName} {firstName}</Text>
                        <Text style={{

                        }}

                        >{time}</Text>
                    </View>
                    <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
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
                    >{postsContent}</Text>

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
                    <Pressable style={{
                        // borderWidth: 2,
                        backgroundColor: "#e3e6ed",
                        width: 110,
                        height: 40,
                        borderRadius: 20,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                        onPress={() => { handleCreateLikeStatus(!status) }}
                    >
                        <AntDesign name="like2" size={24} color={status ? "blue" : "black"} />
                        <Text style={{
                            marginLeft: 5
                        }}>{likes}</Text>

                    </Pressable>
                    <Pressable style={{
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
                        <Feather name="message-circle" size={24} color="black" />
                        <Text style={{
                            marginLeft: 5
                        }}

                        >{comment && comment.length}</Text>

                    </Pressable>
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

                <View style={{
                    height: 90,
                    flexDirection: "row",
                    justifyContent: 'center',
                    alignItems: "center",
                    paddingRight: 10,
                    paddingLeft: 10
                }}>
                    <AntDesign name="picture" size={24} color="black"
                        onPress={() => { selectImage() }}
                    />
                    <View style={{
                        borderColor: "#dde2e7",
                        borderWidth: 2,
                        width: 310,
                        flexDirection: "row",
                        justifyContent: 'center',
                        alignItems: "center",
                        padding: 5,
                        borderRadius: 30,
                        backgroundColor: "#eff3f6",
                        height: 70,
                        marginLeft: 10
                    }}>
                        <TextInput
                            onChange={(event) => onChangeInputContent(event)}
                            multiline={true}
                            value={commentContent}
                            style={{
                                // borderColor: "#dde2e7",
                                //borderWidth: 2,
                                height: 60,
                                width: 250,
                                borderRadius: 10,

                                fontWeight: "600",
                                fontSize: 15,
                                padding: 10,
                                marginRight: 10,
                                backgroundColor: "#eff3f6"
                            }}
                            placeholder="Viết bình luận"

                        />
                        <TouchableOpacity>
                            <Feather name="send" size={24} color="black"
                                onPress={() => { handleCreateComment() }}
                            />
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{
                    height: "auto",

                    borderColor: "#dde2e7",
                    borderWidth: 2,
                    paddingRight: 10,
                    paddingLeft: 10
                }}>
                    {commentImage ? <Pressable style={{
                        // borderColor: 'red',
                        // borderWidth: 1,
                        minHeight: 50,
                        paddingLeft: 10
                    }}>
                        {commentImage && <Image source={{ uri: commentImage }} style={{
                            minHeight: 50,
                            width: 50
                        }} />}
                    </Pressable> : ''}
                    {comment && comment.map((item, index) => {
                        return (
                            <CommentScreen key={index}
                                idPosts={idPosts}
                                firstName={item.firstName}
                                lastName={item.lastName}
                                commentContent={item.commentContent}
                                commentImage={item.commentImage}
                                time={item.time}
                                avatar={item.avatar}
                                comment1={item.comment1}
                                idComment={item._id}

                            />
                        )
                    })}
                </View>
            </ScrollView>


        </View>

    )
}

export default Posts_inforScreen;