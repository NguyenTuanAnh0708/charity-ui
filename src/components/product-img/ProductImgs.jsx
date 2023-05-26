import React, { useState } from "react";
import "./product-img.scss";
import Modal from "../modal/Modal";
const ProductImgs = (props) => {
  return (
    <>
      <div className="product__img">
        <img src={props.imgs.primary} class="image" alt="normal" />
        <img src={props.imgs.secondary} class="image-hover" alt="hover" />
      </div>
    </>
  );
};

export default ProductImgs;
