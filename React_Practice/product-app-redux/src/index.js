import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ProductListing from '../src/containers/ProductListing'
import Header from './containers/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>

      <Header />
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/product/:productId' element={<ProductListing/>}/>
          <Route>404 Not Found!!</Route>
        </Routes>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
