import { Modal } from "bootstrap";
import { addDoc, collection, writeBatch, doc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../services/FirebaseService";
import ModalComponent from "../Modal/ModalComponent";

const CartForm = ({ total, cart }) => {
  const [order, serOrder] = useState({
    buyer: {
      email: "",
      name: "",
      lastName: "",
      phone: "",
    },
    total: total,
    cart: cart,
  });

  const [orderID, setOrderID] = useState("");
  const [formValidity, setValidity] = useState({
    email: true,
    name: true,
    lastName: true,
    phone: true,
  });

  const handleChange = (e) => {
    const { value, id } = e.target;
    isFormValid(value, id);
    serOrder({ ...order, buyer: { ...order.buyer, [id]: value } });
  };

  const handleSubmit = (e) => {
    if (isFormValid()) {
      console.log("Validation truye");
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order)
        .then((docRef) => {
          setOrderID(docRef.id);
          updateStock();
          const modalOrder = new Modal("#modal");
          modalOrder.show();
        })
        .catch((e) => {
          console.log(e);
        });
    }

    e.preventDefault();
  };

  const isFormValid = (value, id) => {
    if (value !== "") {
      setValidity({ ...formValidity, [id]: true });
    } else {
      setValidity({ ...formValidity, [id]: false });
    }
    return Object.keys(formValidity).every(Boolean);
  };

  const updateStock = () => {
    const batch = writeBatch(db);
    cart.forEach((cartItem) => {
      const id = cartItem.id;
      const newStock = cartItem.stock - cartItem.quantity;
      const docRef = doc(db, "comics", id);
      batch.update(docRef, { stock: newStock });
    });

    batch.commit();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${formValidity.email ? "" : "is-invalid"}`}
            id="email"
            aria-describedby="emailHelp"
            value={order.buyer.email}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Campo requerido.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className={`form-control ${formValidity.name ? "" : "is-invalid"}`}
            id="name"
            value={order.buyer.name}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Campo requerido.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className={`form-control ${
              formValidity.lastName ? "" : "is-invalid"
            }`}
            id="lastName"
            value={order.buyer.lastName}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Campo requerido.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Telefono
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={order.buyer.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-warning">
          Comprar
        </button>
      </form>
      <ModalComponent id={"modal"} orderID={orderID} />
    </div>
  );
};

export default CartForm;
