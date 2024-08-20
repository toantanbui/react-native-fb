import AsyncStorage from '@react-native-async-storage/async-storage';



// Lưu chuoi string vao bằng asyncStorge
export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
        console.log("da luu")
    } catch (e) {
        console.log(e)
    }
};
//Lấy giá trị string
export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        console.log("value la", value)
        if (value !== null) {
            return value
        }
    } catch (e) {
        console.log("e la", e)
    }
};

export const removeValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
        console.log("da xoa")
    } catch (e) {
        // remove error
    }
}