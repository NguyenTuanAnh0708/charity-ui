import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
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
