import { createSlice } from "@reduxjs/toolkit";

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
    toggleMenu: (state: NavState) => ({
      ...state,
      open: !state.open,
    }),

    setHeaderHeight: (state: NavState, action) => ({
      ...state,
      headerHeight: action.payload,
    }),
  },
});

export const { toggleMenu, setHeaderHeight } = slice.actions;

export default slice.reducer;
