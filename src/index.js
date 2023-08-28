import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { ProductProvider } from './context/ProductProvider';
import { CartProvider } from './context/CartProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
    <ProductProvider>
    <App />
    </ProductProvider>
    </CartProvider>
);


