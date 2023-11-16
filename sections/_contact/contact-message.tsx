'use client'
import {motion} from "framer-motion"
import Image from "next/image"
const ContactMessage = () => {
  return (
    <section className='overflow-hidden p-0 mt-0 mb-[96px] md:mb-[70px] md:px-[10px] md:py-0 xl:mb-[120px]'>
      <div className="elemental-container">
        <motion.div 
        initial={{ opacity: 0,x:-300 }}
        whileInView={{ opacity: 1,x:0 }}
        viewport={{ once: true }}
          transition={{duration:0.5, delay:0.25}}
        className='message  order-10 xl:order-9 w-full md:w-[50%] xl:w-[63.01%]'>
          <div className="message__wrapper flex flex-wrap w-full px-5 py-0 md:pb-0 md:pt-[10px] md:px-[10px] xl:pl-0 xl:pr-[50px] xl:py-0">
            <div className="title mb-5 ">
              <h3 className='font-bold'>SEND US MESSAGE</h3>
            </div>
            <div className="input-form w-full">
              <form>
                <div className="flex flex-wrap m-0 p-0">
                  <div className='name-input w-full pr-0 mb-3 pl-0 xs:pr-3 xs:flex-[0_0_50%] xs:max-w-[50%]'>
                    <p>
                      <span>
                        <input type="text" placeholder='Your Name (Required)' required className='h-10 border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]'/>
                      </span>
                    </p>
                  </div>
                  <div className='email-input w-full pr-0 mb-3 pl-0 xs:pr-3 xs:flex-[0_0_50%] xs:max-w-[50%]'>
                    <p>
                      <span>
                        <input type="text" placeholder='Your Email Address (Required)' required className='h-10 border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]'/>
                      </span>
                    </p>
                  </div>
                  <div className='message-input w-full pr-0 mb-6 pl-0 xs:pr-3 xs:flex-[0_0_100%] xs:max-w-[100%]'>
                    <p>
                      <span>
                        <textarea cols={40} rows={10} placeholder='Please leave us a message.' required className='h-[160px] border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]'/>
                      </span>
                    </p>
                  </div>
                  <div className='btn-send w-full pr-[15px] pl-0  xs:flex-[0_0_100%] xs:max-w-[100%]'>
                    <button className='custom-button1 pt-[22px] pb-5 px-[50px] hover:bg-orange hover:text-white'>Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0,x:300 }}
        whileInView={{ opacity: 1,x:0 }}
        viewport={{ once: true }}
          transition={{duration:0.5, delay:0.25}}
        className='information  order-9 xl:order-10 w-full md:w-[50%] xl:-w-[36.922%]'>
          <div className="information__wrapper flex flex-wrap w-full p-0 mt-0 mb-[46px] mx-0 md:mt-0 md:mb-[46px] xl:pl-0 xl:pr-[50px] xl:pt-[85px] xl:pb-0 ">
            <div className='work-time mb-5 flex flex-wrap max-w-[350px]'>
              <div className="img-left flex-[0_0_25%] max-w-[25%] p-0">
              <Image width={60} height={60} src="/assets/images/icons/clock.svg" alt="" />
              </div>
              <div className="right-text flex-[0_0_75%] max-w-[75%] pl-2">
                <h2 className='text-[15px] leading-6 font-normal text-text-color mb-[3px] font-lato'>Work Time</h2>
                <h3 className='text-lg leading-7 font-bold mb-0'>Monday - Friday</h3>
                <h3 className='text-lg leading-7 font-bold mb-0'>11:00 - 00:00</h3>
              </div>
            </div>
            <div className='phone mb-5 flex flex-wrap max-w-[350px]'>
            <div className="img-left flex-[0_0_25%] max-w-[25%] p-0">
              <Image width={60} height={60} src="/assets/images/icons/phone.svg" alt="" />
              </div>
              <div className="right-text flex-[0_0_75%] max-w-[75%] pl-2">
                <h2 className='text-[15px] leading-6 font-normal text-text-color mb-[3px] font-lato'>Phone</h2>
                <h3 className='text-lg leading-7 font-bold mb-0'>+ 123 4567 8905</h3>
                <h3 className='text-lg leading-7 font-bold mb-0'>+ 876 5763 3597</h3>
              </div>
            </div>
            <div className='address flex flex-wrap max-w-[350px]'>
            <div className="img-left flex-[0_0_25%] max-w-[25%] p-0">
              <Image width={60} height={60} src="/assets/images/icons/direction.svg" alt="" />
              </div>
              <div className="right-text flex-[0_0_75%] max-w-[75%] pl-2">
                <h2 className='text-[15px] leading-6 font-normal text-text-color mb-[3px] font-lato'>Address</h2>
                <h3 className='text-lg leading-7 font-bold mb-0'>LA, 45906</h3>
                <h3 className='text-lg leading-7 font-bold mb-0'>Vehicula Street, 58</h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactMessage