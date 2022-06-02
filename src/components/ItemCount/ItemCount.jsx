import React, { useState } from "react";

const ItemCount = ({ stock, initail, onAdd }) => {
  const [count, setCount] = useState(initail || 0);

  const onIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const onDecrement = () => {
    if (count > 1) {
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
            className="btn btn-warning"
            onClick={onDecrement}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
          </button>
          <div className="d-flex justify-content-center align-items-center w-50">
            {count}
          </div>
          <button
            type="button"
            className="btn btn-warning"
            onClick={onIncrement}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
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
