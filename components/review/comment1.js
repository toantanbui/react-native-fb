import { View, Text, StyleSheet, Button, Image, Pressable, ScrollView, TextInput, Modal } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import Comment11Screen from "./comment11";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { storeData, getData, removeValue } from '../storage/asyncStorage'
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions';

const styles = StyleSheet.create({
    container: {
        fontSize: 10,
        color: "red"

    }
})


const Comment1Screen = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [list, setList] = useState([1, 1, 2, 3, 2, 12, 312, 312, 312, 2312])
    let [isShow, setIsShow] = useState(false)




    const handleOpenModalComment1 = () => {
        props.handleOpenModal()
    }

    let date = new Date(props.time);
    let date1 = new Date();
    let date2 = date1.getDate() - date.getDate();



    const [lastNameUsers, setLastNameUsers] = useState('');
    const [firstNameUsers, setFirstNameUsers] = useState('');
    const [avatarUsers, setAvatarUsers] = useState('');


    const [commentContentTest, setCommentContentTest] = useState('');
    const [commentContent, setCommentContent] = useState('');
    const [commentImage, setCommentImage] = useState('');
    const [idUsers, setIdUsers] = useState('');
    const [idPosts, setIdPosts] = useState('');
    let userInfoRedux = useSelector(state => state.admin.userInfo)
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



    }, [userInfoRedux])






    const onChangeInputContent = (event) => {
        let data = event.nativeEvent.text
        let data1 = `${props.lastName}  ${props.firstName}, ` + data;
        console.log("data la", data1)
        setCommentContent(data1)
    }
    //`${props.lastName} ${props.firstName}, `
    let handleCreateComment1 = () => {
        // setCommentContent(`${props.lastName} ${props.firstName}, ${commentContentTest}`)
        dispatch(actions.handleCreateComment1({
            idPosts: props.idPosts,
            idComment: props.idComment,
            idUsers: idUsers,
            firstName: firstNameUsers,
            lastName: lastNameUsers,
            avatar: avatarUsers,
            commentContent: commentContent,
            commentImage: commentImage,

        }))
        setCommentContent('')
        setCommentImage('')

    }







    return (
        <Modal
            animationType="slide"
            //trong suốt hay không
            transparent={false}
            //tắt hoặc mở modal
            visible={props.modalVisible}


        >
            <View style={{
                borderBottomColor: "#e3e6ed",
                borderBottomWidth: 2,
                height: 50,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                {console.log('commentContent', commentContent)}
                <AntDesign name="close" size={24} color="black"
                    onPress={() => { handleOpenModalComment1() }}
                />

                <Text style={{
                    fontSize: 20,
                    marginLeft: 10,
                    fontWeight: 600
                }}>
                    Bình luận
                </Text>
            </View>
            <ScrollView>
                <View style={{
                    // borderColor: "red",
                    // borderWidth: 2,
                    height: "auto",
                    flexDirection: "row",
                    paddingLeft: 10,
                    paddingTop: 10
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
                        height: "auto",
                        width: "85%",
                        // borderWidth: 2,
                        // borderColor: "red",
                        padding: 10


                    }}>
                        <View style={{
                            minHeight: 100,
                            width: "100%",
                            //borderWidth: 2,
                            //borderColor: "red",
                            padding: 10,
                            backgroundColor: "#e3e6ed",
                            borderRadius: 10,
                            marginBottom: 5


                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: "600"
                            }}
                            >{props.lastName} {props.firstName}</Text>
                            <Text>
                                {props.commentContent}
                            </Text>
                        </View>

                        <View style={{
                            flexDirection: "row",
                            paddingLeft: 10,
                            marginBottom: 5
                        }}>
                            <Text>{date2} ngày</Text>
                            <Pressable style={{
                                marginLeft: 10,

                            }}>
                                <Text style={{
                                    fontWeight: "600"
                                }}>Thích</Text>
                            </Pressable>
                            <Pressable style={{
                                marginLeft: 10,
                                marginRight: 10,
                                fontWeight: "600"
                            }}
                                onPress={() => { setIsShow(!isShow) }}
                            >
                                <Text style={{
                                    fontWeight: "600"
                                }}>Phản hồi</Text>
                            </Pressable  >
                            <Text>60</Text>
                        </View>


                    </View>
                </View>
                <View>
                    {isShow === true ? <View style={{
                        height: 90,
                        flexDirection: "row",
                        justifyContent: 'center',
                        alignItems: "center",
                        paddingRight: 10,
                        paddingLeft: 10
                    }}>
                        <AntDesign name="picture" size={24} color="black" />
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
                                //value={commentContent}
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
                            <Feather name="send" size={24} color="black"
                                onPress={() => { handleCreateComment1() }}
                            />
                        </View>

                    </View> : ''}

                </View>
                <View style={{
                    paddingLeft: 70,
                    paddingRight: 10
                }}>
                    {props.comment1.map((item, index) => {
                        return (
                            <Comment11Screen key={index}
                                firstName={item.firstName}
                                lastName={item.lastName}
                                commentContent={item.commentContent}
                                time={item.time}

                                idPosts={props.idPosts}
                                idComment={props.idComment}
                                idUsers={idUsers}
                                firstNameUsers={firstNameUsers}
                                lastNameUsers={lastNameUsers}
                                avatarUsers={avatarUsers}






                            />
                        )
                    })}
                </View>
            </ScrollView>
        </Modal>
    )
}

export default Comment1Screen;