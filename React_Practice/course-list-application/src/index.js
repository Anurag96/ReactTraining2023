import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Forms from './Components/Forms';
import Navbar from './Components/Navbar';
import Enquiries from './Components/Enquiries';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/form/:courseId' element={<Forms />} />
        <Route path='/courses/:courseId/enquiries' element={<Enquiries />} />
      </Routes>
    </div>
  </BrowserRouter>
);

