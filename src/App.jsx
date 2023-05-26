import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import SwiperAuto from "./components/swiper/Swiper";
import { Product } from "./components/product/Product";
import FilteredProduct from "./components/filtered-product/FilteredProduct";
import Footer from "./components/footer/Footer";
import Introduce from "./pages/introduce";
const App = () => {
  return (
    <>
      <Header />
      <Introduce />
      <Footer />
    </>
  );
};

export default App;
