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
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItem: [state.cartItem.filter((m) => m._id !== action.payload._id)],
      };
    },
  },
});

export default cartSlice.reducer;
export const { addingToCart, removeFromCart } = cartSlice.actions;
