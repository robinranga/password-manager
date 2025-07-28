import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { site: "", username: "", password: "" },
};

export const counterSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setform: (state, action) => {
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
export const { setform, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
