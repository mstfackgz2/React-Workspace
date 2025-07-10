import { useNavigate } from "react-router-dom";
import "../css/Product.css";

function Product({ product }) {
  const { id, price, image, title, description } = product;
  const navigate = useNavigate();
  return (
    <div className="card">
      <img className="image" src={image} alt="" />
      <div>
        <p className="product-title">{title}</p>
        <h3 className="product-price">{price} $</h3>
      </div>
      <div className="flex-row">
        <button
          onClick={() => navigate("/product-details/" + id)}
          className="product-button"
        >
          Detayina Git
        </button>
      </div>
    </div>
  );
}

export default Product;
