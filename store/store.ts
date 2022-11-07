import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";

const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
