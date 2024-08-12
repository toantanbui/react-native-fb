import instance from "./axios";

const getDataUser = () => {
    return instance.get('/getUser');
}

const createUserApi = (data) => {
    return instance.post('/createUser', data);
}




export {
    getDataUser, createUserApi
}