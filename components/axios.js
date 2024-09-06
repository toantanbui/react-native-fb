import axios from 'axios';
import { storeData, getData, removeValue } from './storage/asyncStorage'



const instance = axios.create({
    baseURL: 'http://192.168.1.8:8080'

});
let dataStorage = '';

getData('userInfo')
    .then(data => {
        dataStorage = JSON.parse(data)
        console.log("isLoggendIn", dataStorage.idUser)

        instance.defaults.headers.common['Authorization'] = `Bearer ${dataStorage.token}`;

    })
    .catch((e) => {
        console.log(e)
    })




export default instance;