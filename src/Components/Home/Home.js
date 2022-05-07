import React, { useEffect, useState } from 'react';
import Baner from '../Baner/Baner';
import MakeDifferent from '../MakeDifferent/MakeDifferent';
import PageTittle from '../PageTittle/PageTittle';
import Products from '../Products/Products';
import './Home.css'
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCode,faGift } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    const [products,setProducts]=useState(0)
    useEffect(() => {
        fetch('https://assignment-11-server.herokuapp.com/productCount').then(res => res.json()).then(data => {
            const count = parseInt(data.result);
            setProducts(count)
        })
    },[])
    return (
        <div className='minheight'>
            <PageTittle location="Men's Perfume - Home"></PageTittle>
            <Baner></Baner>
            <div className='md:w-3/4 w-full mx-auto h-60 bg-white mt-12 rounded happyclient grid md:grid-cols-3 grid-cols-2 items-center justify-between px-10'>
                <div>
                    <h2 className='text-white font-bold mb-2  text-5xl text-center'>{<CountUp end={1000} />}+ <FontAwesomeIcon className='text-blue-700' icon={faUser}></FontAwesomeIcon> </h2>
                    <h2 className='text-center'><span className='text-xl text-white font-bold uppercase'>Happy Client</span></h2>
                </div>
                <div>
                <h2 className='text-white font-bold mb-2  text-5xl text-center'>{<CountUp end={50} />}+ <FontAwesomeIcon className='text-blue-700' icon={faCode}></FontAwesomeIcon> </h2>
                    <h2 className='text-center'><span className='text-xl text-white font-bold uppercase'>Senior Developer</span></h2>
                </div>
                <div>
                <h2 className='text-white font-bold mb-2 text-5xl text-center'>{<CountUp end={products} />}+ <FontAwesomeIcon className='text-blue-700' icon={faGift}></FontAwesomeIcon> </h2>
                    <h2 className='text-center'><span className='text-xl text-white font-bold uppercase '>Avilabel product</span></h2>
                </div>
            </div>
            <h2 className=' my-16 text-center  text-4xl font-bold text-white'>Pro<span className='uppercase text-blue-700' style={{borderBottom:"3px solid white"}}>ducts</span></h2>
            <Products></Products>
            <MakeDifferent></MakeDifferent>
        </div>
    );
};

export default Home;