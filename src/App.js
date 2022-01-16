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
import { Team} from "./components/page/Team"
import { Contact} from "./components/page/Contact"


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
            <Route exact path="/team" component={Team} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/category/:categoryId" component={ItemListContainer} />
            <Route exact path="/item/:itemId" component={ItemDetailContainer} />
            <Route exact path="/cart" component={CartViewContainer}/>
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
