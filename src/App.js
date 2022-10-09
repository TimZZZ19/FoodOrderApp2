import { useState } from "react";
import Hero from "./components/sections/Hero";
import Menu from "./components/sections/Menu";
import Header from "./components/sections/Header";
import Overlay from "./components/reusables/Overlay";
import FoodContextProvider from "./store/FoodContextProvider";

function App() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Control the main page
  const htmlTag = document.getElementsByTagName("html");
  const freezeManiPage = () => {
    htmlTag[0].style.height = "100%";
    htmlTag[0].style.overflowY = "hidden";
  };
  const unfreezeManiPage = () => {
    htmlTag[0].style.height = null;
    htmlTag[0].style.overflowY = null;
  };

  const showCart = () => {
    freezeManiPage();
    setCartOpen(true);
    setOverlayOpen(true);
  };

  // CART BUTTONS
  const closeCart = () => {
    unfreezeManiPage();
    setCartOpen(false);
    setOverlayOpen(false);
  };
  const checkOut = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  // CHECKOUT BUTTONs
  const goBackToCart = () => {
    setCartOpen(true);
    setCheckoutOpen(false);
  };
  const confirmOrder = () => {};

  return (
    <FoodContextProvider>
      <Header showCart={showCart} />
      {overlayOpen && (
        <Overlay
          cartControl={{ cartOpen, closeCart, checkOut }}
          checkOutControl={{
            checkoutOpen,
            setCheckoutOpen,
            goBackToCart,
            confirmOrder,
          }}
        />
      )}
      <Hero />
      <Menu />
    </FoodContextProvider>
  );
}

export default App;
