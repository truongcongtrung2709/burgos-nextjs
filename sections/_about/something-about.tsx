'use client'
import {motion} from "framer-motion"
import Image from "next/image"
const Introduce = () => {
  return (
    <section className='my-24 md:mt-20 md:mb-[70px] xl:mt-[120px] xl:mb-[210px] md:p-0 overflow-hidden w-full'>
      <div className="elemental-container">
        <div className="introduce-content content-center items-center mx-[10px] flex flex-wrap py-0  px-5 md:py-0 md:pl-[5px] md:pr-0 w-full">
          <motion.div
          initial={{ opacity: 0,x:-100 }}
          whileInView={{ opacity: 1,x:0 }}
          viewport={{ once: true }}
            transition={{duration:0.5, delay:0.25}}
          className='first-img w-[60%] md:w-[25.268%]  flex'>
            <Image width={580} height={870} src="/assets/images/introduce-img-1.webp" className='inline-block align-middle' alt="" />
          </motion.div>
          <motion.div
          initial={{ opacity: 0,x:-100 }}
          whileInView={{ opacity: 1,x:0 }}
          viewport={{ once: true }}
            transition={{duration:0.5, delay:0.25}}
          className='second-img w-[40%] md:w-[23.125%]  py-0 pl-[18px] pr-0 md:pr-[32px] md:my-0 md:pl-[20px] content-center items-center'>
            <div className='mb-5 text-center w-full'>
              <Image width={280} height={450}  src="/assets/images/introduce-img-2.webp" alt="" />
            </div>
            <div className='text-center w-full '>
              <Image src="/assets/images/introduce-img-3.webp" alt="" width={280} height={300}/>
            </div>
          
          </motion.div>
          <motion.div 
          initial={{ opacity: 0,x:100 }}
          whileInView={{ opacity: 1,x:0 }}
          viewport={{ once: true }}
            transition={{duration:0.5, delay:0.25}}
          className="right-content w-full md:w-[51.271%] content-center items-center mt-[24px] mx-0 mb-0 p-0 md:py-0 md:pr-0 md:pl-[25px] ">
            <div className='title mb-5 w-full'>
              <h2 className='text-[44px] md:text-[54px] font-extrabold uppercase'>Something about Burgos</h2>
            </div>
            <div className='description w-full mb-[38px]'>
              <p className='text-dark-gray'>Etiam blandit, orci id malesuada sollicitudin, felis ligula ornare enim, ac consectetur dui nunc ut eros. Quisque ut nunc ex. Mauris scelerisque lobortis urna, in tempus urna hendrerit non.</p>
              <p className='font-semibold text-[#333333] mt-5'>Sed feugiat justo at laoreet convallis. Maecenas ac aliquam turpis. Ut aliquet leo ut gravida auctor.</p>
            </div>
            <div className='quality mb-[26px] flex flex-wrap '>
              <div className='fresh p-0 m-0 w-full relative lg:flex-[0_0_50%] lg:max-w-[50%] flex flex-wrap items-center'>
                <div className='fresh__img p-0 flex-[0_0_auto] max-w-full'>
                  <Image width={88} height={88} className='pt-[5px] pr-5 pb-5 pl-0' src="/assets/images/icons/meat.svg" alt="" />
                </div>
                <div className='flex-max-w p-0'>
                  <h5 className='font-bold text-lg leading-[28px] pt-0 mb-[12px]'>Always Fresh Products</h5>
                </div>
              </div>
              <div className='delivery p-0  w-full relative lg:flex-[0_0_50%] lg:max-w-[50%] flex flex-wrap items-center'>
              <div className='delivery__img p-0 flex-[0_0_auto] max-w-full'>
                  <Image width={88} height={88} className='pt-[5px] pr-5 pb-5 pl-0' src="/assets/images/icons/deli-clock.svg" alt="" />
                </div>
                <div className='flex-max-w p-0'>
                  <h5 className='font-bold text-lg leading-[28px] pt-0 mb-[12px]'>Fast & Free Delivery</h5>
                </div>
              </div>
            </div>
            <div className='buttonToShop w-full '>
              <a href="/products" className='custom-button1 pt-[22px] pb-5 px-[50px]'>go to shop</a>
            </div>
          </motion.div>

        <div></div>
        </div>
      </div>
    </section>
  )
}

export default Introduce