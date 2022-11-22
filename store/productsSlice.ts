import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllCategories, SortProductsBy } from "../lib/interfaces";

type ProductsState = {
  count: {
    planned: number;
    live: number;
    inProgress: number;
    suggestion: number;
  };
  activeCategory: AllCategories;
  sortByOption: SortProductsBy;
};

const initialState: ProductsState = {
  count: {
    planned: 0,
    live: 0,
    inProgress: 0,
    suggestion: 0,
  },
  activeCategory: "all",
  sortByOption: SortProductsBy.MOST_UPVOTES,
};

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPlanned: (state, action: PayloadAction<number>) => ({
      ...state,
      count: {
        ...state.count,
        planned: action.payload,
      },
    }),
    setLive: (state, action: PayloadAction<number>) => ({
      ...state,
      count: {
        ...state.count,
        live: action.payload,
      },
    }),
    setInProgress: (state, action: PayloadAction<number>) => ({
      ...state,
      count: {
        ...state.count,
        inProgress: action.payload,
      },
    }),
    setSuggestion: (state, action: PayloadAction<number>) => ({
      ...state,
      count: {
        ...state.count,
        suggestion: action.payload,
      },
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
