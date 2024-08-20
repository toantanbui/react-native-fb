import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    userInfo: null,
    UsersRedux: [],
    errMessage: '',
    userInfo1: null,
    errMessagePosts: '',
    dataUser: null,

    errMessageCreateUser: '',
    dataGetPostsByTime: null







}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {


        case actionTypes.CREATE_USER_API:

            state.errMessageCreateUser = action.errMessage

            console.log('action', action.data)

            return {
                ...state,
            }
        case actionTypes.GET_POSTS_BY_TIME:

            state.dataGetPostsByTime = action.data

            console.log('action', action.data)

            return {
                ...state,
            }



        default:
            return state;
    }
}

export default adminReducer;