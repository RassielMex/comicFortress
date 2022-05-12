import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import data from "../../util/data";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    getItem
      .then((res) => {
        if (id) {
          //console.log(id);
          const itemSelected = res.find((item) => item.id === id);
          setItem(itemSelected);
        }
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {};
  }, []);

  return (
    <div className="container d-flex justify-content-center">
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
