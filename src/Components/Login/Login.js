import React, { useEffect, useRef, useState} from 'react';
import './Login.css'
import auth from '../../firebase.init'
import { useSignInWithEmailAndPassword,useSendPasswordResetEmail} from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import Useicon from '../Useicon/Useicon';
import PageTittle from '../PageTittle/PageTittle';
//   import { faCoffee } from '@fortawesome'
const Login = () => {
    let location = useLocation();
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    //showpass;
    const [showpass, setShowpass] = useState(false);
    const email =useRef('')
    const [emailValue,setEmailValue]=useState('')
    const [
        signInWithEmailAndPassword,
        user,
        ,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    //google signin
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
            toast.success('Login Sucessfully', { id: '02' })
        }
    }, [user,navigate,from])
    //psswordreset
    const [sendPasswordResetEmail,, passerror] = useSendPasswordResetEmail(
        auth
    );
    
    //error check
    useEffect( () => {
       
        if ((error)|| (passerror)) {
            toast.error((error?.message)?.slice(22, 36) || (passerror?.message)?.slice(22, 36))
        
        }  
        if (emailValue && !(error) && !(passerror)) {
            toast.success('SucessFully Send')
          
        }
}, [error, passerror,emailValue])
    const handelsubmit = (event) => {
        const emails = email.current.value
        
        event.preventDefault()
        const password = event.target.password.value;
        
        signInWithEmailAndPassword(emails, password)
        event.target.reset()
    }
    //reset pass
    const ResetPass = async() => {
        const emails = email.current.value
        await sendPasswordResetEmail(emails);
        setEmailValue(emails)
        
    }
    return (
        <div style={{ minHeight: '100vh' }}>
            <PageTittle location="Men's Perfume Login"></PageTittle>
            <div className='login-form'>
                <form onSubmit={handelsubmit} className='w-3/4 md:w-2/4 mt-5 mb-5 md:px-20 px-3 py-5 shadow-md bg-white rounded'>
                    <h2 className='text-center mb-10'><span className='text-3xl login-title'>Login</span></h2>
                    <div className='input-group'>
                        
                        <input type="email" ref={email} name='email' className='w-full h-10 custom mt-2 mb-6' placeholder='Email' required/>
                    </div>
                    <div className='input-group showpass-container'>
                        
                        <input type={showpass?"text":"password"} name='password' className='w-full h-10 custom mt-2 mb-4 ' placeholder='Password' required/>
                        <FontAwesomeIcon className='showpass-child' onClick={()=>setShowpass(!showpass)} icon={showpass?faEye:faEyeSlash}></FontAwesomeIcon>
                    </div>
                    <p className='mb-2 text-red-500' > <span className='cursor-pointer' onClick={ResetPass}>Forget Password!?</span> </p>
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