import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./data-slice";
import authSlice from "./auth-slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    data: dataSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
