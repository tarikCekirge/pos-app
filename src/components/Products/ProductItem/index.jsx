import React from "react";
import "./style.css";
import ProductInfo from "./ProductInfo";

const ProductItem = ({ product }) => {
  const { imageUrl, productName, productPrice } = product;
  return (
    <React.Fragment>
      <div className="product-item">
        <div className="product-image">
          <img src={imageUrl} alt="" />
        </div>
        <ProductInfo>
          <h5>{productName}</h5>
          <span>{productPrice}</span>
        </ProductInfo>
      </div>
    </React.Fragment>
  );
};

export default ProductItem;
