import React from "react";

const FoodContext = React.createContext({
  menuItems: [],
  cartItems: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default FoodContext;
