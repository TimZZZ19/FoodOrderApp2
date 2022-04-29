import React from "react";
import classes from "./MenuItemOrderUI.module.css";

export default function MenuItemOrderUI() {
  return (
    <form className={classes["order-form"]}>
      <span className={classes["qty-control"]}>
        <button>-</button>
        <input type="number" placeholder="qty"></input>
        <button>+</button>
      </span>
      <button className={classes["add-to-cart"]}>Add</button>
    </form>
  );
}
