import React from 'react';
import Baner from '../Baner/Baner';
import MakeDifferent from '../MakeDifferent/MakeDifferent';
import PageTittle from '../PageTittle/PageTittle';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    return (
        <div className='minheight'>
            <PageTittle location="Men's Perfume - Home"></PageTittle>
            <Baner></Baner>
            <h2 className=' my-16 text-center text-4xl font-bold text-white'>Pro<span className='uppercase text-blue-700' style={{borderBottom:"3px solid white"}}>ducts</span></h2>
            <Products></Products>
            <MakeDifferent></MakeDifferent>
        </div>
    );
};

export default Home;