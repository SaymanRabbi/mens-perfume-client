import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {signOut } from 'firebase/auth';
import PageTittle from '../PageTittle/PageTittle';
import { useNavigate } from 'react-router-dom';
import Myitemchild from './Myitemchild';
import Swal from 'sweetalert2';
const Myitem = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
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
                const rest = items.filter(pd => pd._id !== id);
                setItems(rest)
            })
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
       
        
    }
    useEffect(() => {
        const getorders = async () => {
            try {
                const { data } = await axios.get(`https://assignment-11-server.herokuapp.com/myitem?result=${user?.email}`, {
                headers:{
                authorization:`Barer ${localStorage.getItem('token')}`
                }
            }) 
            setItems(data)
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getorders()
    },[user,navigate,items])
    return (
        <div className='mt-5 grid md:grid-cols-2 xl:grid-cols-3 gap-10 container mx-auto' style={
            { minHeight: '100vh' }}>
            
            {
                items.map(pd=><Myitemchild product={pd} key={pd._id} deleteProduct={deleteProduct}></Myitemchild>)
            }
            <PageTittle location="Men's Perfume - MyItem"></PageTittle>
        </div>
    );
};

export default Myitem;