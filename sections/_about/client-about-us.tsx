
'use client'
import Slider from '@/components/slider/slider';

import {motion} from "framer-motion"
const ClientsAboutUs = () => {

  return (
    <section className='overflow-hidden mt-20 mb-[60px] pl-3 pr-0 py-0 md:mt-[70px] md:mb-[60px] md:pl-2.5 md:pr-0 md:py-0 xl:mt-[190px] xl:mb-0'>
      <div className="elemental-container">
        <motion.div 
        initial={{ opacity: 0,x:0 }}
        whileInView={{ opacity: 1,x:0 }}
        viewport={{ once: true }}
          transition={{duration:0.5, delay:0.25}}
        className="ClientsAboutUs__content1  w-full md:w-[39.737%]">
          <div className="ClientsAboutUs__wrapper flex flex-wrap w-full content-center items-center mt-0 mb-[46px] mx-0 md:pl-[3px] md:pr-10 md:pt-0 md:pb-2.5 xl:pl-2.5 xl:pr-10 xl:py-0">
            <div className='mb-5 w-full'>
              <h2 className='text-4xl leading-[1] md:text-[54px] font-extrabold uppercase'>Clients about us</h2>
            </div>
            <div className=' w-full -mt-5 mb-[50px] mx-0'>
              <p>Praesent eleifend tellus consectetur erat maximus aliquet. Quisque felis felis, porttitor sits</p>
            </div>
            <div className='w-full'>
              <a href="/products" className='custom-button1 px-[40px] py-5 lg:pt-[22px] lg:pb-5 lg:px-[50px]  uppercase'>go to shop</a>
            </div>

          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0,x:300 }}
        whileInView={{ opacity: 1,x:0 }}
        viewport={{ once: true }}
          transition={{duration:0.5, delay:0.25}}
        className="ClientsAboutUs__content2  w-full md:w-[60.263%]">
          <div className='ClientsAboutUs__wrapper  w-full content-center items-center  px-2.5 py-0 rounded-none border-solid border-white'>
          <Slider/>
      
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientsAboutUs