import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import ProductProvider from './context/ProductContext'
import SidebarProvider from './context/SidebarContext'
import CartProvider from './context/CartContext'

import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <SidebarProvider>
      <ProductProvider>
        <React.StrictMode>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </React.StrictMode>
      </ProductProvider>
  </SidebarProvider>
  </CartProvider>
  
);
