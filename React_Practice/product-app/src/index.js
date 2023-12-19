import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ProductDescription from './component/ProductDescription';
import Navbar from './component/Navbar';
import Catagories from './component/Catagories';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/:id' element={<ProductDescription />} />
        <Route path='/:category/:item' element={<Catagories />} />
        {/* <Route path='/customer/:id/:name' element={<Customer />} />
      <Route path='/product' element={<Product />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>
  </BrowserRouter>
);
