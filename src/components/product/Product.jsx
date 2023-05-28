import React from 'react';
import './product.scss';
import ProductImgs from '../product-img/ProductImgs';
import { motion } from 'framer-motion';
export const Product = ({ className = '', product }) => {
  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, scale: 0.5 }} // Trạng thái ban đầu
      animate={{ opacity: 1, scale: 1 }} // Trạng thái hoạt động
      transition={{ duration: 0.5 }} // Thời gian hoàn thành hiệu ứng
      className={`product ${className}`}
    >
      <div className="product__img-container">
        <ProductImgs imgs={product.productImg} id={product.id} />
      </div>
      <h3 className="product__name">{product.productName}</h3>
      <p className="product__price">{product.productPrice}VND</p>
    </motion.div>
  );
};
