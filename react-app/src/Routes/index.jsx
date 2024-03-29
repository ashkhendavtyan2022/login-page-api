import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../Pages/DashboardPage";
import { ProductPage } from "../Pages/ProductPage";
import { EditPage } from "../Pages/EditPage";
import { Shop } from "../Shop";

export const RouteComponent = () => {
  return (
    <Routes>
      <Route path="" element={<DashboardPage />} />
      <Route path="product" element={<ProductPage />} />
      <Route path="edit" element={<EditPage />} />
      <Route path="shop" element={<Shop />} />
    </Routes>
  );
};