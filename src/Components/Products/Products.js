import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
const Products = () => {
    const [products, setProducts] = useState([])
 
    useEffect(() => {
        fetch('https://assignment-11-server.herokuapp.com/product').then(res=>res.json()).then(data=>setProducts(data).slice(0,6))
    },[])
    return (
        <>
        <div className='mt-5 grid md:grid-cols-2 xl:grid-cols-3 gap-10 container mx-auto'>
            {
                products.map(pd=> <Product key={pd._id} product={pd}></Product> )
            }
            
            </div>
            <div className='text-center mt-4 mb-4 '>
                <Link to='/managesitem'>
                
                <button className='bg-white px-3 py-3 font-bold rounded'>Manage Inventories</button></Link>
            </div>
            </>
    );
};

export default Products;