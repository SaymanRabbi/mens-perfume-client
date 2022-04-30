import React from 'react';
import Baner from '../Baner/Baner';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    return (
        <div className='minheight'>
            <Baner></Baner>
             <Products></Products>
        </div>
    );
};

export default Home;