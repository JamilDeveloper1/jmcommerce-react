import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { ProductProvider } from './context/ProductProvider';
import { CartProvider } from './context/CartProvider';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <CartProvider>
    <ProductProvider>
    <App />
    </ProductProvider>
    </CartProvider>
    </BrowserRouter>
);


