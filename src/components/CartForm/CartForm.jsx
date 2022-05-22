import React, { useState } from "react";

const CartForm = ({ total, cart }) => {
  const [form, setForm] = useState({
    buyer: {
      email: "",
      name: "",
      lastName: "",
      phone: "",
    },
    total: total,
    cart: cart,
  });

  const handleChange = (e) => {
    const { value, id } = e.target;

    setForm({ ...form, buyer: { ...form.buyer, [id]: value } });
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          value={form.buyer.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={form.buyer.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          value={form.buyer.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Telefono
        </label>
        <input
          type="text"
          className="form-control"
          id="phone"
          value={form.buyer.phone}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-warning">
        Comprar
      </button>
    </form>
  );
};

export default CartForm;
