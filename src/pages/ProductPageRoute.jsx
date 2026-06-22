import React from "react";
import { useParams } from "react-router-dom";
import ProductDetail, { PRODUCT_DATA } from "../components/ProductDetail";

export default function ProductPageRoute({ onAddRitual }) {
  const { id } = useParams();
  // Ensure the productId is valid; fall back to creatine if not found
  const productId = PRODUCT_DATA[id] ? id : "creatine";

  return (
    <ProductDetail
      productId={productId}
      onAddRitual={onAddRitual}
    />
  );
}
