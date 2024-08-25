import actionTypes from "./actionTypes";

import {
    getDataUser, createUserApi, LoginUserApi, handleGetPostByTimeApi,
    handleGeUserInfoApi, handleCreatePostsApi, handleGetPostsInfoApi,
    handleCreateCommentApi, handleCreateComment1Api, handleCreateLikeStatusApi

} from '../../service'






export const handleGetDateUser = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getDataUser();

            if (res) {
                console.log("Gia tri can tim ", res)
                dispatch({
                    type: actionTypes.GET_DATA_USER,
                    data: res,
                    // errMessage: res.errMessage,
                    // token: res.token1

                })

            } else {
                dispatch({
                    type: actionTypes.USER_LOGIN_FAIL,
                    data: res.errMessage
                })
            }



        } catch (e) {
            console.log(e)

        }
    }
}

export const handleCreateUser = (data) => {
    console.log("data send", data)
    return async (dispatch, getState) => {
        try {
            let res = await createUserApi(data);



            dispatch({
                type: actionTypes.CREATE_USER_API,

                errMessage: res.data.errMessage,
                // token: res.token1

            })





        } catch (e) {
            console.log(e)

        }
    }
}

export const handleLogin = (data) => {
    console.log("data send", data)
    return async (dispatch, getState) => {
        try {
            let res = await LoginUserApi(data);

            if (res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.USER_LOGIN_SUCCESS,
                    errMessage: res.data.errMessage,
                    data: res.data.data,
                    token: res.data.token
                    // token: res.token1

                })
            } else {
                dispatch({
                    type: actionTypes.USER_LOGIN_FAIL,
                    errMessage: res.data.errMessage,
                    data: res.data

                    // token: res.token1

                })

            }







        } catch (e) {
            console.log(e)

        }
    }
}

export const handleGetPostByTime = () => {

    return async (dispatch, getState) => {
        try {
            let res = await handleGetPostByTimeApi();

            if (res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_POSTS_BY_TIME,
                    errMessage: res.data.errMessage,
                    data: res.data.data,


                })
            }


        } catch (e) {
            console.log(e)

        }
    }
}

export const handleGetUserInfo = (data1) => {

    return async (dispatch, getState) => {
        try {
            let res = await handleGeUserInfoApi(data1);

            if (res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_USER_INFO_API,
                    errMessage: res.data.errMessage,
                    data: res.data.data,


                })
            }


        } catch (e) {
            console.log(e)

        }
    }
}

export const handleCreatePosts = (data1) => {
    console.log("request la ", data1)
    return async (dispatch, getState) => {
        try {
            let res = await handleCreatePostsApi(data1);

            if (res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.CREATE_POSTS_API,
                    errMessage: res.data.errMessage,
                    data: res.data.data,


                })
            }


        } catch (e) {
            console.log(e)

        }
    }
}

export const handleGetPostsInfo = (data1) => {
    console.log('da chay')
    return async (dispatch, getState) => {


        try {
            let res = await handleGetPostsInfoApi({ idPosts: data1.idPosts });

            if (res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_POSTS_INFO_API,
                    errMessage: res.data.errMessage,
                    data: res.data.data,


                })
            }

            await dispatch(handleGetUserInfo({ idUsers: data1.idUsers }))


        } catch (e) {
            console.log(e)

        }
    }
}

export const handleCreateComment = (data1) => {
    console.log("request la ", data1)
    return async (dispatch, getState) => {
        try {
            let res = await handleCreateCommentApi(data1);

            if (res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.CREATE_COMMENT_API,
                    errMessage: res.data.errMessage,



                })
            }

            await dispatch(handleGetPostsInfo(data1))


        } catch (e) {
            console.log(e)

        }
    }
}

export const handleCreateComment1 = (data1) => {
    console.log("request la ", data1)
    return async (dispatch, getState) => {
        try {
            let res = await handleCreateComment1Api(data1);

            if (res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.CREATE_COMMENT_API,
                    errMessage: res.data.errMessage,



                })
            }

            await dispatch(handleGetPostsInfo(data1))


        } catch (e) {
            console.log(e)

        }
    }
}

export const handleCreateLikeStatus = (data1) => {
    console.log("request la ", data1)
    return async (dispatch, getState) => {
        try {
            let res = await handleCreateLikeStatusApi(data1);

            if (res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.CREATE_COMMENT_API,
                    errMessage: res.data.errMessage,



                })
            }

            await dispatch(handleGetPostByTime())
            await dispatch(handleGetPostsInfo({ idPosts: data1.idPosts }))





        } catch (e) {
            console.log(e)

        }
    }
}