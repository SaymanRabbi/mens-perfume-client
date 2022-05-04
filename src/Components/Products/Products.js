import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
const Products = () => {
    const [products, setProducts] = useState([])
 
    useEffect(() => {
        fetch('http://localhost:5000/product').then(res=>res.json()).then(data=>setProducts(data))
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