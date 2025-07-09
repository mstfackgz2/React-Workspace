import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";
function ProductDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1>Urun detayi</h1>
      {products &&
        products.map((product) => {
          if (product.id === id) {
            return (
              <div key={product.id}>
                <h3>{product.id}</h3>
                <h3>{product.name}</h3>
                <h3>{product.price}</h3>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}

export default ProductDetails;
