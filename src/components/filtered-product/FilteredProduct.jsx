import React, { useState } from 'react';
import './filtered-product.scss';
import { Product } from '../product/Product';
import dataWeb from '../../data';
import { motion } from 'framer-motion';
const FilteredProduct = () => {
  const [filter, setFilter] = useState('All');
  const dataProduct = dataWeb.data.filter((product) => {
    if (filter === 'All') return true;
    return product.productCategory == filter;
  });
  return (
    <div className="wapper mt-5">
      <div className="filter">
        <h3>Chọn loại sản phẩm</h3>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All" defaultValue>
            All
          </option>
          <option value="Băng đô">Băng đô</option>
          <option value="Kẹp tóc">Kẹp tóc</option>
          <option value="Dây buộc tóc">Dây buộc tóc</option>
        </select>
      </div>
      <motion.div Layout className="filtered-product mt-3">
        {dataProduct.map((product, index) => (
          <Product className={index === 0 ? 'long' : ''} product={product} />
        ))}
      </motion.div>
    </div>
  );
};

export default FilteredProduct;
