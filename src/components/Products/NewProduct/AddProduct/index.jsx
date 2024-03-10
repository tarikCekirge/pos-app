import React from "react";
import "./style.css";

const AddProduct = ({ setIsOpen }) => {
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Yeni Ürün Ekle</button>
    </>
  );
};

export default AddProduct;
