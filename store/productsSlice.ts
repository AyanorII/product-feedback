import { createSlice } from "@reduxjs/toolkit";

type ProductsState = {
  planned: number;
  live: number;
  inProgress: number;
};

const initialState: ProductsState = {
  planned: 0,
  live: 0,
  inProgress: 0,
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
  },
});

export const { setPlanned, setLive, setInProgress } = slice.actions;

export default slice.reducer;
