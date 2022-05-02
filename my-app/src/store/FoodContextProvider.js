import menuItems from "./menuItems";
import React, { useReducer } from "react";
import FoodContext from "./FoodContext";

const cartItemsReducer = (cartItems, action) => {
  const cartItemsCopy = [...cartItems];
  const targetItemIndex = cartItemsCopy.findIndex(
    (item) => item.cartId === action.cartId
  );

  switch (action.operation) {
    case "ADD_NEW_ITEM":
      return cartItems.concat(action.newItem);

    case "INCREASE_QTY":
      cartItemsCopy[targetItemIndex].qty++;
      return cartItemsCopy;

    case "DECREASE_QTY":
      cartItemsCopy[targetItemIndex].qty--;
      return cartItemsCopy;

    case "REMOVE_ITEM":
      return cartItemsCopy.filter((item) => item.cartId !== action.cartId);

    default:
      return [];
  }
};

export default function FoodContextProvider({ children }) {
  const [cartItems, dispatchCartAction] = useReducer(cartItemsReducer, []);

  const foodContext = {
    menuItems,
    cartItems,
    addToCart: (item) => {
      dispatchCartAction({
        operation: "ADD_NEW_ITEM",
        newItem: item,
      });
    },
    increaseCartItemQty: (cartId) => {
      dispatchCartAction({
        operation: "INCREASE_QTY",
        cartId,
      });
    },
    decreaseCartItemQty: (cartId) => {
      dispatchCartAction({
        operation: "DECREASE_QTY",
        cartId,
      });
    },
    removeItemFromCart: (cartId) => {
      dispatchCartAction({
        operation: "REMOVE_ITEM",
        cartId,
      });
    },
  };

  return (
    <FoodContext.Provider value={foodContext}>{children}</FoodContext.Provider>
  );
}
