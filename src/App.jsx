import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import SwiperAuto from './components/swiper/Swiper';
import { Product } from './components/product/Product';
import FilteredProduct from './components/filtered-product/FilteredProduct';
import Footer from './components/footer/Footer';
import Introduce from './pages/introduce';
import Home from './pages/home';
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
