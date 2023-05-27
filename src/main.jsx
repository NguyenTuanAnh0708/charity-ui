import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Introduce from './pages/introduce/index.jsx';
import Home from './pages/home/index.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Introduce />}></Route>
          <Route path="san-pham-gay-quy" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
