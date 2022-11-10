import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllCategories, SortProductsBy } from "../lib/interfaces";

type ProductsState = {
  plannedCount: number;
  liveCount: number;
  inProgressCount: number;
  suggestionCount: number;
  activeCategory: AllCategories;
  sortByOption: SortProductsBy;
};

const initialState: ProductsState = {
  plannedCount: 0,
  liveCount: 0,
  suggestionCount: 0,
  inProgressCount: 0,
  activeCategory: "all",
  sortByOption: SortProductsBy.MOST_UPVOTES,
};

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPlanned: (state, action: PayloadAction<number>) => ({
      ...state,
      plannedCount: action.payload,
    }),
    setLive: (state, action: PayloadAction<number>) => ({
      ...state,
      liveCount: action.payload,
    }),
    setInProgress: (state, action: PayloadAction<number>) => ({
      ...state,
      inProgressCount: action.payload,
    }),
    setSuggestion: (state, action: PayloadAction<number>) => ({
      ...state,
      suggestionCount: action.payload,
    }),
    setActiveCategory: (state, action: PayloadAction<AllCategories>) => ({
      ...state,
      activeCategory: action.payload,
    }),
    setSortByOption: (state, action: PayloadAction<SortProductsBy>) => ({
      ...state,
      sortByOption: action.payload,
    }),
  },
});

export const {
  setPlanned,
  setLive,
  setInProgress,
  setSuggestion,
  setActiveCategory,
  setSortByOption,
} = slice.actions;

export default slice.reducer;
