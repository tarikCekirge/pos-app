import React from "react";
import "./style.css";
import ProductForm from "./ProductForm";

const Index = ({ products, setProducts }) => {
  const onSaveProduct = (newProductData) => {
    setProducts([newProductData, ...products]);
  };
  return (
    <>
      <div className="new-product">
        <ProductForm onSaveProduct={onSaveProduct} />
      </div>
    </>
  );
};

export default Index;
