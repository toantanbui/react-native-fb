import instance from "./axios";

const getDataUser = () => {
    return instance.get('/getUser');
}

const createUserApi = (data) => {
    return instance.post('/createUser', data);
}

const LoginUserApi = (data) => {
    return instance.post('/getUser', data);
}

const handleGetPostByTimeApi = () => {
    return instance.get('/getPostByTime');
}




export {
    getDataUser, createUserApi, LoginUserApi, handleGetPostByTimeApi
}