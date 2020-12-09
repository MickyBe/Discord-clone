import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReduser from '../features/appSlice'
export default configureStore({
  reducer: {
    user: userReducer,
    app: appReduser,
  },
});
