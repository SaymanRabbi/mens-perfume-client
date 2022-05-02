import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const UpdatedProduct = () => {
    const incressvalue = useRef(0)
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`).then(res=>res.json()).then(data=>setProduct(data))
    },[id,product])
    const { picture, name, price, Suplier, discription, quantity } = product;
 //delevery product
    const deliveryproduct = () => {
        const newRest = parseInt(quantity) - 1;
        // setRest(newRest);
      if (quantity > 0) {
        fetch(`http://localhost:5000/product/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({quantity :newRest}),
     })
       .then((res) => res.json())
       .then((data) => {
         setProduct(data)
       })
       toast.success('Item Delevery SucessFully',{id:'itemadd'})
  }
         }
// incress product
    const incressProduct = () => {
        const newvalue = parseInt(quantity) + parseInt(incressvalue.current.value);
        if (newvalue) {
            fetch(`http://localhost:5000/product/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({quantity :newvalue}),})
        .then((res) => res.json())
        .then((data) => {
          setProduct(data)
        })
          toast.success('Item Added Sucessfully',{id:'itemadd'})
    }
  }
  useEffect(() =>{
    if (quantity <0) {
      toast.error('Out Of Stouck',{id:'out'})
    }
  },[quantity])
  
    return (
        <div className='md:w-2/4 w-3/4 mx-auto my-10 bg-gray-200 antialiased text-gray-900 rounded py-5' style={{minHeight:'100vh'}}>
            <div>
    
    <img src={picture} alt=" random imgee" className="object-cover w-full  object-center rounded-lg shadow-md "/>    
    
 <div className="relative px-4 -mt-16  ">
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