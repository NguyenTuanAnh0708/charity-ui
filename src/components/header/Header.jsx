import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
import dataWeb from '../../data';
const Header = () => {
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__inner__logo">
          <img src={dataWeb.Logo} alt="logo" />
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
