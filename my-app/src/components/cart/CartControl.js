import React from "react";
import classes from "./CartControl.module.css";
import CommonBtn from "../reusables/CommonBtn";

export default function CartControl() {
  return (
    <div className={classes["cart-control"]}>
      <div className={classes.subtotal}>
        <span className={classes.text}>Subtotal</span>
        <span className={classes.price}>$ 12.99</span>
      </div>
      <div className={classes["cart-btns"]}>
        <CommonBtn
          color={"black"}
          fontSize={"2.6rem"}
          padding={"0.6rem 2rem"}
          borderRadius={"3.2rem"}
          bngColor={"#ccc"}
          hoverBngColor={"#b8b8b8"}
        >
          Close
        </CommonBtn>
        <CommonBtn
          color={"white"}
          fontSize={"2.6rem"}
          padding={"0.6rem 2rem"}
          borderRadius={"3.2rem"}
        >
          Order
        </CommonBtn>
      </div>
    </div>
  );
}
