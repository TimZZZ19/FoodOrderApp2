import React from "react";
import menuItems from "./menuItems";
import FoodContext from "./FoodContext";

export default function FoodContextProvider({ children }) {
  const foodContext = { menuItems };
  return (
    <FoodContext.Provider value={foodContext}>{children}</FoodContext.Provider>
  );
}
