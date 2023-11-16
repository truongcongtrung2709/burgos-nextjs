'use client'
import {motion} from "framer-motion"
import Image from "next/image"
const AboutFastOrder = () => {
  return (
    <section style={{background:`url("/assets/images/bg-fastorder.webp")`}} className=' bg-[center_left] md:bg-[center_center] text-center md:text-start bg-no-repeat bg-cover bg-scroll mt-[46px]  mb-0 pt-24 pb-[70px] px-0 md:pt-[100px] md:pb-[72px] xl:mt-[110px] xl:mb-[120px] xl:pt-[72px] xl:pb-[92px] overflow-hidden'>
      <div className="elemental-container">
        <motion.div
        initial={{ opacity: 0,x:-300 }}
        whileInView={{ opacity: 1,x:0 }}
        viewport={{ once: true }}
          transition={{duration:0.5, delay:0.25}}
        className="fastOrder-text md:order-10 xl:order-9 md:w-[70%] xl:w-[46.751%] flex relative">
          <div className="fastOrder-text__content flex flex-wrap w-full content-center items-center pt-0 pb-9 px-2.5 xl:px-2.5 xl:py-0">
            <div className="title mb-5 w-full">
              <h2 className='text-4xl font-extrabold uppercase md:text-[55px] font-nunito text-white leading-[1]'>ORDER AND PAY IN A FEW MINUTES</h2>
            </div>
            <div className="description mb-5 w-full">
              <span className='text-gray'>Praesent id congue justo. Donec vehicula odio id libero lobortis viverra. In rhoncus ac sem quis mollis. Vestibulum lacinia tellus posuere purus rutrum lobortis. Integer ut enim sed nunc malesuada suscipit. </span>
            </div>
            <div className="downloads w-full">
              <div className="elemental-container">
                <div className="downloads__content1 w-full xl:w-[46.847%] flex justify-center md:justify-start mt-0 mb-2.5 mx-0 xl:m-0 px-0 py-2.5">
                <a href="/" className='custom-button-app1 flex flex-wrap m-0 p-0 items-center'>
                  <div className="img-btn p-0 flex-[0_0_auto] max-w-full w-auto">
                    <Image width={36} height={30} src="/assets/images/icons/blk-apple.png" className='pr-[6px]' alt="" />
                  </div>
                  <div className='text-btn basis-0 grow min-w-0 max-w-full p-0'>
                    <span className='small-text'>Download on the</span>
                    <span className='big-text'>App Store</span>
                  </div>
                </a>
                </div>
                <div className="downloads__content2 w-full xl:w-[53.15%] px-0 py-2.5 flex justify-center md:justify-start mt-0 mb-2.5 mx-0 xl:m-0">
                <a href="/" className='custom-button-app2 flex flex-wrap m-0 p-0 items-center'>
                  <div className="img-btn p-0 flex-[0_0_auto] max-w-full w-auto">
                    <Image width={40} height={34} src="/assets/images/icons/gg-store.webp" className='pr-[6px]' alt="" />
                  </div>
                  <div className='text-btn basis-0 grow min-w-0 max-w-full p-0'>
                    <span className='small-text'>Download on the</span>
                    <span className='big-text'>Google Play</span>
                  </div>

                </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0,x:300 }}
        whileInView={{ opacity: 1,x:0 }}
        viewport={{ once: true }}
          transition={{duration:0.5, delay:0.25}}
        className="fastOrder-img  md:order-9 xl:order-10 relative hidden md:block md:w-[30%] xl:w-[53.031%]">
          <div className="fastOrder-img__wrapper flex flex-wrap w-full content-center items-center ml-0 mr-2.5 mt-[50px] mb-6  md:mr-[15px] md:my-0 xl:mb-[-110px] xl:mt-0 xl:mx-[15px] text-right">
            <Image src="/assets/images/fast-order-burger.webp" alt="" width="580" height="630" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutFastOrder