import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import './Additem.css'
import auth from '../../firebase.init'
import { useNavigate } from "react-router-dom";
import PageTittle from "../PageTittle/PageTittle";
import axios from "axios";
const AddItem = () => {
    const navigate =useNavigate()
    const [user] = useAuthState(auth);
    console.log(user.email)
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        const formdata = data
        console.log(formdata)
        const sendData = async () => {
            const { data } = await axios.post(`https://assignment-11-server.herokuapp.com/product?email=${user?.email}`, formdata, {
                headers: {
                    authorization: `Barer ${localStorage.getItem('token')}`
                }
            });
            console.log(data)
        }
        sendData()
        reset()
        navigate('/managesitem')
    };
  
    return (
        <div className='minheights'>
           
            <form onSubmit={handleSubmit(onSubmit)} className='w-full  md:w-2/4 mx-auto  '>
            <div className="bg-white px-10 py-5 rounded ">
            <div>
            <input  className='w-full h-8 input' placeholder='Item Name' {...register("name")} required/>
          </div>
            <div>
            <input value={user?.email} className='w-full h-8 input' {...register("email")} readOnly/>
            </div>
            <div>
            <input value={user?.displayName||'Not Found Name'} className='w-full h-8 input' {...register("Suplier")} readOnly/>
            </div>
           
                <div>
            <input  className='w-full h-8 input' placeholder='Quentity' {...register("quantity")} required/>
          </div>
            <div>
            <input  className='w-full h-8 input' placeholder='Images Url' {...register("picture")} required/>
          </div>
            <div>
            <input  className='w-full h-8 input' placeholder='Price' {...register("price")} required/>
                </div>
                <div>
            <textarea placeholder="discription"  className='w-full h-8 input' {...register("discription")} type=''/>
                </div>
        
       
        
                <div className="text-center">
                <input className='px-4 py-2 mt-3 bg-black rounded text-white' type="submit" value='Add Item' />
                    </div>
                    </div>
            </form>
            <PageTittle location="Men's Perfume - AddItem"></PageTittle>
            </div>
       
    );
  
};

export default AddItem;