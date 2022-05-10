import React from "react";
import CommonBtn from "./CommonBtn";
import classes from "./OrderControl.module.css";

export default function OrderControl({ subtotal, leftBtn, rightBtn }) {
  return (
    <div className={classes["cart-control"]}>
      <div className={classes.subtotal}>
        <span className={classes.text}>Total</span>
        <span className={classes.price}>{subtotal}</span>
      </div>
      <div className={classes["cart-btns"]}>
        <CommonBtn
          color={"black"}
          bngColor={"#ccc"}
          fontSize={"2.6rem"}
          onClick={leftBtn.func}
          padding={"0.6rem 2rem"}
          borderRadius={"3.2rem"}
          hoverBngColor={"#b8b8b8"}
        >
          {leftBtn.text}
        </CommonBtn>
        <CommonBtn
          color={"white"}
          fontSize={"2.6rem"}
          onClick={rightBtn.func}
          padding={"0.6rem 2rem"}
          borderRadius={"3.2rem"}
        >
          {rightBtn.text}
        </CommonBtn>
      </div>
    </div>
  );
}
