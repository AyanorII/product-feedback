import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import productsReducer from "./productsSlice";

const store = configureStore({
  reducer: {
    nav: navReducer,
    products: productsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
