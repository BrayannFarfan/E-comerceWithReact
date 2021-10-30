import React from "react";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { FormularioContainer } from "./components/FormularioContainer/FormularioContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar'
import { CartViewContainer } from "./components/CartView/CartViewContainer";
import { CartProvider } from './context/CartContext';
import { Banner } from "./components/Navbar/Banner";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Banner />
            </Route>
            <Route exact path="/products">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/Login">
              <FormularioContainer />
            </Route>
            <Route exact path="/cart">
              <CartViewContainer />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
