import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    messages:[],
    users:[],
    selectedUser:null,

}

const messageSlice = createSlice({
    name:"message",
    initialState,
    reducers:{
        getUsers:(state,actions)=>{
            state.users = actions.payload;
        }
    }
})

export const {getUsers} = messageSlice.actions;
export default messageSlice.reducer;