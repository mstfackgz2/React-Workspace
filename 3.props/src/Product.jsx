import React from "react";

const Product = (props) => {
  return (
    <div>
      <div>Urun Bilgileri</div>
      <div>
        <div>isim : {props.isim}</div>
        <div>Fiyat :{props.fiyat} TL</div>
      </div>
    </div>
  );
};

export default Product;
