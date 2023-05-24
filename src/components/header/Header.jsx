import React from "react";
import "./header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__inner__logo">
          <img
            src="https://the350f.com/wp-content/uploads/2021/05/logo-1.png"
            alt="logo"
            width={624}
            height={418}
          />
        </div>
        <ul className="header__inner__nav">
          <li>Trang Chủ</li>
          <li>Sản phẩm</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
