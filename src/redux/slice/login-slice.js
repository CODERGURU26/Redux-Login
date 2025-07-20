import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name : 'guru',
    initialState : null,
    reducers : {
        setUsers : (state , actions)=>{
            state = actions.payload
            return state
        },
        removeUser : (state)=>{
            state = null
            return state
        }
    }
})

export const{setUsers , removeUser} = loginSlice.actions
export default loginSlice.reducer