'use client'
import { faHamburger, faMoneyBillWave, faPizzaSlice, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {motion} from "framer-motion"

const OurFeatures = () => {
  return (
    <section style={{background:`url("assets/images/features-bg.webp")`}} className='bg-no-repeat bg-cover pt-[96px] pb-[48px] mt-[88px] md:pt-[88px] md:pb-0 xl:pt-[65px] xl:pb-[42px]  xl:my-0'>
      <div className="elemental-container">
        <motion.div 
         initial={{ opacity: 0,x:0 }}
         whileInView={{ opacity: 1,x:0 }}
         viewport={{ once: true }}
           transition={{duration:0.5, delay:0.25}}
        className="feature__content-left  flex flex-wrap w-full xl:w-[59.298%]">
          <div className="title-content content-center items-center flex-wrap p-0 mb-[68px] pl-[10px] w-full">
            <h2 className='font-extrabold uppercase text-[44px] text-white md:text-[54px]'>
            Our Features
            </h2>
          </div>
          <div className="features__detail1 px-[5px] py-0 w-full">
            <div className='elemental-container'>
              <div className="item-content w-full md:w-1/2   relative pl-[15px] py-0 pr-0 xl:p-[10px]">
                <FontAwesomeIcon className='mb-3 text-[30px] text-white block' icon={faPizzaSlice}/>
                <h5 className='block font-extrabold text-lg text-white uppercase mb-3'>fresh products</h5>
                <p className='text-[15px] mb-5 pt-1 text-gray mt-0'>Nullam quis justo id justo dapibus varius non eget libero. Etiam eu sagittis justo</p>
              </div>
              <div className="item-content w-full md:w-1/2  relative pl-[15px] py-0 pr-0 xl:p-[10px]">
                <FontAwesomeIcon className='mb-3 text-[30px] text-white block' icon={faHamburger}/>
                <h5 className='block font-extrabold text-lg text-white uppercase mb-3'>organic meat</h5>
                <p className='text-[15px] mb-5 pt-1 text-gray mt-0'>Nullam quis justo id justo dapibus varius non eget libero. Etiam eu sagittis justo</p>
              </div>
            </div>
          </div>
          <div className="features__detail2 px-[5px] py-0 w-full">
            <div className='elemental-container'>
              <div className="item-content w-full md:w-1/2  relative pl-[15px] py-0 pr-0 xl:p-[10px]">
                <FontAwesomeIcon className='mb-3 text-[30px] text-white block' icon={faMoneyBillWave}/>
                <h5 className='block font-extrabold text-lg text-white uppercase mb-3'>Low prices</h5>
                <p className='text-[15px] mb-5 pt-1 text-gray mt-0'>Nullam quis justo id justo dapibus varius non eget libero. Etiam eu sagittis justo</p>
              </div>
              <div className="item-content w-full md:w-1/2  relative pl-[15px] py-0 pr-0 xl:p-[10px]">
                <FontAwesomeIcon className='mb-3 text-[30px] text-white block' icon={faUserFriends}/>
                <h5 className='block font-extrabold text-lg text-white uppercase mb-3'>Professional staff</h5>
                <p className='text-[15px] mb-5 pt-1 text-gray mt-0'>Nullam quis justo id justo dapibus varius non eget libero. Etiam eu sagittis justo</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0,y:300 }}
        whileInView={{ opacity: 1,y:0 }}
        viewport={{ once: true }}
          transition={{duration:0.5, delay:0.25}}
        className='feature__content-right  flex w-full xl:w-[40.484%] content-center items-center flex-wrap p-0'>
          <div className="bg-over content-center items-center ml-0 mr-2.5 my-[50px] flex flex-wrap w-full md:ml-0 md:mr-2.5 md:my-0 xl:mb-[-130px] xl:-mt-36 xl:mx-0 pl-[15px] pr-[0.5rem] lg:max-w-full">
            <div className="featuresing bg-hero-pattern relative pt-[72px] pb-6 px-6 md:pt-[92px] md:pb-12 md:px-12 lg:pt-48 lg:pb-[150px] lg:px-[63px] right-0 bottom-0">
              <div className='mb-12 max-w-full'>
                <h4 className='text-black-navy uppercase font-extrabold text-lg leading-none pl-3 border-l-2 border-l-black-navy border-solid'>best menu</h4>
                <p className='text-black-navy'>Duis euismod lacus sed sem tempus ultricies. In hac habitasse platea dictumst</p>
              </div>
              <div className='mb-12 max-w-full'>
              <h4 className='text-black-navy uppercase font-extrabold text-lg leading-none pl-3 border-l-2 border-l-black-navy border-solid'>free delivery</h4>
                <p className='text-black-navy'>Duis euismod lacus sed sem tempus ultricies. In hac habitasse platea dictumst</p>
              </div>
              <div className='mb-12 max-w-full'>
              <h4 className='text-black-navy uppercase font-extrabold text-lg leading-none pl-3 border-l-2 border-l-black-navy border-solid'>everyday sales</h4>
                <p className='text-black-navy'>Duis euismod lacus sed sem tempus ultricies. In hac habitasse platea dictumst</p>
              </div>
              <div className='mb-12 max-w-full'>
              <h4 className='text-black-navy uppercase font-extrabold text-lg leading-none pl-3 border-l-2 border-l-black-navy border-solid'>Satisfied customers</h4>
                <p className='text-black-navy'>Duis euismod lacus sed sem tempus ultricies. In hac habitasse platea dictumst</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    
  )
}

export default OurFeatures