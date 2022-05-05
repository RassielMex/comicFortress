import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const data = {
      title: "Batman Hush",
      price: "$400",
      pictureUrl:
        "https://images-na.ssl-images-amazon.com/images/I/A1Gb8vuZiCL.jpg",
      description:
        "Batman sets out to discover the identity of a mysterious mastermind using the Joker, Riddler, Ra's al Ghul and the Dark Knight's other enemies--and allies--as pawns in a plan to wreak havoc.",
      author: "Jeph Loeb",
    };

    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    getItem
      .then((res) => {
        setItem(res);
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {};
  }, []);

  return (
    <div className="container d-flex justify-content-center ">
      {Object.keys(item).length > 0 ? (
        <ItemDetail item={item} />
      ) : (
        <div className="d-flex  justify-content-center">
          <div className="spinner-border text-warning m-1" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
