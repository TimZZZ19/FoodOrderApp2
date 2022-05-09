import FoodContext from "./FoodContext";
import React, { useReducer, useEffect, useState } from "react";

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
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState("");

  const [cartItems, dispatchCartAction] = useReducer(cartItemsReducer, []);

  useEffect(() => {
    fetch("https://foodapp-15506-default-rtdb.firebaseio.com/meals.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        return response.json();
      })
      .then((data) => {
        const menuItems = [];

        for (const key in data) {
          const { name, description, price } = data[key];
          const newMeal = { menuId: key, name, description, price };
          menuItems.push(newMeal);
        }

        setIsLoading(false);
        setMenuItems(menuItems);
      })
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  }, []);

  const foodContext = {
    menuItems,
    isLoading,
    httpError,
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
