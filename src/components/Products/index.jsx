import "./style.css";
import React, { useState } from "react";
import ProductItem from "../Products/ProductItem";
import NewProduct from "../Products/NewProduct";

const Index = () => {
  const [products, setProducts] = useState([]);
  return (
    <React.Fragment>
      <div>
        <NewProduct setProducts={setProducts} products={products} />
      </div>
      <div className="products-wrapper">
        <h1 className="title">Products</h1>
        <div className="products">
          {products.length === 0 ? <p className="text-center text-xl col-span-full">Ürün Yok</p> : products.map((product) => <ProductItem key={product.id} product={product} products={products} setProducts={setProducts} />)}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
