import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, name, price } = product;
  const navigate = useNavigate();
  return (
    <div>
      <h1>Urun Detayi</h1>
      <h3>{name}</h3>
      <h3>{price}</h3>
      <button onClick={() => navigate("/product-details/" + id)}>
        Detaya Git
      </button>
    </div>
  );
}

export default Product;
