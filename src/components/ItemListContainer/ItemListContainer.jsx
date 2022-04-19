import React from "react";

const ItemListContainer = (props) => {
  return (
    <div className="container">
      {props.greeting ? props.greeting : "Hola!!"}
    </div>
  );
};

export default ItemListContainer;
