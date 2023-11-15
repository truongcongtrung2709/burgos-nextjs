'use client'
import {motion} from "framer-motion"
import Image from "next/image"
const Instruction = () => {
  return (
    <>
    <section className="relative overflow-hidden mt-0 mb-[12px] text-center" >
        <div className="elemental-container">
          <motion.div
          initial={{ opacity: 1,y:-60 }}
          whileInView={{ opacity: 1,y:0 }}
          viewport={{ once: true }}
            transition={{duration:0.5, delay:0.25}}
           className="w-full  relative min-h-[1px] flex">
            <div className="p-[10px] flex relative w-full flex-wrap content-start">
              <div className="w-full relative" >
                <div className="">
                  <h3 className="main-title mb-0 text-[44px] font-extrabold leading-[56px] text-black-navy uppercase">How it works</h3>     
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="mt-[24px] mb-[40px] relative xl:mt-0 xl:mb-[65px]">
        <div className="elemental-container ">
          <div className="w-full  relative min-h-[1px] flex " >
            <div className="px-0 py-[10px] flex relative w-full flex-wrap content-start">
              <section className="relative w-full" >
                <div className="elemental-container ">
                  <motion.div
                  initial={{ opacity: 0,x:-100 }}
                  whileInView={{ opacity: 1,x:0 }}
                  viewport={{ once: true }}
                    transition={{duration:0.5, delay:0.25}}
                  className="relative min-h-[1px] flex w-full md:w-[33.333%] " >
                    <div className="flex mx-0 mt-0 mb-[24px] md:mb-[10px] xl:mb-0 relative w-full flex-wrap content-start">
                      <div className="w-full relative">
                        <div className="">
                          <div className="circle-box1 text-center max-w-[300px] mx-auto my-0 ">
                            <div className="circle-image mx-auto mt-0 mb-[24px] bg-instruction rounded-[500px]">
                              <Image alt="" width={280} height={275} className='hover:-translate-y-4 transition-all hover:transition-all h-auto max-w-full rounded-none shadow-none border-0' src="/assets/images/intruction1.webp" /> 
                            </div> 
                            <div className="circle-text max-w-[220px] mx-auto my-0">
                              <h3 className='text-3xl font-extrabold leading-[38px] text-black-navy'>Select your food</h3>
                              <p className='mx-auto max-w-[250px]'>Lorem ipsum dolor sit ametlorem ipsum dolor sit amet</p> 
                            </div> 
                          </div>   
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                   initial={{ opacity: 0,y:100 }}
                   whileInView={{ opacity:1, y:0 }}
                   viewport={{ once: true }}
                     transition={{duration:0.5, delay:0.25}}
                  className="relative min-h-[1px] flex w-full md:w-[33.333%] " >
                    <div className="mx-0 mt-0 mb-[24px] md:mb-0 px-[10px] flex relative w-full flex-wrap content-start xl:p-0 ">
                      <div className="relative w-full">
                        <div className="">
                          <div className="circle-box1 text-center max-w-[300px] mx-auto my-0">
                            <div className="flex flex-wrap m-0 p-0">
                              <div className="circle-text order-12 flex-[0_0_100%w] max-w-[220px] mx-auto my-0">
                                <h3 className='text-3xl font-extrabold leading-[38px] text-black-navy'>Pay with card or cash</h3>
                                <p className='mx-auto max-w-[250px]'>Quisque nec libero dictum commodo. Nam ac felis id libero</p> 
                              </div> 
                              <div className="circle-image mx-auto mt-0 mb-[24px] bg-instruction rounded-[500px] order-1 md:order-12 flex-[0_0_100%] max-w-full relative w-full pr-[15px] pl-[15px]">
                                <Image alt="" width={270} height={270} className='hover:-translate-y-4 transition-all hover:transition-all h-auto max-w-full rounded-none shadow-none border-0' src="/assets/images/intruction2.webp" /> 
                              </div> 
                            </div>   
                          </div>   
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                  initial={{ opacity: 0,x:100 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once: true }}
                    transition={{duration:0.5, delay:0.25}}
                  className="relative min-h-[1px] flex w-full md:w-[33.333%]" >
                    <div className="flex mx-[10px] py-0 xl:p-0  relative w-full flex-wrap content-start">
                      <div className="relative w-full" >
                        <div className="">
                          <div className="circle-box1 text-center max-w-[300px] mx-auto my-0">
                            <div className="circle-image mx-auto mt-0 mb-[24px] bg-instruction rounded-[500px]">
                              <Image alt="" width={300} height={300} className='hover:-translate-y-4 transition-all hover:transition-all  h-auto max-w-full rounded-none shadow-none border-0' src="/assets/images/intruction3.webp" /> 
                            </div> 
                            <div className="circle-text max-w-[220px] mx-auto my-0">
                              <h3 className='text-3xl font-extrabold leading-[38px] text-black-navy'>Pickup or delivery</h3>
                              <p className='mx-auto max-w-[250px]'>Lorem ipsum dolor sit ametlorem ipsum dolor sit amet</p> 
                            </div> 
                          </div>   
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Instruction