import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PageTittle from '../PageTittle/PageTittle';
const UpdatedProduct = () => {
  const incressvalue = useRef(0)
    const { id } = useParams()
  const [product, setProduct] = useState({})
  const { picture, name, price, Suplier, discription, quantity } = product;
    useEffect(() => {
        fetch(`https://assignment-11-server.herokuapp.com/product/${id}`).then(res=>res.json()).then(data=>setProduct(data))
    },[id,product])
  const parseQuentity = parseInt(quantity) || 0;
  //updated value
  const updated = (value, id) => {
               fetch(`https://assignment-11-server.herokuapp.com/product/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({quantity :value})})
              .then((res) => res.json())
              .then((data) => {
                setProduct(data)
              })
  }
 //delevery product
    const deliveryproduct = () => {
        const newRest = parseQuentity - 1;
        // setRest(newRest);
      if (quantity > 0) {
        updated(newRest, id)
        toast.success('Item Deleviery Sucessfully', { id: 'Deleviery' })
      }
  } 
// incress product
    const incressProduct = () => {
      const newvalue = parseQuentity + parseInt(incressvalue.current.value);
        if (newvalue) {
            updated(newvalue,id)
            toast.success('Item Added Sucessfully',{id:'itemadd'})
    }
  }
  
    return (
        <div className=' md:w-1/3 w-3/4  mx-auto my-10 bg-gray-200 antialiased text-gray-900 rounded pb-10' style={{minHeight:'100vh'}}>
            <div>
            <PageTittle location="Men's Perfume Updated Product"></PageTittle>
    <img src={picture} alt="" className=" w-full rounded-lg shadow-md object-cover object-center" />    
    
 <div className="relative px-4 -mt-16 ">
   <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-baseline">
      <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        {quantity<=0 ? 'Out Of Stouck':'available'}
      </span>
      <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
    Quentity: {quantity}
  </div>  
    </div>
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{name}</h4>
 <div className="mt-1">
    Price: {price}
    </div> <div className="mt-4 mb-2">
      <h5>{(discription)?.slice(0,100)}</h5>
      <span className="text-teal-600 text-md font-semibold"> {Suplier}</span>
  </div>  
  <button disabled={parseInt(quantity) <= 0 && true} onClick={deliveryproduct} className='bg-teal-600 text-white py-2 px-3 rounded'>Delivery</button>
  <div className='mt-3'>
      <input  type="number" ref={incressvalue} className='w-1/4 h-9 mb-2 rounded' style={{ border: '2px solid black' }} />
      <br />
                <button onClick={incressProduct} className='bg-teal-600 text-white py-2 px-3 rounded'>Incress Quentity</button>
                <Link to='/managesitem'>
                <button  className=' md:ml-3 mt-2 bg-slate-900 text-white py-2 px-3 rounded'>Manages Inventory</button>
                </Link>
  </div></div>
 </div>
</div>
        </div>
    );
};

export default UpdatedProduct;