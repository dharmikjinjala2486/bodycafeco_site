import React from "react";
import { useNavigate } from "react-router-dom";
import ShopPage from "../components/ShopPage";

export default function ShopPageRoute({ onAddRitual }) {
  const navigate = useNavigate();

  return (
    <ShopPage
      onAddRitual={onAddRitual}
      onNavigate={(productId) => navigate(`/product/${productId}`)}
    />
  );
}
