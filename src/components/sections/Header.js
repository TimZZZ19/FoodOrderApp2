import React, { useContext, useEffect, useState } from "react";
import classes from "./Header.module.css";
import CommonBtn from "../reusables/CommonBtn";
import FoodContext from "../../store/FoodContext";

export default function Header({ showCart }) {
  const [isBumping, setIsBumping] = useState(false);
  const foodContext = useContext(FoodContext);
  const cartItems = foodContext.cartItems;

  const numberOfItems =
    cartItems.length === 0 ? 0 : cartItems.reduce((a, b) => a + b.qty, 0);

  useEffect(() => {
    if (!cartItems.length) return;
    setIsBumping(true);

    const timer = setTimeout(() => {
      setIsBumping(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  return (
    <section className={classes.header}>
      <h1 className={classes["app-name"]}>FoodOrderApp2</h1>
      <CommonBtn
        onClick={showCart}
        fontSize={"3.0rem"}
        bngColor={"#97582b"}
        isBumping={isBumping}
        borderRadius={"3.2rem"}
        padding={"0.8rem 2.6rem"}
        hoverBngColor={"#6f370f"}
      >
        <div className={classes["cart-btn__container"]}>
          <span className={classes["cart-btn__icon"]}>
            <ion-icon name="cart"></ion-icon>
          </span>
          <span className={classes["cart-btn__qty"]}>{numberOfItems}</span>
        </div>
      </CommonBtn>
    </section>
  );
}
