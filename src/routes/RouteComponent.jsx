import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Layout from "../views/Layout";

const RouteComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <ItemListContainer
                  greeting={"Aquí encontraras todos nuetros items"}
                />
              }
            />
            <Route
              path="category/:id"
              element={
                <ItemListContainer greeting={"Disfruta nuestra selección"} />
              }
            />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<h1>Ups! algo salió mal</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteComponent;
