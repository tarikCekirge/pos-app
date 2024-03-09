import "./style.css";
import React, { useState } from "react";
import ProductItem from "../Products/ProductItem";
import NewProduct from "../Products/NewProduct";
import { productData } from "../../productData";

const Index = () => {
  const [products, setProducts] = useState(productData);
  return (
    <React.Fragment>
      <div>
        <NewProduct setProducts={setProducts} products={products} />
      </div>
      <div className="products-wrapper">
        <h1 className="title">Products</h1>
        <div className="products">
          {products.map((product) => (
            <ProductItem key={product.productName} product={product} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
