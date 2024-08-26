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

const handleGeUserInfoApi = (data) => {
    return instance.post('/getUserInfo', data);
}

const handleCreatePostsApi = (data) => {
    return instance.post('/createPost', data);
}

const handleGetPostsInfoApi = (data) => {
    return instance.post('/getPostsInfo', data);
}
const handleCreateCommentApi = (data) => {
    return instance.post('/createComment', data);
}

const handleCreateComment1Api = (data) => {
    return instance.post('/createComment1', data);
}

const handleCreateLikeStatusApi = (data) => {
    return instance.post('/createlikePosts', data);
}

const handleGetPostByPersonalPageApi = (data) => {
    return instance.post('/getPostByPersonalPage', data);
}

const handleDeletePostsApi = (data) => {
    return instance.post('/deletePost', data);
}



export {
    getDataUser, createUserApi, LoginUserApi, handleGetPostByTimeApi, handleGeUserInfoApi, handleCreatePostsApi,
    handleGetPostsInfoApi, handleCreateCommentApi, handleCreateComment1Api,
    handleCreateLikeStatusApi, handleGetPostByPersonalPageApi, handleDeletePostsApi
}