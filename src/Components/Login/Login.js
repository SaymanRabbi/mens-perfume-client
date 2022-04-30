import React from 'react';
import './Login.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { google } from '@fortawesome/free-brands-svg-icons'

const Login = () => {
    return (
        <div>
            <div className='login-form'>
                <form action="" className='w-2/4 md:px-20 px-3 py-5 shadow-md bg-white rounded'>
                    <h2 className='text-center mb-10'><span className='text-3xl login-title'>Login</span></h2>
                    <div className='input-group'>
                        
                        <input type="email" className='w-full h-10 custom mt-2 mb-6' placeholder='Email' required/>
                    </div>
                    <div className='input-group'>
                        
                        <input type="password" className='w-full h-10 custom mt-2 mb-6' placeholder='Password'/>
                    </div>
                    <div className='input-group'>
                        
                        <input type="submit" className='w-2/4 block mx-auto cursor-pointer h-10 bg-red-400 mt-2 mb-3 rounded text-white  font-bold' value='Login'/>
                    </div>
                    <div className='flex w-full items-center'>
                        <div className='or-left'>
                            
                        </div>
                        <p className='mx-3'>OR</p>
                        <div className='or-left'>

                        </div>
                    </div>
                    <div className='w-full '>
                    {/* <FontAwesomeIcon icon={google} size="6x"/> */}
                    </div>
                </form>
           </div>
        </div>
    );
};

export default Login;