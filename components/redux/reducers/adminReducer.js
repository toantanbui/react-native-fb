import actionTypes from '../actions/actionTypes';

const map = new Map()

const initialState = {
    isLoggedIn: false,
    userInfo: null,
    UsersRedux: [],
    errMessage: '',
    errMessageCreatePosts: '',



    errMessageCreateUser: '',
    dataGetPostsByTime: null,
    dataPostsInfo: null,
    dataPostsPersonalPage: null







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

            console.log('action', action)

            return {
                ...state,
            }
        case actionTypes.GET_USER_INFO_API:

            state.userInfo = action.data

            console.log('action', action.data)

            return {
                ...state,
            }
        case actionTypes.CREATE_POSTS_API:

            state.errMessageCreatePosts = action.errMessage

            console.log('action', action)

            return {
                ...state,
            }
        case actionTypes.GET_POSTS_INFO_API:

            state.dataPostsInfo = action.data

            console.log('action', action)

            return {
                ...state,
            }
        case actionTypes.GET_POSTS_PERSONALPAGE:

            state.dataPostsPersonalPage = action.data

            console.log('action', action)

            return {
                ...state,
            }




        default:
            return state;
    }
}

export default adminReducer;