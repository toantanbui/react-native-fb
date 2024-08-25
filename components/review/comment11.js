import { View, Text, StyleSheet, Button, Image, Pressable, ScrollView, TextInput } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import * as actions from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

const styles = StyleSheet.create({
    container: {
        fontSize: 10,
        color: "red"

    }
})


const Comment11Screen = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [list, setList] = useState([1, 1, 2, 3, 2, 12, 312, 312, 312, 2312])
    let [isShow, setIsShow] = useState(false)


    let date = new Date(props.time);
    let date1 = new Date();
    let date2 = date1.getDate() - date.getDate();

    const [commentContent, setCommentContent] = useState('');
    const [commentImage, setCommentImage] = useState('');


    useEffect(() => {









    }, [props.firstNameUsers])




    const onChangeInputContent = (event) => {
        let data = event.nativeEvent.text
        let data1 = `${props.lastName}  ${props.firstName}, ` + data
        console.log("data la", data)
        setCommentContent(data1)
    }

    let handleCreateComment1 = () => {

        dispatch(actions.handleCreateComment1({
            idPosts: props.idPosts,
            idComment: props.idComment,
            idUsers: props.idUsers,
            firstName: props.firstNameUsers,
            lastName: props.lastNameUsers,
            avatar: props.avatarUsers,
            commentContent: commentContent,
            commentImage: commentImage,

        }))
        setCommentContent('')


    }






    return (
        <View>

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
                        {console.log('commentContent', commentContent)}
                        <TextInput
                            onChange={(event) => onChangeInputContent(event)}
                            // value={commentContent}
                            multiline={true}
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
        </View>
    )
}

export default Comment11Screen;