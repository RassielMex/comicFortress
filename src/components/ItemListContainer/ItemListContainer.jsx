import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/FirebaseService";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const itemsCollection = collection(db, "comics");

    if (!id) {
      getDocs(itemsCollection)
        .then((snapshot) => {
          if (!snapshot.empty) {
            setItems(
              snapshot.docs.map((doc) => {
                return {
                  id: doc.id,
                  ...doc.data(),
                };
              })
            );
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      const q = query(itemsCollection, where("category", "==", id));
      getDocs(q).then((snapshot) => {
        if (!snapshot.empty) {
          setItems(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            })
          );
        }
      });
    }
  }, [id]);

  return (
    <div className="container">
      <h1>{greeting || "Hola!!"}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
