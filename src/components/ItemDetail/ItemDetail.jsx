import React from "react";

const ItemDetail = ({ item }) => {
  const { title, price, pictureUrl, description, author } = item;
  return (
    <div class="card w-75 h-75 align-items-center m-2">
      <img src={pictureUrl} className="card-img-top m1 w-50 h-25" alt="..." />
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
      </div>
    </div>
  );
};

export default ItemDetail;
