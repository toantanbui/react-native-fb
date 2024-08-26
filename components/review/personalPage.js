import { View, Text, StyleSheet, Button, Image, Pressable, ScrollView } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState, useEffect } from "react";
import PostsScreen from "./posts";
import * as actions from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { storeData, getData, removeValue } from '../storage/asyncStorage'

const styles = StyleSheet.create({
    container: {
        fontSize: 10,
        color: "red",
        // padding: 10

    },
    container_infor: {
        borderColor: "#dde2e7",
        borderWidth: 2,

        height: "auto",

    }
})


const PersonalScreen = () => {
    const navigation = useNavigation()
    const [list, setList] = useState([1, 1, 2, 3, 2, 12, 312, 312, 312, 2312])
    const dispatch = useDispatch()
    let dataPostsPersonalPageRedux = useSelector(state => state.admin.dataPostsPersonalPage)

    useEffect(() => {


        getData('userInfo')
            .then(data => {
                let dataStorage = JSON.parse(data)
                console.log("isLoggendIn", dataStorage.idUser)
                dispatch(actions.handleGetPostByPersonalPage({

                    idUsers: dataStorage.idUser
                }))

            })
            .catch((e) => {
                console.log(e)
            })


    }, [])


    useEffect(() => {

        if (dataPostsPersonalPageRedux !== null) {
            console.log('dataPostsPersonalPageRedux', dataPostsPersonalPageRedux)
            setFirstName(dataPostsPersonalPageRedux[0].firstName)
            setLastName(dataPostsPersonalPageRedux[0].lastName)
            setPosts(dataPostsPersonalPageRedux[0].posts)
        }



    }, [dataPostsPersonalPageRedux])

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [posts, setPosts] = useState([]);


    const [delet, setDelet] = useState(true);














    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.container_infor}>
                    <View style={{
                        // borderColor: "red",
                        // borderWidth: 2,
                        height: 150,
                        justifyContent: "flex-end",
                        padding: 10
                    }}>

                        <Image
                            style={{
                                height: 100,
                                width: 100,
                                borderWidth: 2,
                                borderColor: "red",
                                borderRadius: 50,

                            }}
                            source={require("../images/anh.jpg")} />



                    </View>
                    <View style={{
                        // borderColor: "red",
                        // borderWidth: 2,
                        height: "auto",
                        padding: 10
                    }}>
                        <Text style={{
                            // borderColor: "red",
                            // borderWidth: 2,
                            fontSize: 30,
                            fontWeight: "600"
                        }}
                        >{lastName} {firstName}</Text>
                        <Text>221 người bạn</Text>

                    </View>
                    <View style={{
                        // borderColor: "red",
                        // borderWidth: 2,
                        height: "auto",
                        padding: 10,

                    }}>
                        <Pressable style={{
                            // borderColor: "#dde2e7",
                            // borderWidth: 2,
                            height: 50,
                            backgroundColor: "#e3e6ed",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 20,
                            flexDirection: 'row'


                        }}>
                            <MaterialCommunityIcons name="pencil" size={24} color="black" />
                            <Text style={{

                                fontWeight: "600",
                                fontSize: 20,
                                marginLeft: 10
                            }}>Chỉnh sửa trang cá nhân</Text>
                        </Pressable >
                    </View>

                </View>
                <View style={{
                    // borderColor: "red",
                    // borderWidth: 2,
                    height: "auto",
                    padding: 10,
                    // borderBottomColor: "green",
                    marginBottom: 10
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "600"
                    }}>Bài viết</Text>
                    <View style={{
                        flexDirection: 'row',
                        borderColor: "#dde2e7",
                        borderWidth: 2,
                        height: "auto",
                        padding: 10,
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
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
                        <Pressable style={{
                            // borderColor: "#dde2e7",
                            // borderWidth: 2,
                            height: 50,
                            width: 250,
                            backgroundColor: "#e3e6ed",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 20,
                            flexDirection: 'row',



                        }}
                            onPress={() => { navigation.navigate("posting") }}
                        >

                            <Text style={{

                                fontWeight: "600",
                                fontSize: 20,
                                marginLeft: 10
                            }}>Đăng cập nhập trạng thái</Text>
                        </Pressable >
                        <AntDesign name="picture" size={24} color="black" />
                    </View>
                </View>
                <View>
                    {posts && posts.map((item, index) => {
                        return (
                            <PostsScreen key={index}
                                firstName={item.firstName}
                                lastName={item.lastName}
                                avatar={item.avatar}
                                postsName={item.postsName}
                                postsContent={item.postsContent}
                                postsImage={item.postsImage}
                                comment={item.comment}
                                time={item.createdAt}
                                likes={item.likes}
                                idPosts={item._id}
                                likeStatus={item.likeStatus}

                                delet={delet}
                            />
                        )

                    })}
                </View>

            </View>
        </ScrollView>
    )
}

export default PersonalScreen;