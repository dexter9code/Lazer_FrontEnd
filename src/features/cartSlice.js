import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addingToCart: (state, action) => {
      const previousCart = [...state.cartItem];
      return {
        ...state,
        cartItem: [...previousCart, action.payload],
      };
    },
  },
});

export default cartSlice.reducer;
export const { addingToCart } = cartSlice.actions;
