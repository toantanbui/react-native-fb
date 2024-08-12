import actionTypes from "./actionTypes";

import {
    getDataUser, createUserApi

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
