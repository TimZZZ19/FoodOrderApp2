import React from "react";
import CommonBtn from "../reusables/CommonBtn";
import classes from "./MenuItemOrderUI.module.css";

export default function MenuItemOrderUI() {
  return (
    <form className={classes["order-form"]}>
      <span className={classes["qty-control"]}>
        <button>-</button>
        <input type="text" placeholder="qty" />
        <button>+</button>
      </span>
      <CommonBtn> Add </CommonBtn>
    </form>
  );
}
