import React from 'react';
import img1 from '../../Images/icon-global.svg'
import img2 from '../../Images/icon-application.svg'
import img3 from '../../Images/icon-portfolio.svg'
import img4 from '../../Images/icon-sales.svg'
import img5 from '../../Images/icon-growth.svg'
const MakeDifferent = () => {
    return (
        <div className='my-14'>
            <h2 className='text-center text-3xl mb-8 font-bold text-white'>What Makes Us Different?</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 px-10 '>
                <div className='flex justify-center shadow-lg rounded'>
                    <div className='text-center py-4 text-white'>
                    <img src={img1} alt="" className='block mx-auto'/>
                    <h2 className='mt-4 font-bold text-xl'>Global supply chain</h2>
                    <h2>expertise built over</h2>
                    <p>decades in 100+</p>
                    <p>countries</p>
                    </div>
                </div>
                <div className='flex justify-center shadow-lg rounded'>
                    <div className='text-center py-4 text-white'>
                    <img src={img2} alt="" className='block mx-auto'/>
                    <h2 className='mt-4 font-bold text-xl'>Emerging markets</h2>
                    <h2>know-how and on-the-</h2>
                    <p>ground presence</p>
                    </div>
                </div>
                <div className='flex justify-center shadow-lg rounded'>
                    <div className='text-center py-4 text-white'>
                    <img src={img3} alt="" className='block mx-auto'/>
                    <h2 className='mt-4 font-bold text-xl'>High-value assets </h2>
                    <h2>high-growth markets &</h2>
                    <p>sectors</p>
                    </div>
                </div>
                <div className='flex justify-center shadow-lg rounded'>
                    <div className='text-center py-4 text-white'>
                    <img src={img4} alt="" className='block mx-auto'/>
                    <h2 className='mt-4 font-bold text-xl'>Digital DNA </h2>
                    <h2>growing portfolio of</h2>
                    <p>innovation investments</p>
                    
                    </div>
                </div>
                <div className='flex justify-center shadow-lg rounded'>
                    <div className='text-center py-4 text-white'>
                    <img src={img5} alt="" className='block mx-auto'/>
                    <h2 className='mt-4 font-bold text-xl'>Sustainability</h2>
                    <h2>commitment and</h2>
                    <p>leadership</p>
                
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeDifferent;