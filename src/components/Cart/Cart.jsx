import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeToCart } = useContext(CartProvider);

  const totalPrice = () => {
    const totalByItem = cart.map((item) => {
      return item.price * item.quantity;
    });
    return totalByItem.reduce((a, b) => {
      return a + b;
    }, 0);
  };

  const handleRemoveItem = (id) => {
    removeToCart(id);
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-2">
      {cart.length > 0 ? (
        cart.map((item, index) => {
          return (
            <div
              key={index}
              className="card w-25 h-25 d-flex flex-row align-items-center m-1"
            >
              <img src={item.pictureUrl} alt="" className="w-25 m-2" />
              <div className="card-body ">
                <h5 className="card-text"> {item.title}</h5>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price}</p>
              </div>
              <button
                className="btn btn-outline-danger d-flex justify-content-center align-items-center m-1"
                onClick={() => {
                  handleRemoveItem(item.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
              </button>
            </div>
          );
        })
      ) : (
        <div>
          <h1 className="">Tu carrito esta vacio </h1>
          <Link to={"/"}>
            <button className="btn btn-warning"> Ir a comprar</button>
          </Link>
        </div>
      )}
      {totalPrice() > 0 ? <h5>{"Total: $" + totalPrice()}</h5> : null}
    </div>
  );
};

export default Cart;
