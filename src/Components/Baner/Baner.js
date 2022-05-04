import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//external css
import './Baner.css'
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import banerImg from '../../Images/banner10.jpg'
import banerImg2 from '../../Images/banner2.jpg'
import banerImg3 from '../../Images/banner3.jpg'
const Baner = () => {
    return (
        <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
                <SwiperSlide className='swiper-slide'>
                    <img src={banerImg} alt=""/>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
          <img src={banerImg2} alt="" className='w-full swiper-slide'/>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
          <img src={banerImg3} alt="" className='w-full '/>
          </SwiperSlide>
          
        </Swiper>
      </>
    );
};

export default Baner;