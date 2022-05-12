import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { title, price, pictureUrl, description, author, stock } = item;

  const onAdd = (quantityToAdd) => {
    console.log(quantityToAdd);
  };
  return (
    <div className="card mt-3">
      <div className="row">
        <div className="col-md d-flex align-items-center justify-content-center">
          <img src={pictureUrl} className="card-img-top w-75 h-75" alt="..." />
        </div>
        <div className="col-md d-flex align-items-center">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <h5 className="card-text">{price}</h5>
            <p>
              {" "}
              Escrito por: <u>{author}</u>
            </p>
            <p className="card-text">
              {" "}
              <em>{description}</em>
            </p>
            <p className="text-danger">Quedan disponibles: {stock} pcs</p>
            <ItemCount stock={stock} initail={0} onAdd={onAdd} />
            <Link to={"/cart"}>
              <button className="btn btn-secondary w-100">
                Terminar Compra
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
