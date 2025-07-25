import { configureStore , combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import loginSlice from './slice/login-slice'
import { version } from "react";
import themeSlice from './slice/theme-slice'
const setUp = {
    key : 'codingGuru',
    version : 1,
    storage : storage
}

const slices = combineReducers({
    loginSlice,
    themeSlice
})

const store = configureStore({
    reducer: persistReducer(setUp , slices),
    devTools : true,
    middleware : (config)=>config({
        serializableCheck : false
    })
})

export default store