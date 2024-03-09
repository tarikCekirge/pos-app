import React, { useState } from "react";
import "./style.css";
import ProductInfo from "./ProductInfo";

const ProductItem = ({ product }) => {
  const { imageUrl, productName, productPrice } = product;
  const [title, setTtitle] = useState(productName);
  const clickHandler = () => {
    console.log(product);
  };
  return (
    <React.Fragment>
      <div className="product-item">
        <div className="product-image">
          <img src={imageUrl} alt={productName} />
        </div>
        <ProductInfo>
          <h5>{title}</h5>
          <span>{productPrice}</span>
          <button className="add-to-card" onClick={clickHandler}>
            Sepete Ekle
          </button>
        </ProductInfo>
      </div>
    </React.Fragment>
  );
};

export default ProductItem;
