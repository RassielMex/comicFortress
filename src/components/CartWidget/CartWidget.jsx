import React from "react";
import "./CartWidget.css";
import cartIcon from "bootstrap-icons/icons/cart.svg";

const CartWidget = () => {
  let counter = 0;

  return (
    <div className="d-flex align-items-center">
      <img src={cartIcon} alt="cartIcon" />
      <span> {counter && counter} </span>
    </div>
  );
};

export default CartWidget;
