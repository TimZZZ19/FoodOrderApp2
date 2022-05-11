import React, { useContext } from "react";
import classes from "./CartItem.module.css";
import FoodContext from "../../store/FoodContext";

export default function CartItem({ cartId, name, qty, unitPrice }) {
  const itemPrice = `$ ${(unitPrice * qty).toFixed(2)}`;
  const foodContext = useContext(FoodContext);

  const handleAdd = (e) => {
    e.preventDefault();
    foodContext.increaseCartItemQty(cartId);
  };

  const handleRemove = (e) => {
    e.preventDefault();
    if (qty > 1) {
      foodContext.decreaseCartItemQty(cartId);
    } else {
      foodContext.removeItemFromCart(cartId);
    }
  };

  const removeIcon =
    qty > 1 ? (
      <ion-icon name="remove-outline"></ion-icon>
    ) : (
      <ion-icon name="trash-outline"></ion-icon>
    );

  return (
    <li className={classes["cart-item"]}>
      <div className={classes["cart-item__info"]}>
        <p className={classes["cart-item__name"]}>{name}</p>
        <div className={classes["cart-item__summary"]}>
          <span className={classes["cart-item__price"]}>{itemPrice}</span>
          <span>{`x ${qty}`}</span>
        </div>
      </div>
      <div className={classes["cart-item__qty-control"]}>
        <button
          className={classes["qty-btns"]}
          onClick={(e) => {
            handleRemove(e);
          }}
        >
          {removeIcon}
        </button>
        <button
          className={classes["qty-btns"]}
          onClick={(e) => {
            handleAdd(e);
          }}
        >
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </div>
    </li>
  );
}
