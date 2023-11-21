"use client"
import {motion} from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import useSWR,{preload} from "swr";
import { getFeatures, featuresURLEndpoint as cacheKey } from "@/services/featuresAPI";
import { Feature } from "@/types/features";
preload(cacheKey,getFeatures);
const HomeFeatures = () => {
  const {data:features} = useSWR(cacheKey,getFeatures,{
    revalidateIfStale:false,
    revalidateOnReconnect:false,
    revalidateOnFocus:false
  });
  
  return (
    <>
      
      {features.map((feature:Feature) => (
              <section key={feature.id} className={`${(feature.id)%2===0 ? "" : " mb-[46px] md:mt-20 md:mb-[46px]"} `}>
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
                          <div className={`${(feature.id)%2===0 ? "mb-6 px-[10px] order-1 flex-[0_0_100%] max-w-[100%] xs:flex-[0_0_50%] xs:order-4 xs:max-w-[50%] relative w-full md:text-right" : "mb-6 px-[10px] flex-[0_0_100%] max-w-[100%] xs:flex-[0_0_50%] xs:max-w-[50%] relative w-full"}`}>
                            <Image
                            width={520}
                            height={436}
                            priority
                              src={feature.image}
                              alt=""
                              className={`${(feature.id)%2===0 ? "inline-block w-full max-w-[460px] h-auto border-none rounded-none shadow-none" : "w-full  max-w-[520px] h-auto border-none rounded shadow-none"}`}
                            />
                          </div>
                          <div className={`${(feature.id)%2===0 ? "px-[10px] order-3 flex-[0_0_100%] max-w-[100%] relative w-full xs:flex-[0_0_50%] xs:max-w-[50%]" : "px-[10px] flex-[0_0_100%] max-w-[100%] relative w-full xs:flex-[0_0_50%] xs:max-w-[50%] lg:flex=[0_0_33.333333%] lg:max-w-[33.333333%] "}`}>
                            <div className={`${(feature.id)%2===0 ? "mr-0 xs:mr-5 pl-[2px] text-center  lg:mr-[-17px] xs:text-right" :"pl-[2px] text-center xs:text-start"}`}>
                              <h2 className="text-[44px] leading-[50px] mb-0 lg:text-6xl lg:leading-[72px] font-extrabold uppercase text-text-color">
                                {feature.name}
                              </h2>
                              <h3 className="text-3xl leading-[38px] font-semibold uppercase text-text-color mb-[12px] ">
                                {feature.type}
                              </h3>
                              <p className="mb-0 pt-0 ">
                                {feature.desc}
                              </p>
                              <h6 className={`${(feature.id)%2===0 ? "flex items-center justify-center  xs:justify-end mt-[18px] mb-[12px]  mx-0 md:mb-6  text-sm leading-6 font-lato font-normal text-dark-gray" :"flex items-center justify-center xs:justify-start mt-[18px] mb-[12px] mx-0 md:mb-6  text-sm leading-6 font-lato font-normal text-dark-gray"}`}>
                                <span className="flex items-center mr-[30px] ">
                                  <Image
                                  width={19}
                                  height={21}
                                    src="/assets/images/icons/weight-1.png"
                                    alt=""
                                    className="pb-[5px] pr-[3px] h-auto max-w-full align-middle"
                                  />
                                  {feature.weight}g
                                </span>
                                <span className="flex items-center">
                                  <Image
                                  width={19}
                                  height={21}
                                    src="/assets/images/icons/fire-1.png"
                                    alt=""
                                    className="pb-[5px] pr-[3px] h-auto max-w-full align-middle"
                                  />
                                  {feature.taste}
                                </span>
                              </h6>
                              <div className="m-0 p-0 flex flex-wrap ">
                                <div className={`${(feature.id)%2===0 ? "relative w-full pr-0 pl-0 flex-[0_0_100%]   md:pr-[1rem] md:flex-[0_0_auto] md:w-auto md:basis-0 md:flex-grow md:min-w-0 md:max-w-full " :"relative w-full pr-0 pl-0 flex-[0_0_100%] max-w-full   md:pr-[1rem] md:flex-[0_0_auto] md:w-auto md:max-w-full "}`}>
                                  <h5 className="px-0 md:pr-3 mt-[-2px] font-Nunito Sans text-4xl leading-[72px] md:mb-0 font-black text-black-navy">
                                  ${feature.price}
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
      ))}
    </>
  );
}

export default HomeFeatures