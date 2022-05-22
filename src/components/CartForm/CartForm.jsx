import { Modal } from "bootstrap";
import { addDoc, collection } from "firebase/firestore";
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

  const handleChange = (e) => {
    const { value, id } = e.target;

    serOrder({ ...order, buyer: { ...order.buyer, [id]: value } });
  };

  const handleSubmit = (e) => {
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then((docRef) => {
        setOrderID(docRef.id);
        const modalOrder = new Modal("#modal");
        modalOrder.show();
      })
      .catch((e) => {
        console.log(e);
      });

    e.preventDefault();
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
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={order.buyer.email}
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
            value={order.buyer.name}
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
            value={order.buyer.lastName}
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
