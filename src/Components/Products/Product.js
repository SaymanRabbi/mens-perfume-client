import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { picture, name, price, Suplier, discription, quantity } = product;
    return (
        <div className=" bg-gray-200 antialiased text-gray-900 rounded py-5">
<div>
    <img src={picture} alt=" random imgee" className="object-cover w-full  object-center rounded-lg shadow-md "/>    
    <div className="relative px-4 -mt-16  ">
   <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-baseline">
      <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        New
      </span>
      <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
    Quentity: {quantity}
  </div>  
    </div>
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{name}</h4>
  <div className="mt-1">
    Price: {price}
  </div>
  <div className="mt-4 mb-2">
  <h5>{(discription).slice(0,100)}</h5>
  <span className="text-teal-600 text-md font-semibold"> {Suplier}</span>
    </div>  
  <Link to={`/updatepd/${product._id}`}> <button className='bg-teal-600 text-white py-2 px-3 rounded'>Update</button></Link>
  </div>
 </div>
  </div>
  </div>
    );
};

export default Product;