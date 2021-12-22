import React from "react";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
// import { FormularioContainer } from "./components/FormularioContainer/FormularioContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar'
import { CartViewContainer } from "./components/CartView/CartViewContainer";
import { CartProvider } from './context/CartContext';
import { Checkout } from "./components/Checkout/Checkout";
import { useContext} from "react";
import { UserAuthContext } from "./context/UserAuthContext";
import { UserAuthenticate } from "./components/UserAuthenticate/UserAuthenticate";
import { Banner } from "./components/Banner/Banner"

function App() {

const {isAuthenticated} = useContext(UserAuthContext);

  return (
    <>

      <CartProvider>
        <BrowserRouter>
        
          <Switch>
    {
      isAuthenticated 
      ?
      <>
      <Navbar />
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
            {/* <Route exact path="/Login">
             <UserAuthenticate/>
            </Route> */}
            <Route exact path="/cart/checkout">
              <CartViewContainer />
            </Route>
            </>
      :
            <Route exact to="/login">
              <UserAuthenticate/>
            </Route>
           
    }
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
