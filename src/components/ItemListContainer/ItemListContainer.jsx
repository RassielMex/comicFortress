import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <span>{greeting || "Hola!!"}</span>
      <ItemCount stock={10} initail={1} />
    </div>
  );
};

export default ItemListContainer;
