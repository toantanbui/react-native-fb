import { View, Text, StyleSheet, Button, Pressable, Image, TextInput } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';
const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // borderColor: "red"

    }
})


const PostingScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{
                // borderWidth: 1,
                // borderColor: "red",
                height: "auto",
                padding: 10,
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Pressable>
                    <Image
                        style={{
                            height: 50,
                            width: 50,
                            borderWidth: 2,
                            borderColor: "red",
                            borderRadius: 50,

                        }}
                        source={require("../images/star.png")}
                        onPress={() => { navigation.navigate("PersonalPage") }}
                    />
                </Pressable>
                <Text style={{
                    fontWeight: "600",
                    fontSize: 20,
                    marginLeft: 10
                }}>
                    Bùi Tấn Toàn
                </Text>

            </View>
            <View style={{
                // borderWidth: 1,
                // borderColor: "red",
                height: "auto",
                padding: 10,

            }}>
                <View style={{
                    height: 200,
                    // borderWidth: 1,
                    // borderColor: "red",


                }}>
                    <TextInput
                        multiline={true}
                        //Đưa con trỏ lên đầu hàng
                        textAlignVertical="top"
                        style={{
                            // borderColor: "#dde2e7",
                            // borderWidth: 2,
                            height: "100%",
                            width: "100%",
                            borderRadius: 10,

                            fontWeight: "600",
                            fontSize: 15,
                            padding: 10,
                            //marginRight: 10,
                            backgroundColor: "#f7f8fa"
                        }}
                        placeholder="Bạn đang nghĩa gì?"
                    />
                </View>
            </View>
            <Pressable style={{
                // borderColor: "red",
                // borderWidth: 2,
                padding: 10,
                flexDirection: "row",
                alignItems: "center"
            }}>
                <AntDesign name="picture" size={24} color="black" />
                <Text style={{
                    marginLeft: 10
                }}>Ảnh/video</Text>
            </Pressable>
            <View style={{
                padding: 10
            }}>
                <Button title="ĐĂNG" />
            </View>
        </View>
    )
}

export default PostingScreen;