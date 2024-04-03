import { createSlice } from "@reduxjs/toolkit";

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: [],
  reducers: {
    getAllPizzas: (state, action) => {
      return action.payload;
    },
  },
});

export const { getAllPizzas } = pizzaSlice.actions;
export default pizzaSlice.reducer;
