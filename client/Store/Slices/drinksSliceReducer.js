import { createSlice } from "@reduxjs/toolkit";

const drinksSlice = createSlice({
  name: "drinks",
  initialState: [],
  reducers: {
    getAllDrinks: (state, action) => {
      return action.payload;
    },
  },
});

export const { getAllDrinks } = drinksSlice.actions;
export default drinksSlice.reducer;