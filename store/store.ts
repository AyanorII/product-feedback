import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api";
import navReducer from "./navSlice";
import productsReducer from "./productsSlice";

const store = configureStore({
  reducer: {
    nav: navReducer,
    products: productsReducer,
    [api.reducerPath]: api.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
