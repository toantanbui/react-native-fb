import { View, Text, StyleSheet, Button } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
        fontSize: 10,
        color: "red"

    }
})


const AboutScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text>This is AboutScreen</Text>
            <Button title="Press"
                onPress={() => { navigation.navigate("Home") }}
            />
        </View>
    )
}

export default AboutScreen;