import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const onAdd = (count) => {
  console.log("Agregado al carrito: " + count + " items");
};

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <span>{greeting || "Hola!!"}</span>
      <ItemCount stock={10} initail={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
