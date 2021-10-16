import React from "react";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Navbar } from './components/Navbar/Navbar'
import { FormularioContainer } from "./components/FormularioContainer/FormularioContainer";

function App() {


  return (
    <>

      <BrowserRouter>

        <Navbar />

        <Switch>

          <Route exact path="/">
            <ItemListContainer />
          </Route>

          <Route exact path="/category/:categoryId">
            <ItemListContainer />
          </Route>

          <Route exact path="/item/:itemId">
            <ItemDetailContainer />
          </Route>

          <Route exact path="/contacto">
            <FormularioContainer />
          </Route>

          <Route exact path="/cart">
            <h1>Cart</h1>
          </Route>

        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
