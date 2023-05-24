import React from "react";
import "./filtered-product.scss";
import { Product } from "../product/Product";
const FilteredProduct = () => {
  return (
    <div className="wapper mt-5">
      <div className="filter">
        <h3>Chọn loại sản phẩm</h3>
        <select>
          <option value="all" defaultValue>
            All
          </option>
          <option value="option1">Băng đô</option>
          <option value="option2">Kẹp Tóc</option>
        </select>
      </div>
      <div className="filtered-product mt-3">
        <Product className="long" />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default FilteredProduct;
