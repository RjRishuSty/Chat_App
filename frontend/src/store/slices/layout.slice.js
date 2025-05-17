import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggle: false
}

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        toggleLayout: (state) => {
            state.toggle = !state.toggle;
        }
    }

})

export const { toggleLayout } = layoutSlice.actions;
export default layoutSlice.reducer;