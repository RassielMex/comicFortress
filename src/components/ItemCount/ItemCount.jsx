import React, { useState } from "react";
import plusIcon from "../../../node_modules/bootstrap-icons/icons/plus.svg";
import dashIcon from "../../../node_modules/bootstrap-icons/icons/dash.svg";

const ItemCount = ({ stock, initail }) => {
  const [count, setCount] = useState(initail || 10);

  const onAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const onMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="card " style={{ width: "18rem" }}>
      <div className="card-body d-flex justify-content-center flex-column">
        <div
          className="btn-group my-1"
          role="group"
          aria-label="Basic outlined example"
        >
          <button type="button" className="btn btn-secondary" onClick={onMinus}>
            <img src={dashIcon} alt="plusicon" />
          </button>
          <div className="d-flex justify-content-center align-items-center w-50">
            {count}
          </div>
          <button type="button" className="btn btn-secondary" onClick={onAdd}>
            <img src={plusIcon} alt="plusicon" />
          </button>
        </div>
        <button type="button" className="btn btn-outline-secondary my-1">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
