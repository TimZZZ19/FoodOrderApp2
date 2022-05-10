import Cart from "../cart/Cart";
import Backdrop from "./Backdrop";
import React, { useContext } from "react";
import Checkout from "../checkout/Checkout";
import OverlayContainer from "./OverlayContainer";
import FoodContext from "../../store/FoodContext";

export default function Overlay({ cartControl, checkOutControl }) {
  const { cartOpen, closeCart, checkOut } = cartControl;
  const { checkoutOpen, goBackToCart, confirmOrder } = checkOutControl;

  const foodContext = useContext(FoodContext);
  const cartItems = foodContext.cartItems;
  const subtotal = cartItems.reduce((a, b) => a + b.qty * b.unitPrice, 0);
  const styledSubtotal = `$ ${subtotal.toFixed(2)}`;

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
        goBackToCart={goBackToCart}
        confirmOrder={confirmOrder}
        styledSubtotal={styledSubtotal}
      />
    );
  }

  return (
    <>
      <Backdrop onClick={closeCart} />
      <OverlayContainer>{overlayContent}</OverlayContainer>
    </>
  );
}
