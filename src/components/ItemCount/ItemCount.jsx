import React, { useState } from "react";
import plusIcon from "../../../node_modules/bootstrap-icons/icons/plus.svg";
import dashIcon from "../../../node_modules/bootstrap-icons/icons/dash.svg";

const ItemCount = ({ stock, initail, onAdd }) => {
  const [count, setCount] = useState(initail || 10);

  const onIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const onDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    onAdd(count);
  };

  return (
    <div className="w-100">
      <div className=" d-flex justify-content-center flex-column">
        <div
          className="btn-group my-1"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onDecrement}
          >
            <img src={dashIcon} alt="plusicon" />
          </button>
          <div className="d-flex justify-content-center align-items-center w-50">
            {count}
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onIncrement}
          >
            <img src={plusIcon} alt="plusicon" />
          </button>
        </div>
        <button
          type="button"
          className="btn btn-outline-secondary my-1"
          onClick={addToCart}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
