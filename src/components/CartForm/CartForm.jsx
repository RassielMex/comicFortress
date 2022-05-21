import React from "react";

const CartForm = ({ handleChange }) => {
  return (
    <form onChange={handleChange}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Apellido
        </label>
        <input type="text" className="form-control" id="lastName" />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Telefono
        </label>
        <input type="text" className="form-control" id="phone" />
      </div>
      <button type="submit" className="btn btn-warning">
        Submit
      </button>
    </form>
  );
};

export default CartForm;
