import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const item = {
    title: "Batman Hush",
    price: "$400",
    pictureUrl:
      "https://images-na.ssl-images-amazon.com/images/I/A1Gb8vuZiCL.jpg",
    description:
      "Batman sets out to discover the identity of a mysterious mastermind using the Joker, Riddler, Ra's al Ghul and the Dark Knight's other enemies--and allies--as pawns in a plan to wreak havoc.",
    author: "Jeph Loeb",
  };
  return (
    <div className="container d-flex justify-content-center ">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
