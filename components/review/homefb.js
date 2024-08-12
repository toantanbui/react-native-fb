import { View, Text, StyleSheet, Button, Pressable, Image, ScrollView } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from "react"
import PostsScreen from "./posts";
const styles = StyleSheet.create({
    container: {
        fontSize: 10,
        color: "red"

    }
})


const HomefbScreen = () => {
    const navigation = useNavigation()
    const [list, setList] = useState([1, 1, 2, 3, 2, 12, 312, 312, 312, 2312])
    return (
        <View style={styles.container}>
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
                        <Ionicons name="add" size={27} color="black" />
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
                    <Feather name="home" size={24} color="black" />
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

            <ScrollView>
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
                            source={require("../images/star.png")}
                            onPress={() => { navigation.navigate("PersonalPage") }}
                        />
                    </Pressable>
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
                {
                    list.map((item, index) => {
                        return (
                            <PostsScreen key={index} />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default HomefbScreen;