import React from "react";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartControl from "./CartControl";
import CartContainer from "./CartContainer";
import Backdrop from "../reusables/Backdrop";

export default function Cart() {
  const cartItems = [
    {
      cartId: "c1",
      name: "Sushi",
      qty: 1,
      unitPrice: 22.99,
    },
    {
      cartId: "c2",
      name: "Chow Mein",
      qty: 2,
      unitPrice: 16.5,
    },
    {
      cartId: "c3",
      name: "Barbecue Burger",
      qty: 3,
      unitPrice: 12.99,
    },
    {
      cartId: "c4",
      name: "Green Bowl",
      qty: 1,
      unitPrice: 18.99,
    },
    {
      cartId: "c5",
      name: "Large Pizza",
      qty: 3,
      unitPrice: 20.99,
    },
  ];

  return (
    <>
      <Backdrop />
      <CartContainer>
        <button className={classes["close-btn"]}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <ul className={classes["cart-items-ul"]}>
          {cartItems.map((item) => (
            <CartItem key={item.cartId} {...item} />
          ))}
        </ul>
        <CartControl></CartControl>
      </CartContainer>
    </>
  );
}
