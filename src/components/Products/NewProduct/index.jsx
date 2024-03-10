import React, { useState } from "react";
import "./style.css";
import ProductForm from "./ProductForm";
import AddProduct from "./AddProduct";

const Index = ({ products, setProducts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSaveProduct = (newProductData) => {
    setProducts([newProductData, ...products]);
  };
  return (
    <>
      <div className="new-product">{isOpen ? <ProductForm products={products} onSaveProduct={onSaveProduct} setIsOpen={setIsOpen} /> : <AddProduct setIsOpen={setIsOpen} />}</div>
    </>
  );
};

export default Index;
