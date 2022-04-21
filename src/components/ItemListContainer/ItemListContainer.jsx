import React from "react";

const ItemListContainer = ({ greeting }) => {
  return <div className="container">{greeting ? greeting : "Hola!!"}</div>;
};

export default ItemListContainer;
