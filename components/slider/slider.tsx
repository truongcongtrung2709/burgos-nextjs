import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { clientsAboutUs } from '@/_mock/_clients-about-us-slide';
const slider = () => {
  return (
    <Swiper navigation={true} autoplay={true}  loop={true} modules={[Pagination]} className='mySwiper mb-[22px]'>
            <div className="swiper-wrapper">
              {clientsAboutUs.map((client,index) => (
                <SwiperSlide key={index} className='swiper-slide min-h-[50px] mx-[0%] my-0 p-[5%]'>
              <div className="item px-5 py-[30px] border-l-[6px] border-l-yellow border-solid">
                <p className='text-black-navy block'>{client.comment}</p>
                <cite className='block text-[15px] italic font-extrabold text-black-navy font-lato'></cite>
              </div>
              </SwiperSlide>
              ))}
            </div>
        </Swiper>
  )
}

export default slider