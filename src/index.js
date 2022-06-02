import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Cat from './components/Cat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/books" element={<App />} />
      <Route path="/categories" element={<Cat />} />
    </Routes>
  </BrowserRouter>,
);
