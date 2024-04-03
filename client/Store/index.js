import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import pizzaSliceReducer from "./Slices/pizzaSliceReducer";
import drinksSliceReducer from "./Slices/drinksSliceReducer";

const store = configureStore({
  reducer: {
    pizza: pizzaSliceReducer,
    drinks: drinksSliceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
