import React,{useState} from "react";
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import { CartContextProvider } from "./store/CartContext";
function App() {


  return (
    <CartContextProvider>
      <Header />
      <Meals />
      <Cart />
      <Checkout />
    </CartContextProvider>
  );
}

export default App;
