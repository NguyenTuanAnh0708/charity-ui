import React from "react";
import "./product.scss";
export const Product = ({ className = "" }) => {
  return (
    <div className={`product ${className}`}>
      <div
        className="product__img"
        style={{
          backgroundImage: `url(https://the350f.com/wp-content/uploads/2015/08/DSC6549.jpg)`,
        }}
      ></div>
      <h3 className="product__name">Tiramisu</h3>
      <p className="product__price">Giá từ: 500,000VND</p>
    </div>
  );
};
