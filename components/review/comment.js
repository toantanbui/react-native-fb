import { View, Text, StyleSheet, Button, Image, Pressable } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { storeData, getData, removeValue } from '../storage/asyncStorage'
import { Buffer } from 'buffer';
import Comment1Screen from "./comment1";


const styles = StyleSheet.create({
    container: {
        fontSize: 10,
        color: "red"

    }
})



const CommentScreen = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    let date = new Date(props.time);
    let date1 = new Date();
    let date2 = date1.getDate() - date.getDate();

    const [avatar, setAvatar] = useState('');


    const [commentContent, setCommentContent] = useState('');
    const [commentImage, setCommentImage] = useState('');

    useEffect(() => {
        let imageBase64 = '';
        if (props.avatar) {
            imageBase64 = new Buffer(props.avatar, 'base64').toString('binary')
            if (imageBase64) {


                setAvatar(imageBase64)

            }
        }

        let imageBase641 = '';
        if (props.commentImage) {
            imageBase641 = new Buffer(props.commentImage, 'base64').toString('binary')
            if (imageBase641) {


                setCommentImage(imageBase641)

            }
        }



    }, [props.commentImage])

    let [modalVisible, setModalVisible] = useState(false)

    const handleOpenModal = () => {
        setModalVisible(!modalVisible)
    }




    return (
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
                    minHeight: 50,
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
                        fontWeight: "600",
                        marginLeft: 0
                    }}
                    >{props.firstName} {props.lastName}</Text>
                    <Text style={{
                        fontSize: 15,

                        marginLeft: 5


                    }}

                    >
                        {props.commentContent}
                    </Text>

                </View>
                <Pressable>
                    {commentImage && <Image
                        style={{
                            height: 200,
                            width: 200,
                            borderWidth: 2,
                            borderColor: "#e3e6ed",
                            borderRadius: 10,

                        }}
                        source={{ uri: commentImage }} />}
                </Pressable>

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
                        onPress={() => { handleOpenModal() }}
                    >
                        <Text style={{
                            fontWeight: "600"
                        }}>Phản hồi</Text>
                    </Pressable  >
                    <Text>60</Text>
                </View>

                {props.comment1.length > 0 ? <Pressable style={{
                    paddingLeft: 10
                }}

                >
                    <Text style={{
                        fontWeight: "600",
                        fontSize: 15
                    }}
                        onPress={() => { handleOpenModal() }}
                    >Có {props.comment1 && props.comment1.length} phản hồi</Text>


                </Pressable> : ''}
                <Comment1Screen
                    modalVisible={modalVisible}
                    handleOpenModal={handleOpenModal}
                    lastName={props.lastName}
                    firstName={props.firstName}
                    commentContent={props.commentContent}
                    time={props.time}
                    comment1={props.comment1}
                    idPosts={props.idPosts}
                    idComment={props.idComment}
                />

            </View>
        </View>
    )
}

export default CommentScreen;