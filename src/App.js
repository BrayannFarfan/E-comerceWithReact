import React from "react";
import { Item } from "./components/ItemListContainer/Item";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {


  return (
    <>
      <Navbar />
      <ItemListContainer >
        <Item></Item>
      </ItemListContainer>
    </>
  );
}

export default App;
