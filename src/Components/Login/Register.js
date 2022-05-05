import React, { useEffect, useState} from 'react';
import './Login.css'
import auth from '../../firebase.init'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Useicon from '../Useicon/Useicon';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import PageTittle from '../PageTittle/PageTittle';
import axios from 'axios';
import useToken from '../../hooks/useToken';
import register from '../../Images/logo.png'
//   import { faCoffee } from '@fortawesome'
const Register = () => {
    const [checked,setChecked]=useState(false)
    const navigate = useNavigate()
    //  createUserWithEmailAndPassword using firebase Hooks
    const [
        createUserWithEmailAndPassword,
        user,
        
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const [token]=useToken(user)
    useEffect(() => {
        if (token) {
            navigate('/')
            toast.success('Login Sucessfully', { id: '02' })
        }
    }, [token,navigate])
    //showpass;
    const [showpass, setShowpass] = useState(false);
    const [name, setName] = useState({
        value:"",error:""
      })
    const [email, setEmail] = useState({
        value:"",error:""
      })
      const [password, setPassword] = useState({
        value:"",error:""
      })
      const handelname = (Event) => {
        const nameValue = Event.target.value
        if (nameValue) {
          setName({value:nameValue,error:""})
        }
        else {
          setName({value:'',error:'Invalid Name'})
        }
       
      }
      const handelEmail = (Event) => {
        const emailValue = Event.target.value
        if (/\S+@\S+\.\S+/.test(emailValue)) {
          setEmail({value:emailValue,error:""})
        }
        else {
          setEmail({value:'',error:'Invalid Email Address'})
        }
       
      }
      const handelPass = (Event) => {
        const passValue = Event.target.value;
        if (/(?=.*[!@#$&*])/.test(passValue)) {
          setPassword({value:passValue,error:""})
        }
        else {
          setPassword({value:'',error:"PassWord Must Containt A Special Charecter"})
        }
      }
     
      const handelSignup = async(Event) => {
        Event.preventDefault()
        if (email.value === '') {
          setEmail({value:"",error:"Email Is Required"})
        }
        if (password.value === '') {
          setPassword({value:"",error:"Password Is Required"})
        }
        if (name.value === '') {
            setPassword({value:"",error:"Name Is Required"})
          }
          if (email.value && password.value && name.value) {
              console.log('inside')
           await createUserWithEmailAndPassword(email.value, password.value)
            await updateProfile({ displayName: name.value });
            const value = email.value
            const { data } = await axios.post('https://assignment-11-server.herokuapp.com/token', {value})
             localStorage.setItem('token',data.createToken)
          }
          else {
              toast.error('All Filed Required',{id:'009'})
          }
        
       
      }
    //reset pass
   
    return (
        <div style={{minHeight:'100vh'}}>
          <PageTittle location="Men's Perfume - Register"></PageTittle>
            <div className='login-form'>
                <form onSubmit={ handelSignup} className='w-3/4 md:w-2/4 mt-5 mb-5 md:px-20 px-3 py-5 shadow-md bg-white rounded'>
            <h2 className='mb-10 flex items-center justify-center'><span className='text-3xl login-title'>Register</span>
            <img src={register} alt="" />
            </h2>
                    <div className='input-group mt-2 mb-6'>
                        
                        <input type="text" onBlur={handelname} name='name' className='w-full h-10 custom ' placeholder='Your Name' required />
                        {name?.error && <p className='text-red-700 text-xl'>{name.error}</p>}
                    </div>
                    <div className='input-group mt-2 mb-6'>
                        
                        <input type="email" onBlur={handelEmail} name='email' className='w-full h-10 custom ' placeholder='Email' required />
                        {email?.error && <p className='text-red-700 text-xl'>{email.error}</p>}
                    </div>
                    <div className='input-group showpass-container mt-2 mb-6 '>
                        
                        <input type={showpass?"text":"password"} onBlur={handelPass}  name='password' className='w-full h-10 custom ' placeholder='Password' />
                        <FontAwesomeIcon className='showpass-child' onClick={() => setShowpass(!showpass)} icon={showpass ? faEye : faEyeSlash}></FontAwesomeIcon>
                        {password?.error && <p className='text-red-700 text-xl'>{password.error}</p>}
                    </div>
                    <div className='input-group mt-2 mb-6'>
                        <input type="checkbox" onChange={()=>setChecked(!checked)}/>
                        <label className={`ml-2 ${checked?'text-sky-700':''}`}>Accepet Terms And Condition?</label>
                    </div>
                    <div className='input-group mt-10 mb-8'>
                        
                        <input type="submit" disabled={!checked} className={`w-3/4  block mx-auto  h-12 ${!checked?'bg-slate-300':'bg-red-400 cursor-pointer' } rounded text-white  font-bold`} value='Register'/>
                    </div>
                    <div className='flex w-full items-center'>
                        <div className='or-left'>
                            
                        </div>
                        <p className='mx-3'>OR</p>
                        <div className='or-left'>

                        </div>
                    </div>
                    <div >
                       <Useicon></Useicon>
                    </div>
                    <h2 className='text-center mt-4 mb-4 text-red-800 font-semibold'>Allready Have Account? <Link to='/login'><span className='cursor-pointer'>Login</span></Link>  </h2>
                    
                </form>
           </div>
        </div>
    );
};

export default Register;