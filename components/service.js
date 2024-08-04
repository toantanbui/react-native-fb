import instance from "./axios";

const getDataUser = () => {
    return instance.get('http://192.168.1.4:8080/getUser');
}

export {
    getDataUser
}