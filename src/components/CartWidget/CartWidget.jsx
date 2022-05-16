import React from "react";
import "./CartWidget.css";
import cartIcon from "bootstrap-icons/icons/cart.svg";
import { Link } from "react-router-dom";

const CartWidget = ({ count }) => {
  return (
    <Link to={"/cart"} style={{ textDecoration: "none", color: "black" }}>
      <div className="d-flex align-items-center">
        <img src={cartIcon} alt="cartIcon" />
        <span> {count} </span>
      </div>
    </Link>
  );
};

export default CartWidget;
