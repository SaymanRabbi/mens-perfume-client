import React, { useEffect, useState} from 'react';
import './Login.css'
import auth from '../../firebase.init'
import { useSignInWithEmailAndPassword,useSendPasswordResetEmail} from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import Useicon from '../Useicon/Useicon';
//   import { faCoffee } from '@fortawesome'
const Login = () => {
    const navigate = useNavigate()
    //showpass;
    const [showpass, setShowpass] = useState(false);
    const [email,setEmail] =useState('')
    
    const [
        signInWithEmailAndPassword,
        user,
        ,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    //google signin
    useEffect(() => {
        if (user) {
            navigate('/')
            toast.success('Login Sucessfully', { id: '02' })
        }
    }, [user,navigate])
    //psswordreset
    const [sendPasswordResetEmail,, passerror] = useSendPasswordResetEmail(
        auth
    );
    
    //error check
    useEffect(() => {
        if (error?.message.includes('auth/wrong-password')) {
            toast.error('InvalidEmail/Password')
        }
        if (passerror?.message.includes('auth/missing-email')) {
            toast.error('Invelid Email')
        }
    }, [error?.message,passerror?.message])

    const handelsubmit = (event) => {
        event.preventDefault()
        const password = event.target.password.value;
        
        signInWithEmailAndPassword(email, password)
        event.target.reset()
    }
    //reset pass
    const resetPass = () => {
        
        sendPasswordResetEmail(email)
    }
    return (
        <div>
            <div className='login-form'>
                <form onSubmit={handelsubmit} className='w-2/4 mt-5 mb-5 md:px-20 px-3 py-5 shadow-md bg-white rounded'>
                    <h2 className='text-center mb-10'><span className='text-3xl login-title'>Login</span></h2>
                    <div className='input-group'>
                        
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} name='email' className='w-full h-10 custom mt-2 mb-6' placeholder='Email' required/>
                    </div>
                    <div className='input-group showpass-container'>
                        
                        <input type={showpass?"text":"password"} name='password' className='w-full h-10 custom mt-2 mb-4 ' placeholder='Password' />
                        <FontAwesomeIcon className='showpass-child' onClick={()=>setShowpass(!showpass)} icon={showpass?faEye:faEyeSlash}></FontAwesomeIcon>
                    </div>
                    <p className='mb-2 text-red-500' > <span className='cursor-pointer' onClick={resetPass}>Forget Password!?</span> </p>
                    <div className='input-group'>
                        
                        <input type="submit" className='w-3/4  block mx-auto cursor-pointer h-12 bg-red-400 mt-4 mb-3 rounded text-white  font-bold' value='Login'/>
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
                    <h2 className='text-center mt-4 mb-4 text-red-800 font-semibold'>Don't Have A Account? <Link to='/register'><span className='cursor-pointer'>Register</span></Link>  </h2>
                    
                </form>
           </div>
        </div>
    );
};

export default Login;