import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Customer from './Navigate/Customer';
import Product from './Navigate/Product';
import NotFound from './Navigate/NotFound';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Navigate/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div>
      <Home />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/customer/:id/:name' element={<Customer />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);
// setTimeout(() => {
//   root.unmount()
// }, 6000);
