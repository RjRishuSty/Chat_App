import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authUser: null,
    isAuth: false,

}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        checkAuth: (state, action) => {
            state.authUser = action.payload;
            state.isAuth = true;
        },
        logout:(state)=>{
            state.authUser= null;
            state.isAuth= false;
        }
    }
})

export const { checkAuth,logout } = authSlice.actions;
export default authSlice.reducer;