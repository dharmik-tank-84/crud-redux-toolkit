import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slice/slice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
