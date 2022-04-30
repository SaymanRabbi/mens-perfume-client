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
import banerImg from '../../Images/cover_1440_1200.jpeg'
import banerImg2 from '../../Images/Versace-Flame-Banner.jpeg'
import banerImg3 from '../../Images/TOP_BANNER_LP_THE_SCENT_PARFUM_blackbackground3.png'
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
                <SwiperSlide className='w-3/4 mx-auto'>
                    <img src={banerImg} alt="" style={{maxWidth:'102%'}}/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={banerImg2} alt="" className='w-full'/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={banerImg3} alt="" className='w-full'/>
          </SwiperSlide>
          
        </Swiper>
      </>
    );
};

export default Baner;