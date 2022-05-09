import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartControl from "./CartControl";
import React, { useContext } from "react";
import Backdrop from "../reusables/Backdrop";
import CartContainer from "./CartContainer";
import FoodContext from "../../store/FoodContext";

export default function Cart({ closeCart }) {
  const foodContext = useContext(FoodContext);
  const cartItems = foodContext.cartItems;

  const cartItemsUl = cartItems.map((item) => (
    <CartItem key={item.cartId} {...item} />
  ));

  const subtotal = cartItems.reduce((a, b) => a + b.qty * b.unitPrice, 0);
  const styledSubtotal = `$ ${subtotal.toFixed(2)}`;

  const cartContent =
    cartItems.length === 0 ? (
      <h3 className={classes["empty-msg"]}>
        Your cart is empty ,<br></br> so is your stomach
      </h3>
    ) : (
      <ul className={classes["cart-items-ul"]}>{cartItemsUl}</ul>
    );

  return (
    <>
      <Backdrop onClick={closeCart} />
      <CartContainer>
        <h2 className={classes.title}>Cart</h2>
        {cartContent}
        <CartControl
          subtotal={styledSubtotal}
          closeCart={closeCart}
        ></CartControl>
      </CartContainer>
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
