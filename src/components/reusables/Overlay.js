import Cart from "../cart/Cart";
import Backdrop from "./Backdrop";
import React, { useContext, useState } from "react";
import Checkout from "../checkout/Checkout";
import OverlayContainer from "./OverlayContainer";
import FoodContext from "../../store/FoodContext";
import classes from "./Overlay.module.css";

export default function Overlay({ cartControl, checkOutControl }) {
  const { cartOpen, closeCart, checkOut } = cartControl;
  const { checkoutOpen, setCheckoutOpen, goBackToCart, confirmOrder } =
    checkOutControl;
  const [clearCheckoutform, setClearCheckoutForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [displayingSubmitted, setDisplayingSubmitted] = useState(false);

  const foodContext = useContext(FoodContext);
  const cartItems = foodContext.cartItems;
  const subtotal = cartItems.reduce((a, b) => a + b.qty * b.unitPrice, 0);
  const styledSubtotal = `$ ${subtotal.toFixed(2)}`;

  const submitOrder = (userData) => {
    setIsSubmitting(true);

    fetch("https://foodapp-15506-default-rtdb.firebaseio.com/meals.json", {
      method: "POST",
      body: JSON.stringify({ userData, orderedItems: cartItems }),
    }).then(() => {
      setIsSubmitting(false);
      foodContext.resetCart();
      setClearCheckoutForm(true);
      setCheckoutOpen(false);
      setDisplayingSubmitted(true);

      setTimeout(() => {
        setDisplayingSubmitted(false);
        closeCart();
      }, 2000);
    });
  };

  let overlayContent;
  if (cartOpen) {
    overlayContent = (
      <Cart
        checkOut={checkOut}
        closeCart={closeCart}
        cartItems={cartItems}
        styledSubtotal={styledSubtotal}
      />
    );
  }
  if (checkoutOpen) {
    overlayContent = (
      <Checkout
        submitOrder={submitOrder}
        goBackToCart={goBackToCart}
        confirmOrder={confirmOrder}
        styledSubtotal={styledSubtotal}
        clearCheckoutform={clearCheckoutform}
        setClearCheckoutForm={setClearCheckoutForm}
      />
    );
  }
  if (isSubmitting) {
    overlayContent = (
      <p className={classes["submission-text"]}>Submitting order...</p>
    );
  }
  if (displayingSubmitted) {
    overlayContent = (
      <p className={classes["submission-text"]}>Order submitted</p>
    );
  }

  return (
    <>
      <Backdrop onClick={closeCart} />
      <OverlayContainer>{overlayContent}</OverlayContainer>
    </>
  );
}
