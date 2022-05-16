import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import data from "../../util/data";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = new Promise((res, rej) => {
      setTimeout(() => {
        res(data);
      }, 2000);
    });

    getData
      .then((res) => {
        if (!id) {
          setItems(res);
        } else {
          //console.log(id);
          const itemsByCategory = res.filter((item) => item.category === id);
          setItems(itemsByCategory);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    //return () => {};
  }, [id]);

  return (
    <div className="container">
      <h1>{greeting || "Hola!!"}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
