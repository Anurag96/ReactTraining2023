import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ProductDescription from './component/ProductDescription';
import Navbar from './component/Navbar';
import Catagories from './component/Catagories';
import { store } from './redux/Store'
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <div >
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/product/:id' element={<ProductDescription />} />
          <Route path='/:category/:item' element={<Catagories />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </div>
);
