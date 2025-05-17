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
        signup: (state) => {
            state.isAuth = false;
            state.authUser = null;
        },
        login: (state, action) => {
            state.authUser = action.payload;
            state.isAuth = true;
        },
        logout: (state) => {
            state.authUser = null;
            state.isAuth = false;
        }
    }
})

export const { checkAuth, signup, login, logout } = authSlice.actions;
export default authSlice.reducer;