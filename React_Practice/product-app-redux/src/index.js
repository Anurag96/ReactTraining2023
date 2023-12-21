import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ProductComponent from '../src/containers/ProductComponent'
import Header from './containers/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>

      <Header />
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/product' element={<ProductComponent />} />
        </Routes>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
