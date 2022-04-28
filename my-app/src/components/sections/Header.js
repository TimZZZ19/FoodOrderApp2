import React from "react";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <section className={classes.header}>
      <h1 className={classes["app-name"]}>FoodOrderApp2</h1>
      <button className={classes["cart-btn"]}>
        <span className={classes["cart-btn__icon"]}>
          <ion-icon name="cart"></ion-icon>
        </span>
        <span className={classes["cart-btn__qty"]}>0</span>
      </button>
    </section>
  );
}
