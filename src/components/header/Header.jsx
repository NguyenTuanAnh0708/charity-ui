import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__inner__logo">
          <img src="https://the350f.com/wp-content/uploads/2021/05/logo-1.png" alt="logo" width={624} height={418} />
        </div>
        <ul className="header__inner__nav">
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'header-active' : 'header-disable')} to="/">
              Trang Chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'header-active' : 'header-disable')}
              to="san-pham-gay-quy"
            >
              Sản phẩm gây quỷ
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
