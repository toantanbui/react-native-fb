import { View, Text, StyleSheet, Button } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import instance from "../axios";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions';

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
    const [listTodo, setListTodo] = useState([])


    const handleCallApi = async () => {
        console.log("Api da duoc goi")
        dispatch(actions.handleGetDateUser({}))

        setListTodo(data)


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
            <Text>
                {JSON.stringify(listTodo)}
            </Text>
        </View>
    )
}

export default HomeScreen;