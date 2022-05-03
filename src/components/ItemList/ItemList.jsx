import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let data = [
      {
        title: "Batman Hush",
        price: "$400",
        pictureUrl:
          "https://images-na.ssl-images-amazon.com/images/I/A1Gb8vuZiCL.jpg",
      },
      {
        title: "all star batman",
        price: "$320",
        pictureUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71RgvfEIzlL.jpg",
      },
      {
        title: "Batman Year One",
        price: "$580",
        pictureUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71NaQHQCo0L.jpg",
      },
      {
        title: "Doomsday clock",
        price: "450",
        pictureUrl:
          "https://images-na.ssl-images-amazon.com/images/I/81u32i8ixaL.jpg",
      },
      {
        title: "Justice League vs Suicide Squad",
        price: "350",
        pictureUrl:
          "https://images-na.ssl-images-amazon.com/images/I/91mBojLIHEL.jpg",
      },
    ];
    const getData = new Promise((res, rej) => {
      setTimeout(() => {
        res(data);
      }, 2000);
    });

    getData
      .then((res) => {
        setItems(res);
      })
      .catch((e) => {
        console.log(e);
      });
    //return () => {};
  }, []);

  return (
    <div className="row">
      {items.length > 0 ? (
        items.map((item, index) => {
          return (
            <Item
              id={index}
              key={index}
              title={item.title}
              price={item.price}
              pictureUrl={item.pictureUrl}
            />
          );
        })
      ) : (
        <h5>"Obteniendo datos...."</h5>
      )}
    </div>
  );
};

export default ItemList;
