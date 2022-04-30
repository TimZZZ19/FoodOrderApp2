import React from "react";
import classes from "./Header.module.css";
import CommonBtn from "../reusables/CommonBtn";

export default function Header() {
  return (
    <section className={classes.header}>
      <h1 className={classes["app-name"]}>FoodOrderApp2</h1>
      <CommonBtn
        fontSize={"3.0rem"}
        bngColor={"#61300d"}
        borderRadius={"3.2rem"}
        padding={"0.8rem 2.6rem"}
        hoverBngColor={"#b09886"}
      >
        <div className={classes["cart-btn__container"]}>
          <span className={classes["cart-btn__icon"]}>
            <ion-icon name="cart"></ion-icon>
          </span>
          <span className={classes["cart-btn__qty"]}>10</span>
        </div>
      </CommonBtn>
    </section>
  );
}
