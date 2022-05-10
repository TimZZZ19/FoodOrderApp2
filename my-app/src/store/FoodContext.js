import React from "react";

const FoodContext = React.createContext({
  menuItems: [],
  cartItems: [],
  addToCart: (item) => {},
  increaseCartItemQty: (cartId) => {},
  decreaseCartItemQty: (cartId) => {},
  removeItemFromCart: (id) => {},
  resetCart: () => {},
});

export default FoodContext;
