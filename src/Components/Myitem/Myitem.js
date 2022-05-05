import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {signOut } from 'firebase/auth';
import PageTittle from '../PageTittle/PageTittle';
import Product from '../Products/Product';
import { useNavigate } from 'react-router-dom';
const Myitem = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
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
    },[user,navigate])
    return (
        <div className='mt-5 grid md:grid-cols-2 xl:grid-cols-3 gap-10 container mx-auto' style={
            { minHeight: '100vh' }}>
            
            {
                items.map(pd=><Product product={pd} key={pd._id}></Product>)
            }
            <PageTittle location="Men's Perfume - MyItem"></PageTittle>
        </div>
    );
};

export default Myitem;