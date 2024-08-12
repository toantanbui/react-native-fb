import { View, Text, StyleSheet, Button, Modal, Image, Pressable } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

const styles = StyleSheet.create({
    container: {
        fontSize: 10,
        color: "red",
        height: "auto",
        borderBottomWidth: 2,
        borderColor: "black",
        marginBottom: 10

    }
})


const PostsScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{
                height: 70,
                borderBottomWidth: 2,
                borderColor: "#dde2e7",
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: "center",
                padding: 10
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
                        source={require("../images/star.png")}

                    />
                </Pressable>
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
                        onPress={() => { navigation.navigate("PersonalPage") }}
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

                    source={require("../images/star.png")}

                />

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

                >
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
                }}
                    onPress={() => { navigation.navigate("Posts_infor") }}
                >
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
        </View>

    )
}

export default PostsScreen;