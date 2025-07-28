import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "pswds",
  initialState,
  reducers: {
    setpswd: (state, action) => {
      state.value = action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setpswd, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
