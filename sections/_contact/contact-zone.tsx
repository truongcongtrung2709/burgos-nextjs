"use client"
import {motion} from "framer-motion"
const ContactZone = () => {
  return (
    <section className='overflow-hidden mt-[80px] mb-0 p-0 md:py-0 md:px-5 xl:mt-[112px] xl:mb-[70px]'>
      <div className="elemental-container">
        <motion.div
        initial={{ opacity: 0,x:-300 }}
        whileInView={{ opacity: 1,x:0 }}
        viewport={{ once: true }}
          transition={{duration:0.5, delay:0.25}}
        className="map w-full flex relative xl:w-[61.66%] ">
          <div className="map__content flex flex-wrap w-full content-center items-center p-[10px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158924.18906943742!2d-0.23346108004648697!3d51.50972180519046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60LAg0JHRgNC40YLQsNC90LjRmNCw!5e0!3m2!1ssr!2srs!4v1608396181691!5m2!1ssr!2srs" width="600" height="450" className='border-none'></iframe>

          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0,x:300 }}
        whileInView={{ opacity: 1,x:0 }}
        viewport={{ once: true }}
          transition={{duration:0.5, delay:0.25}}
        className="zone w-full flex relative xl:w-[38.295%] ">
          <div className="zone-wrapper flex flex-wrap w-full content-center items-center p-[10px] md:mx-0 md:mt-0 md:mb-[46px] xl:m-0">
            <div className="zone-item mb-5 py-1.5">
              <h3 className='text-lg leading-[38px] font-bold mb-0'>
                Zone 1
              </h3>
              <p className='delivery-price mb-0 text-orange text-[17px] font-extrabold'>
                <span>Free delivery</span>
              </p>
              <p className='mb-0'>Nam ac felis id libero rutrum pharetra eu non lacus</p>

            </div>
            <div className="zone-item mb-5 py-1.5">
              <h3 className='text-lg leading-[38px] font-bold mb-0'>
                Zone 2
              </h3>
              <p className='delivery-price mb-0 text-orange text-[17px] font-extrabold'>
                <span>Free Delivery From $50 Order</span>
              </p>
              <p className='mb-0'>Nam ac felis id libero rutrum pharetra eu non lacus</p>

            </div>
            <div className="zone-item mb-5 py-1.5">
              <h3 className='text-lg leading-[38px] font-bold mb-0'>
                Zone 3
              </h3>
              <p className='delivery-price mb-0 text-orange text-[17px] font-extrabold'>
                <span>Free Delivery From $100 Order</span>
              </p>
              <p className='mb-0'>Nam ac felis id libero rutrum pharetra eu non lacus</p>

            </div>
            <div className="zone-item mb-5 py-1.5">
              <h3 className='text-lg leading-[38px] font-bold mb-0'>
                Zone 4
              </h3>
              <p className='delivery-price mb-0 text-orange text-[17px] font-extrabold'>
                <span>Free Delivery From $150 Order</span>
              </p>
              <p className='mb-0'>Nam ac felis id libero rutrum pharetra eu non lacus</p>

            </div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}

export default ContactZone