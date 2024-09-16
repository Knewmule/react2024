import React,{useState} from "react";
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import {UserProgressContextProvider} from "./store/UserProgressContext";
import { CartContextProvider } from "./store/CartContext";
import Orders from "./Components/Orders";
function App() {


  return (
    <UserProgressContextProvider>
      <CartContextProvider>
      <Header />
      <Meals />
      <Cart />
      <Checkout />
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
