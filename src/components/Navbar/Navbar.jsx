import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartProvider } from "../../context/CartContext";
import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
  const { getTotalItems } = useContext(CartProvider);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          Comic Fortress
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/new"}>
                New
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/bestseller"}>
                Bestseller
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/outlet"}>
                Outlet
              </NavLink>
            </li>
            {getTotalItems() > 0 ? (
              <li className="nav-item d-flex align-items-center">
                <CartWidget count={getTotalItems()} />
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
