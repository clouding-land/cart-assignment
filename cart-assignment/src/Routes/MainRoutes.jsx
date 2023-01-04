import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
// import Login from "../Components/Login";
import Products from "../Components/Products";
import DetailedProduct from "../Components/DetailedProduct";
import Error from "../Components/Error";
import Nav from "../Components/Nav";
//import MenClothing from "../Components/MenClothing";
import FemaleClothing from "../Components/FemaleClothing";
import Electronics from "../Components/Electronics";
import Accessories from "../Components/Accessories";
// import PrivateRoute from "../Contexts/PrivateRoute";

const MainRoutes = () => {
  return (
    <div>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/clothing" element={<FemaleClothing />} />
        <Route path="/products/electronics" element={<Electronics />} />
        <Route path="/products/accessories" element={<Accessories />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/products/:id" element={<DetailedProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
export default MainRoutes;