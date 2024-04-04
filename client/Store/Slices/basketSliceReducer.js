import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {},
  reducers: {
    addToBasket: (state, action) => {
        const { payload } = action;
        const { _id } = payload;
    
        if (_id in state) {
            return {
                ...state,
                [_id]: {
                    ...state[_id],
                    quantity: state[_id].quantity + 1
                }
            };
        }
    
        return {
            ...state,
            [_id]: {
                ...payload,
                quantity: 1
            }
        };
    
    },
    // removeFromBasket: (state, action) => {
    //   return action.payload;
    // },
    // addOne: (state, action) => {
    //   return action.payload;
    // },
    // removeOne: (state, action) => {
    //   return action.payload;
    // },
  },
});

export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer;
