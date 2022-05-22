import React, { useContext } from "react";
import { CartProvider } from "../../context/CartContext";

const ModalComponent = ({ id, orderID }) => {
  const { cleanCart } = useContext(CartProvider);
  const handleClose = () => {
    cleanCart();
  };

  return (
    <div className="modal" id={id}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">¡Gracias!</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              Su orden <strong>{orderID}</strong> se ha completado exitosamente.
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-warning"
              data-bs-dismiss="modal"
              onClick={handleClose}
            >
              ¡Listo!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
