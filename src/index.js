import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import Cat from './components/Cat';
import store from './redux/configureStore';
import { apiGetBooks } from './api';

store.dispatch(apiGetBooks);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/books" element={<App />} />
        <Route path="/categories" element={<Cat />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
