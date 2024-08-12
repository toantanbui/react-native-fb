import { View, Text, StyleSheet, Button, Image, Pressable, ScrollView, TextInput } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

const styles = StyleSheet.create({
    container: {
        fontSize: 10,
        color: "red"

    }
})


const Comment11Screen = () => {
    const navigation = useNavigation()
    const [list, setList] = useState([1, 1, 2, 3, 2, 12, 312, 312, 312, 2312])
    let [isShow, setIsShow] = useState(false)
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
                            fontSize: 20,
                            fontWeight: "600"
                        }}
                        >Tên</Text>
                        <Text>Note that some props are only available with multiline={true / false}.
                            Additionally, border styles that apply to only one side of the element
                            (e.g., borderBottomColor, borderLeftWidth, etc.) will not be applied if
                            multiline=true.
                            To achieve the same effect, you can wrap your TextInput in a View:
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        paddingLeft: 10,
                        marginBottom: 5
                    }}>
                        <Text>13 phut</Text>
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

                </View> : ''}

            </View>
        </View>
    )
}

export default Comment11Screen;