import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import PageTittle from '../PageTittle/PageTittle';
import axios from 'axios';
const ManagesItem = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [active,setActive] = useState(0)
    useEffect(() => {
        fetch('https://assignment-11-server.herokuapp.com/productCount').then(res => res.json()).then(data => {
            const count = data.result;
            const pages = Math.ceil(count / 6)
            setPageCount(pages)
        })
    },[])
    useEffect(() => {
        const getProductData = async () => {
            const { data } = await axios.get(`https://assignment-11-server.herokuapp.com/product?page=${active}&size=${6}`)
            setProducts(data);
        }
        getProductData();
        // console.log(products)
    }, [active])
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
                fetch(`https://assignment-11-server.herokuapp.com/product/${id}`, {
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
        <div   style={{ minHeight: '100vh' }}>
            <PageTittle location="Men's Perfume - ManagesItem"></PageTittle>
            <h1 className='text-center text-3xl font-bold mt-5 mb-4 text-white'>Manages Inventory</h1>
          
        <div className="table w-full p-2">
        <table className="w-full border">
            <thead>
                <tr className="bg-gray-50 border">
                    <th className="border-r p-2 text-left">
                       Name
                    </th>
                    <th className=" border-r text-left">
                    Price
                    </th>
                    <th className=" border-r text-left">
                    Suplier
                    </th>
                    <th className=" border-r text-left">
                    Quantity
                    </th>
                    <th className=" border-r text-left">
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
                                    <Link to={`/updatepd/${data._id}`}>
                                    
                                    <button className='mr-3 px-2 py-1 text-black rounded bg-white'>Update</button></Link>
                                    {/*  */}
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
            <div className='w-2/4 mx-auto text-center my-5'>
                {
                    [...Array(pageCount).keys()].map(num => <button key={num} className={`bg-white px-5 mx-2 py-1 rounded cursor-pointer text-xl font-bold ${active===num?'bg-blue-500 text-white':""}`} onClick={()=>setActive(num)}>{num}</button>)
                }
            </div>
        </div>
    );
};

export default ManagesItem;