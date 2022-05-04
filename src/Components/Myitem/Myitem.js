import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Product from '../Products/Product';
const Myitem = () => {
    const [items, setItems] = useState([]);
    console.log(items)
    const [user] = useAuthState(auth);
    console.log(user?.email)
    useEffect(() => {
        fetch(`http://localhost:5000/myitem?result=${user?.email}`).then(res=>res.json()).then(data=>setItems(data))
    },[user])
    return (
        <div className='mt-5 grid md:grid-cols-3 gap-10 container mx-auto'style={{minHeight:'100vh'}}>
            {
                items.map(pd=><Product product={pd} key={pd._id}></Product>)
           }
        </div>
    );
};

export default Myitem;