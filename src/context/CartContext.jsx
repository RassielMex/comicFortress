import React, { createContext, useState } from "react";

export const CartProvider = createContext([]);

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  const addToCart = (item, quantity) => {
    //console.log("Add: " + quantity + " of" + item.title);
    if (isInCart(item.id)) {
      //console.log("Esta en el carrito");

      const newCart = cart.map((itemCart) => {
        if (itemCart.id === item.id) {
          const newQuantity = itemCart.quantity + quantity;
          return { ...item, quantity: newQuantity };
        }

        return itemCart;
      });
      setCart(newCart);
    } else {
      //console.log("Nuevo item");
      const newItem = {
        ...item,
        quantity: quantity,
      };
      setCart([...cart, newItem]);
      //console.log(newItem);
    }
  };

  const removeToCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });

    setCart(newCart);
  };

  const getTotalItems = () => {
    if (cart.length > 0) {
      const quantities = cart.map((item) => {
        return item.quantity;
      });
      const sum = quantities.reduce((a, b) => {
        return a + b;
      }, 0);
      return sum;
    }
    return 0;
  };

  return (
    <CartProvider.Provider
      value={{ cart, addToCart, removeToCart, getTotalItems }}
    >
      {children}
    </CartProvider.Provider>
  );
};

export default CartContext;
