import React, { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import "../css/ProductDetails.css";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { addToBasket, calculateAmount } from "../redux/slices/basketSlice";

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const { price, image, title, description } = selectedProduct;
  const [amount, setAmount] = useState(1);

  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      amount,
    };

    dispatch(addToBasket(payload));
    dispatch(calculateAmount());
  };
  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };
  useEffect(() => {
    getProductById();
  }, []);

  return (
    <div className="detail-container">
      <div className="image-container">
        <img src={image} alt="" className="detail-image" />
      </div>
      <div className="detail-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <h1>{price} $</h1>

        <div className="quantity-container">
          <CiCircleMinus
            onClick={() => setAmount(amount <= 0 ? 0 : amount - 1)}
            className="detail-icons"
          />
          {amount}
          <CiCirclePlus
            onClick={() => setAmount(amount >= 10 ? 10 : amount + 1)}
            style={{ marginLeft: "20px" }}
            className="detail-icons"
          />
        </div>
        <div>
          <button onClick={addBasket} className="button-add-basket">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
