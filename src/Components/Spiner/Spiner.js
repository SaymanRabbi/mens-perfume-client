import React from 'react';
import { Oval } from 'react-loader-spinner';

const Spiner = () => {
    return (
        <div className='w-full flex justify-center items-center' style={{minHeight:'100vh'}}>
            <Oval color="#00BFFF" height={80} width={80} />
        </div>
    );
};

export default Spiner;