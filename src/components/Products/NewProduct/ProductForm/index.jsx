import React, { useState } from "react";
import "./style.css";

const Index = (props) => {
  const [newProductData, setnewProductData] = useState({
    productName: "",
    productPrice: "",
    imageUrl: "",
  });

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setnewProductData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = props.products.length + 1;
    const { productName, productPrice, imageUrl } = newProductData;

    if (!productName || !productPrice || !imageUrl) {
      alert("Tüm alanları doldurunuz.");
      return;
    }

    props.onSaveProduct({ ...newProductData, id: newId });
    setnewProductData({
      productName: "",
      productPrice: "",
      imageUrl: "",
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-input">
            <label htmlFor="productName">Ürün Adı</label>
            <input type="text" id="productName" placeholder="Ürün Adı Giriniz" value={newProductData.productName} onChange={changeHandler} />
          </div>
          <div className="form-input">
            <label htmlFor="productPrice">Ürün Fiyatı</label>
            <input type="number" id="productPrice" placeholder="Ürün Fiyatı Giriniz" value={newProductData.productPrice} onChange={changeHandler} />
          </div>
          <div className="form-input">
            <label htmlFor="imageUrl">Ürün Görseli</label>
            <input type="text" id="imageUrl" placeholder="Ürün Görseli Giriniz" value={newProductData.imageUrl} onChange={changeHandler} />
          </div>
          <div className="form-input">
            <button type="submit">Ürün Ekle</button>
          </div>
          <div className="form-input">
            <button type="button" onClick={() => props.setIsOpen(false)}>
              Vazgeç
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Index;
