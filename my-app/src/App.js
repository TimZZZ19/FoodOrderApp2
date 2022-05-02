import { useState } from "react";
import Cart from "./components/cart/Cart";
import Hero from "./components/sections/Hero";
import Menu from "./components/sections/Menu";
import Header from "./components/sections/Header";
import FoodContextProvider from "./store/FoodContextProvider";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

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
    setCartOpen(true);
    freezeManiPage();
  };

  const closeCart = () => {
    setCartOpen(false);
    unfreezeManiPage();
  };

  return (
    <FoodContextProvider>
      <Header showCart={showCart} />
      {cartOpen && <Cart closeCart={closeCart} />}
      {/* <main> */}
      <Hero />
      <Menu />
      {/* </main> */}
    </FoodContextProvider>
  );
}

export default App;
