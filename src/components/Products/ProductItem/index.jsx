import React, { useState } from "react";
import "./style.css";
import ProductInfo from "./ProductInfo";

const ProductItem = ({ product, products, setProducts }) => {
  const { imageUrl, productName, productPrice } = product;
  const [title, setTtitle] = useState(productName);
  const clickHandler = () => {};

  const deleteHandler = () => {
    setProducts((prev) => prev.filter((item) => item.id != product.id));
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
          <div className="grid grid-cols-2 gap-2">
            <button className="add-to-card" onClick={clickHandler}>
              Güncelle
            </button>
            <button className="delete-product" onClick={deleteHandler}>
              Sil
            </button>
          </div>
        </ProductInfo>
      </div>
    </React.Fragment>
  );
};

export default ProductItem;
