import Cart from "./components/cart/Cart";
import Hero from "./components/sections/Hero";
import Menu from "./components/sections/Menu";
import Header from "./components/sections/Header";
import FoodContextProvider from "./store/FoodContextProvider";

function App() {
  return (
    <FoodContextProvider>
      <Header />
      <Cart />
      <main>
        <Hero />
        <Menu />
      </main>
    </FoodContextProvider>
  );
}

export default App;
