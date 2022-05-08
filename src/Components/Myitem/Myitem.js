import axios from 'axios';
import React, { useEffect} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {signOut } from 'firebase/auth';
import PageTittle from '../PageTittle/PageTittle';
import { useNavigate } from 'react-router-dom';
import Myitemchild from './Myitemchild';
// import Swal from 'sweetalert2';
import useDeleteProduct from '../../hooks/useDeleteProduct';
const Myitem = () => {
    const [items, setItems, deleteProduct] = useDeleteProduct([]);
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
    },[user,navigate,items,setItems])
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