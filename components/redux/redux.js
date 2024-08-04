
import thunkMiddleware from "redux-thunk";

import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/rootReducer';


const reduxStore = createStore(
    rootReducer,
    //Cho phep return vê 1 function hay arrow fuction
    applyMiddleware(thunkMiddleware),

)

export default reduxStore;