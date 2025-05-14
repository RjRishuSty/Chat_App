import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    auth: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        checkAuth: (state, actions) => {
            state.auth = actions.payload;
        }
    }
})

export const { checkAuth } = authSlice.actions;
export default authSlice.reducer;