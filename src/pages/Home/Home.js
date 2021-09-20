import React from 'react';

import ContactInfo from '../../components/Contact/ContactInfo';
import Reviews from '../../components/Reviews/Reviews';
import Flyer from '../../components/flyer/flyer';
import Product from '../../components/home-products/Product';

import './Home.css';
function Home(props) {
    return (
        <div>
            <Flyer/>
            <Product/>
            <Reviews/>
            <ContactInfo/>
        </div>
    );
}

export default Home;