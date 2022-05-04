import React from 'react';
import Baner from '../Baner/Baner';
import PageTittle from '../PageTittle/PageTittle';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    return (
        <div className='minheight'>
            <PageTittle location="Men's Perfume Home"></PageTittle>
            <Baner></Baner>
             <Products></Products>
        </div>
    );
};

export default Home;