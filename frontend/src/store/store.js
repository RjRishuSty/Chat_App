import { configureStore } from '@reduxjs/toolkit';
import appModeSlice from '../store/slices/AppMode.slice';
import authSlice from '../store/slices/auth.slice';

const store = configureStore({
    reducer: {
        auth:authSlice,
        appMode: appModeSlice,
    },
})


export default store;