import { View, Text, StyleSheet, Button, Modal, Image, Pressable, ScrollView, TextInput } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { useState } from "react";
import CommentScreen from "./comment";



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


const Posts_inforScreen = () => {
    const [list, setList] = useState([1, 1, 2, 3, 2, 12, 312, 312, 312, 2312])
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
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
                        >Bùi Tấn Toàn</Text>
                        <Text style={{

                        }}

                        >Thời gian</Text>
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
                    >noi dung bai viet</Text>
                    <Image
                        style={{
                            height: 300,
                            width: "100%",
                            // borderWidth: 2,
                            // borderColor: "red",


                        }}
                        source={require("../images/star.png")} />

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
                    }}>
                        <AntDesign name="like2" size={24} color="black" />
                        <Text style={{
                            marginLeft: 5
                        }}>129</Text>

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
                        <Feather name="message-circle" size={24} color="black" />
                        <Text style={{
                            marginLeft: 5
                        }}

                        >129</Text>

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
                        <Feather name="send" size={24} color="black" />
                    </View>

                </View>
                <View style={{
                    height: "auto",

                    borderColor: "#dde2e7",
                    borderWidth: 2,
                    paddingRight: 10,
                    paddingLeft: 10
                }}>
                    {list.map((item, index) => {
                        return (
                            <CommentScreen key={index} />
                        )
                    })}
                </View>
            </ScrollView>


        </View>

    )
}

export default Posts_inforScreen;