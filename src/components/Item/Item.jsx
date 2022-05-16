import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <div className="card align-items-center m-1" style={{ width: "18rem" }}>
      <img src={pictureUrl} className="card-img-top w-75 mt-1" alt={id} />
      <div className="card-body w-100">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
        <Link to={`/item/${id}`}>
          <button className="btn btn-warning">Ver más...</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
