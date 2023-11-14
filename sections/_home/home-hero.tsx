"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import {motion} from "framer-motion"
import Image from 'next/image'
const HomeHero = () => {
  return (
    <div className='relative block overflow-hidden h-full md:h-[1100px] mb-[95px] md:mb-[27px] xl:mb-[110px]'>
    <div className="hero h-[800px] md:h-[960px] relative bg-radient-radial w-full"></div>
    <div className=" hero-bg bg-hero-pattern absolute bottom-0 top-auto w-full max-w-full left-0 h-auto text-white md:top-[250px] md:h-[850px] md:left-1/2 lg:left-[51%] 2xl:left-[50.8%] 3xl:left-[50.7%] 3xl:top-[200px] 3xl:max-w-[540px]  ">
      <motion.div  
    initial={{ opacity: 0,x:300 }}
  whileInView={{ opacity: 1,x:0 }}
  viewport={{ once: true }}
    transition={{duration:0.5, delay:0.25}}
      className="hero-bg-text relative pt-12 pb-6 px-3 md:absolute md:bottom-0 md:pb-10 md:pl-[38px] md:pr-0 md:pt-0 overflow-hidden">
        <h2 className='mb-0 font-semibold text-[18px] leading-[27.28px] text-white'>CALL US:</h2>
        <h3 className='font-extrabold text-white text-3xl 3xs:text-4xl leading-[60px]'>+123 4567 8905</h3>
      </motion.div>
    </div>
    <motion.div 
    initial={{ opacity: 0,x:300 }}
  whileInView={{ opacity: 1,x:0 }}
  viewport={{ once: true }}
    transition={{duration:0.5, delay:0.25}}
    
    className="hero-img  absolute z-[1] top-1/2 w-full 2xs:top-[40%] 2xs:w-full md:top-0 md:w-full">
      <Image width={900} height={917} className=' mt-0 ml-[50%] max-w-[300px]  2xs:max-w-[400px] md:mt-[102px] md:ml-[45%] md:max-w-[900px]' src="/assets/images/banner-burger.webp" alt="" />
    </motion.div>
      <motion.div  initial={{ opacity: 0,x:-300 }}
    whileInView={{ opacity: 1,x:0 }}
    viewport={{ once: true }}
      transition={{duration:0.5, delay:0.25}}
    className="hero-text  absolute z-[1] top-0 w-full ">
      <div className="container p-0">
        <div className="flex flex-wrap">
          <div className='relative w-full  mt-[70px] text-white md:mt-[280px] basis-0 flex-grow min-w-0 max-w-full'>
      <h2 className=' items-center text-[24px] leading-[30px] font-bold md:leading-[35px] mb-3 lg:text-2xl lg:leading-[38px] text-yellow'>
        <i className=' pr-[12px] text-[20px] font-[900] '><FontAwesomeIcon icon={faClock} /></i> 
         FROM 11 AM TO 12 PM
      </h2>
      <h1 className='text-6xl leading-[1] md:text-[80px] lg:text-[120px] mb-0 font-[900] ml-[-5px] text-white'>BEST</h1>
      <h2 className='text-6xl leading-[1] md:text-[80px] lg:text-[120px] font-[900] ml-[-5px] mb-3 text-white'>BURGERS</h2>
      <p className='text-gray max-w-full sm:max-w-[47%] sm:text-[17px] lg:text-[22px] pt-0 leading-[37px] mb-9'>Quisque nec libero ut sapien dictum commodo. Nam ac felis id libero rutrum pharetra eu non lacus.</p>
      <a href="/" className='custom-button1 py-5 px-10 lg:pt-[22px] lg:pr-[50px] lg:pb-[20px] lg:pl-[50px]'>Buy Now</a>
      <a href="/" className='hidden md:block bg-white max-w-[337px] ml-[139px] lg:mt-[104px] md:mt-20 shadow-none no-underline'>
        <div className='items-center flex'>
          <div className='max-w-full px-4'>
            <Image width={190} height={190} className='mt-[-35px] ml-[-155px] mb-[-2px] max-w-[190px]' src="/assets/images/delivery.webp" alt="" />
          </div>
          <div className='px-4'>
            <h3 className='mt-6 mb-0 text-2xl leading-[34px] text-orange font-black'>FREE DELIVERY</h3>
            <p className='text-text w-full font-bold text-sm pt-1 mb-5'>Order what you want and choose pickup time</p>
          </div>
        </div>
      </a>
    </div>
    </div>
    </div>
    </motion.div>
    </div>
  )
}

export default HomeHero