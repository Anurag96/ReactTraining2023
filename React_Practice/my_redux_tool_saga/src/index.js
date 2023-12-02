import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { createSagaMiddleware } from '@redux-saga/core'
import { Provider } from 'react-redux';

const saga = createSagaMiddleware()
const store = configureStore({
  reducer: {

  },
  middleware: [saga]
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <App />
  </Provider>
);
