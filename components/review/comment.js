import { View, Text, StyleSheet, Button, Image, Pressable } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
        fontSize: 10,
        color: "red"

    }
})


const CommentScreen = () => {
    const navigation = useNavigation()
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
                        onPress={() => { navigation.navigate("comment1") }}
                    >
                        <Text style={{
                            fontWeight: "600"
                        }}>Phản hồi</Text>
                    </Pressable  >
                    <Text>60</Text>
                </View>
                <Pressable style={{
                    paddingLeft: 10
                }}
                    onPress={() => { navigation.navigate("comment1") }}
                >
                    <Text style={{
                        fontWeight: "600",
                        fontSize: 15
                    }}>7 lượt bình luận</Text>
                </Pressable>

            </View>
        </View>
    )
}

export default CommentScreen;