import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";
import { AuthProvider } from './Context/auth';
import "antd/dist/reset.css";
import { SearchProvider } from './Context/Search';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './Context/cart';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //this browser router enable the routing facility in our react app
  <AuthProvider>
    <BrowserRouter>
  
<SearchProvider>

<CartProvider>

  <App />
</CartProvider>
  <Toaster/>
</SearchProvider>
</BrowserRouter>
  </AuthProvider>
 
);

//in react all our code is inser inside the div tag tag with id root which is in index.html


