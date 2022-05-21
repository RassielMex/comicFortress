import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../../context/CartContext";
import CartForm from "../CartForm/CartForm";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, removeToCart } = useContext(CartProvider);
  const [form, setForm] = useState({
    buyer: {
      email: "",
      nombre: "",
      apellido: "",
      telefono: "",
    },
  });

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

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "name":
        setForm({ ...form, nombre: { value } });

        break;
      case "phone":
        setForm({ ...form, telefono: { value } });
        break;
      case "email":
        setForm({ ...form, email: { value } });
        break;
      case "lastName":
        setForm({ ...form, apellido: { value } });
        break;

      default:
        break;
    }
    console.log(form);
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
      {totalPrice() > 0 && <h5>{"Total: $" + totalPrice()}</h5>}
      <CartForm />
    </div>
  );
};

export default Cart;
