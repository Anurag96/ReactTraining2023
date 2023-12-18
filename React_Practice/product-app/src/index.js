import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ProductDescription from './component/ProductDescription';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/:id' element={<ProductDescription />} />
        {/* <Route path='/customer/:id/:name' element={<Customer />} />
      <Route path='/product' element={<Product />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>
  </BrowserRouter>
);
