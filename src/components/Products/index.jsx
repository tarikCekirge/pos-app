import "./style.css";
import React from "react";
import ProductItem from "../Products/ProductItem";
import { productData } from "../../productData";

const index = () => {
  return (
    <React.Fragment>
      <div className="products-wrapper">
        <h1 className="title">Products</h1>
        <div className="products">
          {productData.map((product) => (
            <ProductItem key={product.productName} product={product} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default index;
