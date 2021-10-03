import React from 'react';
import './App.css'
import Hero from './components/Hero/Hero';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Products from './components/Products/Products';
import { productData } from './components/Products/Data';



function App() {
  return (
    <>
    <Router>
    {/* <Header /> */}
    <Hero />
    <Products heading='Choose your favorite' data={productData} />


    </Router>
    </>
  );
}

export default App;
