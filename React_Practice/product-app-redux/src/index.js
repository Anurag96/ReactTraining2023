import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import store2 from './store/store';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import RootLayout from './components/RootLayout';
import ProductListing from './containers/ProductListing'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <Provider store={store} store2={store2}> */}
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='/cart' element={<Cart />} />
          <Route>404 Not Found!!</Route>
        </Route>
      </Routes>
      {/* </Provider> */}
    </React.StrictMode>
  </BrowserRouter>
);
