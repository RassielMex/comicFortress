import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/FirebaseService";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const itemRef = doc(db, "comics", itemId);
    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {};
  }, []);

  return (
    <div className="container d-flex justify-content-center">
      {Object.keys(item).length > 0 ? (
        <ItemDetail item={item} />
      ) : (
        <div className="d-flex  justify-content-center">
          <div className="spinner-border text-warning m-1" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
