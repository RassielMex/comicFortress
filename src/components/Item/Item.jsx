import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ id, title, price, pictureUrl }) => {
  const onAdd = () => {};

  return (
    <div className="card align-items-center m-1" style={{ width: "18rem" }}>
      <img src={pictureUrl} className="card-img-top w-75 mt-1" alt={id} />
      <div className="card-body w-100">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{price}</p>
        <ItemCount stock={10} initail={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Item;
