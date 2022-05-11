import { useContext } from "react";
import React, { useRef } from "react";
import CommonBtn from "../reusables/CommonBtn";
import FoodContext from "../../store/FoodContext";
import classes from "./MenuItemOrderUI.module.css";

export default function MenuItemOrderUI({ name, price }) {
  const inputRef = useRef();
  const foodContext = useContext(FoodContext);
  const cartItems = foodContext.cartItems;

  const handleNewCartItem = (e) => {
    e.preventDefault();

    // Create a new cart item
    // Generate a 4 unique id for the new cart item
    let uniqueId;
    do {
      uniqueId = Math.floor(1000 + Math.random() * 9000);
    } while (cartItems.find((item) => item.id === uniqueId));

    // Create the item object
    const newItem = {
      name,
      cartId: uniqueId,
      unitPrice: price,
      qty: +inputRef.current.value,
    };

    // Call addToCart
    foodContext.addToCart(newItem);
    inputRef.current.value = 1;
  };

  const handleRemove = (e) => {
    e.preventDefault();
    inputRef.current.value--;
  };

  const handleAdd = (e) => {
    e.preventDefault();
    inputRef.current.value++;
  };

  return (
    <form className={classes["order-form"]} onSubmit={handleNewCartItem}>
      <span className={classes["qty-control"]}>
        <button onClick={(e) => handleRemove(e)}>-</button>
        <input ref={inputRef} type="number" min={1} defaultValue={1} />
        <button onClick={(e) => handleAdd(e)}>+</button>
      </span>
      <CommonBtn> Add </CommonBtn>
    </form>
  );
}
