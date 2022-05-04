import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
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
        <div className="d-flex  justify-content-center">
          <div className="spinner-border text-secondary m-1" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemList;
