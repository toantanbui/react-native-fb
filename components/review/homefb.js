import { View, Text, StyleSheet, Button, Pressable, Image, ScrollView, FlatList, TouchableOpacity } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState, useEffect } from "react"
import PostsScreen from "./posts";
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions';
import { storeData, getData, removeValue, getAllKeys } from '../storage/asyncStorage'
const styles = StyleSheet.create({
    container: {
        fontSize: 10,
        color: "red"

    }
})


const HomefbScreen = () => {

    const navigation = useNavigation()

    const dispatch = useDispatch()
    const map = new Map()


    let dataGetPostsByTimeRedux = useSelector(state => state.admin.dataGetPostsByTime)
    const [list, setList] = useState([]);

    useEffect(() => {
        dispatch(actions.handleGetPostByTime({}))
    }, [])

    // useEffect(() => {

    //     setList(dataGetPostsByTimeRedux)


    // }, [dataGetPostsByTimeRedux])


    const handlePression = async () => {
        await getAllKeys()
            .then(data => {

                console.log("isLoggendIn", data)


            })
            .catch((e) => {
                console.log(e)
            })
        await getData('userInfo')
            .then(data => {

                console.log("key-2", data)


            })
            .catch((e) => {
                console.log(e)
            })

    }

    const handleReload = () => {
        dispatch(actions.handleGetPostByTime({}))
    }



    return (
        <View style={styles.container}>
            {console.log('storage state list', list)}
            <View style={{
                // borderBottomWidth: 1,
                // borderBottomColor: "red",
                height: "auto",
                flexDirection: "row",
                padding: 5,
                justifyContent: "space-between",
                // backgroundColor: "red"
            }}>
                {/* <Pressable style={{
                    borderWidth: 1,
                    borderColor: "red",
                    height: "auto"
                }}
                >
                    <Text>Facebook</Text>
                </Pressable> */}
                <Image
                    style={{
                        height: 50,
                        width: 150,
                        // borderWidth: 2,
                        // borderColor: "red",
                        // borderRadius: 50,

                    }}
                    source={require("../images/fb.png")} />
                <View style={{
                    // borderWidth: 1,
                    // borderColor: "red",
                    height: 50,
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <View style={{
                        // borderWidth: 1,
                        // borderColor: "red",
                        height: 40,
                        width: 40,
                        borderRadius: 40,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 10,
                        backgroundColor: "#e6e5ed"
                    }}>
                        <Ionicons name="add" size={27} color="black"
                            onPress={() => { handlePression() }}
                        />
                    </View>
                    <View style={{
                        // borderWidth: 1,
                        // borderColor: "red",
                        height: 40,
                        width: 40,
                        borderRadius: 40,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 10,
                        backgroundColor: "#e6e5ed"
                    }}>
                        <Ionicons name="search-sharp" size={24} color="black" />
                    </View>
                    <View style={{
                        // borderWidth: 1,

                        // borderColor: "red",
                        height: 40,
                        width: 40,
                        borderRadius: 40,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 10,
                        backgroundColor: "#e6e5ed"
                    }}>
                        <Feather name="menu" size={24} color="black" />
                    </View>

                </View>
            </View>
            <View style={{
                borderBottomWidth: 1,
                borderBottomColor: "#bebdc1",
                height: "auto",
                flexDirection: "row",
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
                paddingBottom: 20,
                justifyContent: "space-between",
                // backgroundColor: "red"
            }}>
                <View>
                    <TouchableOpacity>
                        <Feather name="home" size={24} color="black"
                            onPress={() => { handleReload() }}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <Feather name="users" size={24} color="black" />
                </View>
                <View>
                    <AntDesign name="message1" size={24} color="black" />
                </View>
                <View>
                    <Feather name="bell" size={24} color="black" />
                </View>
                <View>
                    <MaterialIcons name="ondemand-video" size={24} color="black" />
                </View>
                <View>
                    <MaterialIcons name="storefront" size={24} color="black" />
                </View>
            </View>


            <View style={{
                flexDirection: 'row',
                borderBottomWidth: 3,
                borderBottomColor: "#bebdc1",
                height: "auto",
                padding: 10,
                justifyContent: 'space-between',
                alignItems: 'center'
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
                        source={require("../images/anh.jpg")}
                        onPress={() => { navigation.navigate("PersonalPage") }}
                    />
                </Pressable>
                <TouchableOpacity style={{
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
                </TouchableOpacity >
                <AntDesign name="picture" size={24} color="black" />
            </View>

            <View style={{
                height: 600
            }}
            >

                {dataGetPostsByTimeRedux && <FlatList
                    data={dataGetPostsByTimeRedux}
                    renderItem={({ item, index }) => {
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


                            />
                        )
                    }}

                />}
            </View>
            {/* {
                    list.map((item, index) => {
                        return (
                           
                        )
                    })
                } */}

        </View>
    )
}

export default HomefbScreen;