import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllCategories, ProductCategory } from "../lib/interfaces";

type ProductsState = {
  planned: number;
  live: number;
  inProgress: number;
  activeCategory: AllCategories;
};

const initialState: ProductsState = {
  planned: 0,
  live: 0,
  inProgress: 0,
  activeCategory: "all",
};

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPlanned: (state, action) => ({
      ...state,
      planned: action.payload,
    }),
    setLive: (state, action) => ({
      ...state,
      live: action.payload,
    }),
    setInProgress: (state, action) => ({
      ...state,
      inProgress: action.payload,
    }),
    setActiveCategory: (state, action: PayloadAction<AllCategories>) => ({
      ...state,
      activeCategory: action.payload,
    }),
  },
});

export const { setPlanned, setLive, setInProgress, setActiveCategory } =
  slice.actions;

export default slice.reducer;
