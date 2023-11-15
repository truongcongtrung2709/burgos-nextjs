'use client'
import {motion} from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
const Follow = () => {
  return (
    <>
     <section className="follow-title mb-[24px] xl:mb-[46px] relative text-center">
        <div className="elemental-container">
          <motion.div 
          initial={{ opacity: 0,y:400 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once: true }}
            transition={{duration:0.5, delay:0.25}}
          className="relative min-h-[1px] flex w-full animate__animated animate__fadeInDown" >
              <div className="p-[10px] flex flex-wrap content-start  relative w-full ">
                <div className="mb-3 w-full relative">
                  <h2 className="main-title text-[44px] font-extrabold uppercase mb-0 md:text-[54px] break-words">Follow on instagram</h2>     
                </div>
              <div className="w-full relative">
                    <div className="instagram-wrapper ">
                      <div className="instagram-title m-0 p-0 items-center  flex-wrap justify-center flex  flex-[0_0_auto] w-auto max-w-full relative">
                        <div className="relative mr-[12px] pt-[8px] text-white text-[30px] w-[48px] h-[48px] rounded-[500px] leading-none text-center bg-hero-pattern">
                      <FontAwesomeIcon icon={faInstagram} />
                      </div>
                      <div className="title relative mb-0 font-normal uppercase text-[20px] text-black-navy font-nunito flex-[0_0_auto] w-auto max-w-full break-words">@burgos_cafee</div>                  
                    </div>  
              </div>
            </div>
            </div>

            </motion.div>
        </div>
      </section>
    </>
  )
}

export default Follow