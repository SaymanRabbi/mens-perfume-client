import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import './Additem.css'
import auth from '../../firebase.init'
import { useNavigate } from "react-router-dom";
import PageTittle from "../PageTittle/PageTittle";
const AddItem = () => {
    const navigate =useNavigate()
    const [user] = useAuthState(auth);
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then(res => res.json()).then(data => console.log(data))
        reset()
        navigate('/managesitem')
    };
  
    return (
        <div className='minheights px-3' style={{ minHeight: '100vh' }}>
            <PageTittle location="Men's Perfume AddItem"></PageTittle>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-2/4 mx-auto mt-6 rounded bg-white px-10 py-5'>
            
            <div>
            <input  className='w-full h-8 input' placeholder='Item Name' {...register("name")} required/>
          </div>
            <div>
            <input value={user?.email} className='w-full h-8 input' {...register("email")} readOnly/>
            </div>
            <div>
            <input value={user?.displayName} className='w-full h-8 input' {...register("Suplier")} readOnly/>
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
                <input className='px-4 py-2 bg-black rounded text-white' type="submit" value='Add Item' />
       </div>
      </form>
            </div>
       
    );
  
};

export default AddItem;