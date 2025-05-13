import { configureStore } from '@reduxjs/toolkit';
import appModeSlice from '../store/slices/AppMode.slice';
const store = configureStore({
    reducer: {
        appMode: appModeSlice,
    },
})


export default store;