import React from "react";
import "./style.css";

const ProductInfo = (props) => {
  return (
    <>
      <div className="product-info">
        <div className="text-xs -mb-2 text-green-600">Fırsat</div>
        {props.children}
      </div>
    </>
  );
};

export default ProductInfo;
