import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const ManagesItem = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/product?location=manages`).then(res => res.json()).then(data=>setProducts(data))
    }, [])
    const deleteProduct = (id)=>{
        fetch(`http://localhost:5000/product/${id}`, {
            method:'DELETE'
        }).then(res => res.json()).then(data => {
            const rest = products.filter(pd => pd._id !== id);
            setProducts(rest)
        })
    }
    return (
        <div className='px-10'>
            <h1 className='text-center text-3xl font-bold mt-5 mb-4 text-white'>Manages Inventory</h1>
          
        <div className="table w-full p-2">
        <table className="w-full border">
            <thead>
                <tr className="bg-gray-50 border-b">
                    <th className="border-r p-2 text-left">
                       Name
                    </th>
                    <th className="p-2 border-r text-left">
                    Price
                    </th>
                    <th className="p-2 border-r text-left">
                    Suplier
                    </th>
                    <th className="p-2 border-r text-left">
                    Quantity
                    </th>
                    <th className="p-2 border-r text-left">
                    Action
                    </th>
                   
                    
                </tr>
            </thead>
            <tbody>
                        {
                            products.map((data, index) => <tr key={index} className='p-2 border-r'>
                                <td className='text-white'>{data?.name}</td>
                                <td className='text-white'>{data?.price}</td>
                                <td className='text-white'>{data?.Suplier}</td>
                                <td className='text-white'>{data?.quantity}</td>
                                <td className='text-white'><FontAwesomeIcon onClick={()=>deleteProduct(data._id)} icon={faTrash} className='text-red-600 cursor-pointer' style={{width:'21px',height:'21px'}}></FontAwesomeIcon></td>
                                
                            </tr>
                            )
                        }
            </tbody>
        </table>
    </div>
            
        </div>
    );
};

export default ManagesItem;