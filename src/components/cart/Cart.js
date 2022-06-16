import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import OrderControl from "../reusables/OrderControl";

export default function Cart({
  styledSubtotal,
  cartItems,
  closeCart,
  checkOut,
}) {
  const [checkOutBtnDisabled, setCheckOutBtnDisabled] = useState(true);
  const cartItemsUl = cartItems.map((item) => (
    <CartItem key={item.cartId} {...item} />
  ));

  const cartContent =
    cartItems.length === 0 ? (
      <h3 className={classes["empty-msg"]}>
        Your cart is empty ,<br></br> so is your stomach
      </h3>
    ) : (
      <ul className={classes["cart-items-ul"]}>{cartItemsUl}</ul>
    );

  useEffect(() => {
    if (cartItems.length !== 0) {
      setCheckOutBtnDisabled(false);
    } else {
      setCheckOutBtnDisabled(true);
    }
  }, [cartItems, checkOutBtnDisabled]);

  return (
    <>
      <h2 className={classes.title}>Cart</h2>
      {cartContent}
      <OrderControl
        subtotal={styledSubtotal}
        leftBtn={{ text: "Close", func: closeCart }}
        rightBtn={{
          text: "Check Out",
          func: checkOut,
          btnDisabled: checkOutBtnDisabled,
        }}
      ></OrderControl>
    </>
  );
}

// const cartItems = [
//   {
//     cartId: "c1",
//     name: "Sushi",
//     qty: 1,
//     unitPrice: 22.99,
//   },
//   {
//     cartId: "c2",
//     name: "Chow Mein",
//     qty: 2,
//     unitPrice: 16.5,
//   },
//   {
//     cartId: "c3",
//     name: "Barbecue Burger",
//     qty: 3,
//     unitPrice: 12.99,
//   },
//   {
//     cartId: "c4",
//     name: "Green Bowl",
//     qty: 1,
//     unitPrice: 18.99,
//   },
//   {
//     cartId: "c5",
//     name: "Large Pizza",
//     qty: 0,
//     unitPrice: 20.99,
//   },
// ];
