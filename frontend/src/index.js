import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import HomePage from './Landing_Page/home/HomePage';
import Signup from './Landing_Page/signup/Signup';
import AboutPage from './Landing_Page/about/AboutPage';
import ProductsPage from './Landing_Page/products/ProductsPage';
import PricingPage from'./Landing_Page/pricing/PricingPage';
import SupportPage from './Landing_Page/support/SupportPage';
import Footer from './Landing_Page/Fotter';
import Navbar from './Landing_Page/Navbar';

import NotFound from './Landing_Page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/products' element={<ProductsPage/>}/>
            <Route path='/pricing' element={<PricingPage/>}/>
            <Route path='/support' element={<SupportPage/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
);


