import React from 'react';
import Hero from './../Hero/Hero';
import Products from './../Products/Products';
import { productData, productDataTwo } from './../Products/Data';
import Feature from './../Feature/Feature';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
<>
        <Hero />
        <Products heading='Choose your favorite' data={productData} />
        <Feature />  
        <Products heading='Sweet Treats for You' data={productDataTwo} />
        <Footer />
        </>
    );
};

export default Home;