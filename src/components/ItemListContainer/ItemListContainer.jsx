import React from "react";
import ItemList from "../ItemList/ItemList";

// const onAdd = (count) => {
//   console.log("Agregado al carrito: " + count + " items");
// };

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <h1>{greeting || "Hola!!"}</h1>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
