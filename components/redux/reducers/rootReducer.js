import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';

import userReducer from "./userReducer";
import adminReducer from "./adminReducer";

const rootReduce = combineReducers({

    user: userReducer,
    admin: adminReducer
})

export default rootReduce