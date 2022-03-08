import middleware from '../redux/middleware';
import reducer from '../redux/reducers';
import {createStore} from "@reduxjs/toolkit";

const store = createStore(reducer, middleware);



export default store;
