import React, { useContext } from "react";
import "./CartWidget.css";
import cartIcon from "bootstrap-icons/icons/cart.svg";
import { Link } from "react-router-dom";
import { CartProvider } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartProvider);

  return (
    <Link to={"/cart"} style={{ textDecoration: "none", color: "black" }}>
      <div className="d-flex align-items-center">
        <img src={cartIcon} alt="cartIcon" />
        <span> {getTotalItems()} </span>
      </div>
    </Link>
  );
};

export default CartWidget;
