import React, { useEffect, useState} from 'react';
import './Login.css'
import auth from '../../firebase.init'
import { useSignInWithGoogle,useSignInWithGithub, useSignInWithFacebook, useSignInWithEmailAndPassword,useSendPasswordResetEmail} from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle,faFacebook,faGithub} from '@fortawesome/free-brands-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
//   import { faCoffee } from '@fortawesome'
const Login = () => {
    const [email,setEmail] =useState('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        ,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    //google signin
    const [signInWithGoogle, Gooleuser] = useSignInWithGoogle(auth);
    // githubsignin
    const [signInWithGithub, Githubuser] = useSignInWithGithub(auth);
    //facebooksignin
    const [signInWithFacebook, Facebookuser] = useSignInWithFacebook(auth);
    //psswordreset
    const [sendPasswordResetEmail,, passerror] = useSendPasswordResetEmail(
        auth
    );
    useEffect(() => {
        if (Gooleuser || Githubuser || Facebookuser || user) {
            navigate('/')
            toast.success('Login Sucessfully', { id: '02' })
        }
    }, [navigate, Gooleuser, Githubuser, Facebookuser, user])
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
    //GoogleSign in
    const signinGoogle = () => {
        signInWithGoogle();
    }
     //GithubSignin
    const signinGithub = () => {
        signInWithGithub();
    }
     //FacebookSignin
    const facebooklogin = () => {
        signInWithFacebook()
    }
    //reset pass
    const resetPass = () => {
        
        sendPasswordResetEmail(email)
    }
    return (
        <div>
            <div className='login-form'>
                <form onSubmit={handelsubmit} className='w-2/4 md:px-20 px-3 py-5 shadow-md bg-white rounded'>
                    <h2 className='text-center mb-10'><span className='text-3xl login-title'>Login</span></h2>
                    <div className='input-group'>
                        
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} name='email' className='w-full h-10 custom mt-2 mb-6' placeholder='Email' required/>
                    </div>
                    <div className='input-group'>
                        
                        <input type="password" name='password' className='w-full h-10 custom mt-2 mb-4' placeholder='Password'/>
                    </div>
                    <p className='mb-2 text-red-500' > <span className='cursor-pointer' onClick={resetPass}>Forget Password!?</span> </p>
                    <div className='input-group'>
                        
                        <input type="submit" className='w-3/4 block mx-auto cursor-pointer h-10 bg-red-400 mt-4 mb-3 rounded text-white  font-bold' value='Login'/>
                    </div>
                    <div className='flex w-full items-center'>
                        <div className='or-left'>
                            
                        </div>
                        <p className='mx-3'>OR</p>
                        <div className='or-left'>

                        </div>
                    </div>
                    <div className='w-2/4 mx-auto mt-6 flex gap-4 justify-center items-center'>
                        
                        <div onClick={signinGoogle} className='w-10 h-10 icon-style google text-red-700'><FontAwesomeIcon icon={faGoogle}size="2x" /></div>
                        <div onClick={facebooklogin} className='w-10 h-10 icon-style text-cyan-400 facebook'><FontAwesomeIcon icon={faFacebook} size="2x" /></div>
                        <div onClick={signinGithub} className='w-10 h-10 icon-style text-dark github'><FontAwesomeIcon icon={faGithub}size="2x" /></div>
                        {/* <FontAwesomeIcon icon={google} /> */}
                       
                    </div>
                    <h2 className='text-center mt-4 mb-4 text-red-800 font-semibold'>Don't Have A Account? <Link to='/register'><span className='cursor-pointer'>Register</span></Link>  </h2>
                    
                </form>
           </div>
        </div>
    );
};

export default Login;