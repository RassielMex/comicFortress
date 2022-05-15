import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { title, price, pictureUrl, description, author, stock } = item;
  const { addToCart } = useContext(CartProvider);
  const [addedToCart, setAddedToCart] = useState(false);

  const onAdd = (quantityToAdd) => {
    addToCart(item, quantityToAdd);
    setAddedToCart(true);
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

            {!addedToCart ? (
              <ItemCount stock={stock} initail={1} onAdd={onAdd} />
            ) : (
              <div>
                <Link to={"/cart"}>
                  <button className="btn btn-secondary w-100 my-1">
                    Terminar Compra
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="btn btn-secondary w-100 my-1">
                    Continuar comprando
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
