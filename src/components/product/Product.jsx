import React from "react";
import "./product.scss";
import ProductImgs from "../product-img/ProductImgs";
export const Product = ({ className = "", product }) => {
  return (
    <div className={`product ${className}`}>
      <div className="product__img-container">
        <ProductImgs imgs={product.productImg} />
      </div>
      <h3 className="product__name">{product.productName}</h3>
      <p className="product__price">{product.productPrice}VND</p>
    </div>
  );
};
