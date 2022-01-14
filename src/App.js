import React from "react";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar'
import { CartViewContainer } from "./components/CartView/CartViewContainer";
import { CartProvider } from './context/CartContext';
import { useContext} from "react";
import { UserAuthContext } from "./context/UserAuthContext";
import { UserAuthenticate } from "./components/UserAuthenticate/UserAuthenticate";
import { Signup } from "./components/UserAuthenticate/Signup"
import { Home } from "./components/page/Home";
import { UIProvider } from "./context/UIContext";
import { About } from "./components/page/About";


function App() {

const {isAuthenticated} = useContext(UserAuthContext);

  return (
    <>
    <UIProvider>
      <CartProvider>
        <BrowserRouter>
          <Switch>
          <Route exact path="/signup" component={Signup}/>
    {
      isAuthenticated 
      ?
      <>
      <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About}/> 
            <Route exact path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            {/* <Route exact path="/checkout">
              <Checkout/>
            </Route> */}
            <Route exact path="/cart">
              <CartViewContainer />
            </Route>
            </>
      :
             <Route exact to="/login" component={UserAuthenticate} />
          
           
    }
          </Switch>
        </BrowserRouter>
      </CartProvider>
      </UIProvider>
    </>
  );
}

export default App;
