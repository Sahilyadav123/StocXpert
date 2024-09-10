import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
// import Hero from './landing_page/home/Hero';
import HomePage from './landing_page/home/HomePage';
import Pricing from './landing_page/pricing/PricingPage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/Productpage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Notfound from './landing_page/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/products' element={<ProductPage/>}></Route>
      <Route path='/pricing' element={<Pricing/>}></Route>
      <Route path='/support' element={<SupportPage/>}></Route>
      <Route path='*' element={<Notfound/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  
);



