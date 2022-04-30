import React from "react";
import classes from "./CartItem.module.css";

export default function CartItem({ name, qty, unitPrice }) {
  return (
    <li className={classes["cart-item"]}>
      <div className={classes["cart-item__info"]}>
        <p className={classes["cart-item__name"]}>{name}</p>
        <div className={classes["cart-item__summary"]}>
          <span className={classes["cart-item__price"]}>$ 12.99</span>
          <span>x3</span>
        </div>
      </div>
      <div className={classes["cart-item__qty-control"]}>
        <button>-</button>
        <button>+</button>
      </div>
    </li>
  );
}
