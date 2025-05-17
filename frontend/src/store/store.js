import { configureStore } from '@reduxjs/toolkit';
import appModeSlice from '../store/slices/AppMode.slice';
import authSlice from '../store/slices/auth.slice';
import messageSlice from '../store/slices/message.slice';
import layoutSlice from '../store/slices/layout.slice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        appMode: appModeSlice,
        message: messageSlice,
        layout: layoutSlice
    },
})


export default store;