import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavState {
  open: boolean;
  headerHeight: number;
}

const initialState: NavState = {
  open: false,
  headerHeight: 0,
};

export const slice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOpen: (state: NavState, action: PayloadAction<boolean>) => ({
      ...state,
      open: action.payload,
    }),

    setHeaderHeight: (state: NavState, action) => ({
      ...state,
      headerHeight: action.payload,
    }),
  },
});

export const { setOpen, setHeaderHeight } = slice.actions;

export default slice.reducer;
