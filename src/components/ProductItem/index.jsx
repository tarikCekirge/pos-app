import React from "react";
import "./style.css";

const ProductItem = ({ product }) => {
  const { imageUrl, productName, productPrice } = product;
  return (
    <React.Fragment>
      <div className="product-item">
        <div className="product-image">
          <img src={imageUrl} alt="" />
        </div>
        <div className="product-info">
          <h5>{productName}</h5>
          <span>{productPrice}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductItem;
