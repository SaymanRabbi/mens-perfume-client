import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])
    console.log(products)
    useEffect(() => {
        fetch('http://localhost:5000/product').then(res=>res.json()).then(data=>setProducts(data))
    },[])
    return (
        <div className='mt-5 grid md:grid-cols-3 gap-10 container mx-auto'>
            {
                products.map(pd=> <Product key={pd._id} product={pd}></Product> )
           }
        </div>
    );
};

export default Products;