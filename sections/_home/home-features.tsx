"use client"
import {motion} from "framer-motion"
import Image from "next/image";
import Link from "next/link";

const HomeFeatures = () => {
  return (
    <>
      <section className="product mb-[46px] md:mt-20 md:mb-[46px]">
        <div className="elemental-container">
          <motion.div
           initial={{ opacity: 0,y:500 }}
           whileInView={{ opacity: 1,y:0 }}
           viewport={{ once: true }}
             transition={{duration:0.5, delay:0.25}}
          className="w-full">
            <div className="p-0 md:p-[10px]">
              <div className="w-full">
                <div>
                  <div className=" m-0 p-0 text-center items-center flex flex-wrap">
                    <div className="mb-6 px-[10px] flex-[0_0_100%] max-w-[100%] xs:flex-[0_0_50%] xs:max-w-[50%] relative w-full">
                      <Image
                      width={520}
                      height={436}
                      priority
                        src="/assets/images/product1.webp"
                        alt=""
                        className="w-full max-w-[520px] h-auto border-none rounded shadow-none"
                      />
                    </div>
                    <div className="px-[10px] flex-[0_0_100%] max-w-[100%] relative w-full xs:flex-[0_0_50%] xs:max-w-[50%] lg:flex=[0_0_33.333333%] lg:max-w-[33.333333%] ">
                      <div className="pl-[2px] text-center xs:text-start">
                        <h2 className="text-[44px] leading-[50px] mb-0 lg:text-6xl lg:leading-[72px] font-extrabold uppercase text-text-color">
                          beef
                        </h2>
                        <h3 className="text-3xl leading-[38px] font-semibold uppercase text-text-color mb-[12px] ">
                          Big burger
                        </h3>
                        <p className="mb-0 pt-0 ">
                          Quisque nec libero ut sapien dictum commodo. Nam ac
                          felis id libero rutrum pharetra eu non lacus
                        </p>
                        <h6 className="flex items-center justify-center xs:justify-start mt-[18px] mb-[12px] mx-0 md:mb-6  text-sm leading-6 font-lato font-normal text-dark-gray">
                          <span className="flex items-center mr-[30px] ">
                            <Image
                            width={19}
                            height={21}
                              src="/assets/images/icons/weight-1.png"
                              alt=""
                              className="pb-[5px] pr-[3px] h-auto max-w-full align-middle"
                            />
                            345g
                          </span>
                          <span className="flex items-center">
                            <Image
                            width={19}
                            height={21}
                              src="/assets/images/icons/fire-1.png"
                              alt=""
                              className="pb-[5px] pr-[3px] h-auto max-w-full align-middle"
                            />
                            Spicy
                          </span>
                        </h6>
                        <div className="m-0 p-0 flex  flex-wrap ">
                          <div className="relative w-full pr-0 pl-0 flex-[0_0_100%] max-w-full   md:pr-[1rem] md:flex-[0_0_auto] md:w-auto md:max-w-full ">
                            <h5 className="px-0 md:pr-3 mt-[-2px] font-Nunito Sans text-4xl leading-[72px] md:mb-0 font-black text-black-navy ">
                              $15
                            </h5>
                          </div>
                          <div className="p-0 flex-[0_0_100%] max-w-full relative w-full md:basis-0 md:grow md:min-w-0" >
                            <Link
                              href="/products"
                              className="custom-button1 px-10 py-5 lg:px-[50px] lg:pt-[22px] lg:pb-[20px]"
                            >
                              Buy now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="product   ">
        <div className="elemental-container">
          <motion.div 
           initial={{ opacity: 0,y:500 }}
           whileInView={{ opacity: 1,y:0 }}
           viewport={{ once: true }}
             transition={{duration:0.5, delay:0.25}}
          className="w-full">
            <div className="p-0 md:p-[10px]">
              <div className="w-full">
                <div>
                  <div className=" m-0 p-0 text-center items-center flex flex-wrap">
                    <div className="mb-6 px-[10px] order-1 flex-[0_0_100%] max-w-[100%] xs:flex-[0_0_50%] xs:order-4 xs:max-w-[50%] relative w-full md:text-right">
                      <Image
                      priority
                        width={460}
                        height={368}
                        src="/assets/images/product2.webp"
                        alt=""
                        className="inline-block w-full max-w-[460px] h-auto border-none rounded-none shadow-none"
                      />
                    </div>
                    <div className="px-[10px] order-3 flex-[0_0_100%] max-w-[100%] relative w-full xs:flex-[0_0_50%] xs:max-w-[50%] ">
                      <div className="best-product-textl mr-0 xs:mr-5 pl-[2px] text-center  lg:mr-[-17px] xs:text-right">
                        <h2 className="text-[44px] leading-[56px] mb-0  lg:leading-[72px] font-extrabold uppercase text-text-color break-words">
                          Chicken
                        </h2>
                        <h3 className="text-3xl leading-[38px] font-semibold uppercase text-text-color mb-[12px] pt-0">
                          Burger
                        </h3>
                        <div className="flex flex-wrap m-0 p-0">
                          <div className="p-0 relative w-full md:flex-[0_0_33.333333%] md:max-w-[33.333333%]"></div>
                          <div className="p-0 relative w-full md:flex-[0_0_66.666667%] md:max-w-[66.666667%]">
                            <p className="mb-0 pt-0">
                              Quisque nec libero ut sapien dictum commodo. Nam
                              ac felis id libero rutrum pharetra eu non lacus
                            </p>
                          </div>
                        </div>
                        <h6 className="flex items-center justify-center  xs:justify-end mt-[18px] mb-[12px]  mx-0 md:mb-6  text-sm leading-6 font-lato font-normal text-dark-gray">
                          <span className="flex items-center mr-[30px] ">
                            <Image
                            width={19}
                            height={21}
                              src="/assets/images/icons/weight-1.png"
                              alt=""
                              className="pb-[5px] pr-[3px] h-auto max-w-full align-middle"
                            />
                            345g
                          </span>
                          <span className="flex items-center">
                            <Image
                            width={19}
                            height={21}
                              src="/assets/images/icons/fire-1.png"
                              alt=""
                              className="pb-[5px] pr-[3px] h-auto max-w-full align-middle"
                            />
                            Spicy
                          </span>
                        </h6>
                        <div className="m-0 p-0 flex  flex-wrap ">
                          <div className="relative w-full pr-0 pl-0 flex-[0_0_100%]   md:pr-[1rem] md:flex-[0_0_auto] md:w-auto md:basis-0 md:flex-grow md:min-w-0 md:max-w-full">
                            <h5 className="px-0 md:pr-3 mt-[-2px] font-Nunito Sans text-4xl leading-[72px] mb-0 font-black text-black-navy ">
                              $12
                            </h5>
                          </div>
                          <div className="p-0 flex-[0_0_100%] max-w-full relative w-full md:flex-[0_0_auto] md:w-auto ">
                            <Link
                              href="/products"
                              className="custom-button1 px-10 py-5 lg:px-[50px] lg:pt-[22px] lg:pb-[20px]"
                            >
                              Buy now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="product mt-[66px] mb-[42px] md:mb-[70px] md:mt-[96px] ">
        <div className="elemental-container">
          <motion.div 
          initial={{ opacity: 0,y:500 }}
          whileInView={{ opacity: 1,y:0 }}
          viewport={{ once: true }}
            transition={{duration:0.5, delay:0.25}}
          className="w-full">
            <div className="p-0 md:p-[10px]">
              <div className="w-full">
                <div>
                  <div className=" m-0 p-0 text-center items-center flex flex-wrap">
                    <div className="mb-6 px-[10px] flex-[0_0_100%] max-w-[100%] xs:flex-[0_0_50%] xs:max-w-[50%] relative w-full">
                      <Image
                        width={460}
                        height={382}
                        priority
                        src="/assets/images/product3.webp"
                        alt=""
                        className="w-full max-w-[520px] h-auto border-none rounded shadow-none"
                      />
                    </div>
                    <div className="px-[10px] flex-[0_0_100%] max-w-[100%] relative w-full xs:flex-[0_0_50%] xs:max-w-[50%] lg:flex=[0_0_33.333333%] lg:max-w-[33.333333%] ">
                      <div className="pl-[2px] text-center xs:text-start">
                        <h2 className="text-[44px] leading-[50px] mb-0  lg:leading-[72px] font-extrabold uppercase text-text-color break-words">
                          Classic
                        </h2>
                        <h3 className="text-3xl leading-[38px] font-semibold uppercase text-text-color mb-[12px] ">
                          burger
                        </h3>
                        <p className="mb-0 pt-0 ">
                          Quisque nec libero ut sapien dictum commodo. Nam ac
                          felis id libero rutrum pharetra eu non lacus
                        </p>
                        <h6 className="flex items-center justify-center xs:justify-start mt-[18px] mb-[12px] mx-0 md:mb-6  text-sm leading-6 font-lato font-normal text-dark-gray">
                          <span className="flex items-center mr-[30px] ">
                            <Image
                            width={19}
                            height={21}
                              src="/assets/images/icons/weight-1.png"
                              alt=""
                              className="pb-[5px] pr-[3px] h-auto max-w-full align-middle"
                            />
                            345g
                          </span>
                          <span className="flex items-center">
                            <Image
                            width={19}
                            height={21}
                              src="/assets/images/icons/fire-1.png"
                              alt=""
                              className="pb-[5px] pr-[3px] h-auto max-w-full align-middle"
                            />
                            Spicy
                          </span>
                        </h6>
                        <div className="m-0 p-0 flex  flex-wrap ">
                          <div className="relative w-full pr-0 pl-0 flex-[0_0_100%]   md:pr-[1rem] md:flex-[0_0_auto] md:w-auto max-w-full">
                            <h5 className="px-0 md:pr-3 mt-[-2px] font-Nunito Sans text-4xl leading-[72px] md:mb-0 font-black text-black-navy ">
                              $9
                            </h5>
                          </div>
                          <div className="p-0 flex-[0_0_100%] max-w-full relative w-full md:basis-0 md:grow md:min-w-0">
                            <Link
                              href="/products"
                              className="custom-button1 px-10 py-5 lg:px-[50px] lg:pt-[22px] lg:pb-[20px]"
                            >
                              Buy now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HomeFeatures