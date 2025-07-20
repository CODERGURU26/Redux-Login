import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name : 'theme',
    initialState : false,
    reducers : ({
        setTheme : (state)=>{
            state = !state
            return state
        }
    })
})

export const {setTheme} = themeSlice.actions
export default themeSlice.reducer