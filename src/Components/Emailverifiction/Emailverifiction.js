import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Emailverifiction = () => {
    const [sendEmailVerification] = useSendEmailVerification(auth);
    return (
        <div className='flex justify-center items-center' style={{minHeight:'100vh'}}>
            <div className='rounded shadow-lg border w-2/4 h-2/4 py-10'>
                <p className='text-center text-red-700'>Hello</p>
                <h2 className='text-center text-2xl text-red-700 font-bold mb-3'>Your Email is Not Verify</h2>
                <div className='text-center'>
                <button className='bg-white py-2 px-2 rounded' onClick={async () => {
          await sendEmailVerification();
          toast.success('Sent email');
        }}>Send Verification</button>
                </div>
            </div>
        </div>
    );
};

export default Emailverifiction;