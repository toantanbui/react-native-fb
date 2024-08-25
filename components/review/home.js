import { View, Text, StyleSheet, Button } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import instance from "../axios";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
    container: {
        fontSize: 60,
        fontWeight: "600",
        color: "red"

    }
})



const HomeScreen = () => {

    const dispatch = useDispatch()


    let data = useSelector(state => state.admin.dataUser)
    const navigation = useNavigation()
    const [listTodo, setListTodo] = useState([null])


    const handleCallApi = async () => {
        console.log("Api da duoc goi")
        dispatch(actions.handleGetDateUser({}))

        setListTodo(data)


    }
    // Lưu chuoi string vao bằng asyncStorge
    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('key-2', jsonValue);
            console.log("da luu")
        } catch (e) {
            console.log(e)
        }
    };
    //Lấy giá trị string
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('key-1');
            console.log("value la", value)
            if (value !== null) {
                console.log("data asyncStorage", value)
            }
        } catch (e) {
            console.log("e la", e)
        }
    };

    removeValue = async () => {
        try {
            await AsyncStorage.removeItem('key-1')
            console.log("da xoa")
        } catch (e) {
            // remove error
        }
    }


    return (
        <View>
            <Text style={styles.container}>This is HomeScreen</Text>
            <Button title="Press"
                onPress={() => { navigation.navigate("About") }}
            />
            <Button title="Press API"
                onPress={() => handleCallApi()}
            />
            <Button title="Press AsyncStoge"
                onPress={() => storeData("key da doi")}
            />
            <Button title="Press Get data AsyncStoge"
                onPress={() => getData()}
            />
            <Button title="Delete data AsyncStoge"
                onPress={() => removeValue()}
            />
            <Text>
                {JSON.stringify(listTodo)}
            </Text>
        </View>
    )
}

export default HomeScreen;