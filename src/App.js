import React from "react";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {

  const greeting = "Hola soy ItemLisContainer desde app.js ";
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={greeting} />
    </>
  );
}

export default App;
