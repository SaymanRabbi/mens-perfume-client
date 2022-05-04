import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import PageTittle from '../PageTittle/PageTittle';
const ManagesItem = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/product?location=manages`).then(res => res.json()).then(data=>setProducts(data))
    }, [])
    const deleteProduct = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
              if (result.isConfirmed) {
                fetch(`http://localhost:5000/product/${id}`, {
                method:'DELETE'
            }).then(res => res.json()).then(data => {
                const rest = products.filter(pd => pd._id !== id);
                setProducts(rest)
            })
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
       
        
    }
    return (
        <div className='px-10' style={{ minHeight: '100vh' }}>
            <PageTittle location="Men's Perfume ManagesItem"></PageTittle>
            <h1 className='text-center text-3xl font-bold mt-5 mb-4 text-white'>Manages Inventory</h1>
          
        <div className="table w-full p-2">
        <table className="w-full border">
            <thead>
                <tr className="bg-gray-50 border">
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
                            products.map((data, index) => <tr key={index}    style={{border:'1px solid white'}}>
                                <td className='text-white py-3 border-r-2'>{data?.name}</td>
                                <td className='text-white border-r-2'>{data?.price}</td>
                                <td className='text-white border-r-2'>{data?.Suplier}</td>
                                <td className='text-white border-r-2'>{data?.quantity}</td>
                                <td className='text-white flex justify-center mt-2 items-center'>
                                    <button className='mr-3 px-2 py-1 text-black rounded bg-white'>Update</button>
                                    <FontAwesomeIcon onClick={() => deleteProduct(data._id)} icon={faTrash} className='text-red-600 cursor-pointer' style={{ width: '25px', height: '25px' }}></FontAwesomeIcon></td>
                                
                            </tr>
                            )
                        }
            </tbody>
        </table>
    </div>
            <div className='text-center mt-3'>
                <Link to='/addItem'>
                <button className='bg-white text-black px-3 py-2 font-semibold rounded'>Add New item</button>
                </Link>
           </div>
        </div>
    );
};

export default ManagesItem;