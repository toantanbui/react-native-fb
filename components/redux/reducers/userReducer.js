import actionTypes from '../actions/actionTypes';
import { storeData, getData, removeValue } from '../../storage/asyncStorage'

const initialState = {
    isLoggedIn: false,
    userInfo: null,
    errMessage: '',
    reduxToken: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            // state.isLoggedIn = true;
            // state.userInfo = action.data;
            // state.reduxToken = 'abc';
            state.errMessage = action.errMessage;
            console.log('action', action)
            storeData('userInfo', {
                isLoggedIn: true,
                idUsers: action.data,
                token: action.token
            })


            return {
                ...state,

            }
        case actionTypes.USER_LOGIN_FAIL:
            // state.isLoggedIn = false;
            console.log("action", action)
            state.errMessage = action.errMessage;
            return {
                ...state,

            }

        case actionTypes.USER_LOGOUT:
            state.isLoggedIn = false;
            state.errMessage = action.data;
            state.reduxToken = null;
            state.userInfo = null;
            return {
                ...state,

            }




        default:
            return state;
    }
}

export default userReducer;