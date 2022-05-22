import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../../context/CartContext";
import CartForm from "../CartForm/CartForm";
import CartItem from "../CartItem/CartItem";

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
            <CartItem
              key={index}
              itemId={item.id}
              price={item.price}
              title={item.price}
              quantity={item.quantity}
              pictureUrl={item.pictureUrl}
              removeItem={handleRemoveItem}
            />
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
      {totalPrice() > 0 && (
        <div>
          <h5>{"Total: $" + totalPrice()}</h5>
          <CartForm cart={cart} total={totalPrice()} />
        </div>
      )}
    </div>
  );
};

export default Cart;
