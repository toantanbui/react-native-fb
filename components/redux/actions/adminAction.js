import actionTypes from "./actionTypes";

import {
    getDataUser

} from '../../service'






export const handleGetDateUser = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getDataUser();

            if (res) {
                console.log("Gia tri can tim ", res)
                dispatch({
                    type: actionTypes.GET_DATA_USER,
                    data: res.data,
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

