import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { todoSlice } from "./todo/todoSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [todoSlice.name]: todoSlice.reducer
  },
});

store.subscribe(() => {
  console.log("STORE CHANGED", store.getState());
});
