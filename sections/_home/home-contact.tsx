import Image from "next/image"

const Contact = () => {
  return (
    <>
   <section className="mb-3">
        <div className="elemental-container">
          <div className="relative min-h-[1px] flex w-full" >
            <div className="p-10 flex relative w-full flex-wrap content-start">
              <div className="text-center w-full animate__animated animate__fadeInDown" >
                  <h2 className="main-title text-[44px] font-extrabold uppercase mb-0 md:text-[54px] break-words">our contact</h2>     
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="mb-6" data-id="1a0c760" data-element_type="section">
        <div className="elemental-container">
          <div className="relative min-h-[1px] flex w-full">
            <div className="p-0 flex relative w-full flex-wrap content-start">
              <section className="relative w-full">
                <div className="elemental-container">
                  <div className="w-full md:w-[33.333%]" >
                    <div className="p-10 flex w-full flex-wrap content-start">
                      <div className="w-full relative animate__animated animate__fadeInLeft" >
                          <div className="contact max-w-full m-0 p-0 flex flex-wrap text-center md:max-w-[350px]">
                            <div className="relative  min-w-full w-full p-0 flex-[0_0_25%] max-w-[25%]">
                              <Image width={84} height={84}  src="/assets/images/icons/clock.svg" alt="" className='block mt-0 mb-3 mx-auto transition-all h-auto max-w-full border-0 rounded-none [box-shadow:none]' />
                            </div>
                            <div className="relative pl-[0.5rem] pr-[15px]  min-w-full w-full p-0 flex-[0_0_75%] max-w-[75%]">
                              <h2 className='mb-[3px] text-[15px] leading-[24px] font-normal font-lato text-text-color'>Work time</h2> 
                              <h3 className='mb-0 text-[20px] leading-[28px] font-bold'>Monday - Friday</h3>
                              <h3 className='mb-0 text-[20px] leading-[28px] font-bold'>11:00 - 00:00</h3>
                            </div>
                          </div>   
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[33.333%]" >
                    <div className="p-10 flex w-full flex-wrap content-start">
                      <div className="w-full relative animate__animated animate__fadeInUp" >
                          <div className="contact max-w-full m-0 p-0 flex flex-wrap text-center md:max-w-[350px]">
                            <div className="relative  min-w-full w-full p-0 flex-[0_0_25%] max-w-[25%]">
                              <Image width={84} height={84}  src="/assets/images/icons/phone.svg" alt="" className='block mt-0 mb-3 mx-auto transition-all h-auto max-w-full border-0 rounded-none [box-shadow:none]' />
                            </div>
                            <div className="relative pl-[0.5rem] pr-[15px]  min-w-full w-full p-0 flex-[0_0_75%] max-w-[75%]">
                              <h2 className='mb-[3px] text-[15px] leading-[24px] font-normal font-lato text-text-color'>Phone</h2> 
                              <h3 className='mb-0 text-[20px] leading-[28px] font-bold'>+ 123 4567 8905</h3>
                              <h3 className='mb-0 text-[20px] leading-[28px] font-bold'>+ 876 5763 3597</h3>
                            </div>
                          </div>   
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[33.333%]" >
                    <div className="p-10 flex w-full flex-wrap content-start">
                      <div className="w-full relative animate__animated animate__fadeInRight" >
                          <div className="contact max-w-full m-0 p-0 flex flex-wrap text-center md:max-w-[350px]">
                            <div className="relative  min-w-full w-full p-0 flex-[0_0_25%] max-w-[25%]">
                              <Image width={84} height={84}  src="/assets/images/icons/direction.svg" alt="" className='block mt-0 mb-3 mx-auto transition-all h-auto max-w-full border-0 rounded-none [box-shadow:none]' />
                            </div>
                            <div className="relative pl-[0.5rem] pr-[15px]  min-w-full w-full p-0 flex-[0_0_75%] max-w-[75%]">
                              <h2 className='mb-[3px] text-[15px] leading-[24px] font-normal font-lato text-text-color'>Address</h2> 
                              <h3 className='mb-0 text-[20px] leading-[28px] font-bold'>LA, 45906</h3>
                              <h3 className='mb-0 text-[20px] leading-[28px] font-bold'>Vehicula Street, 58</h3>
                            </div>
                          </div>   
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="map p-0 mb-[70px] relative xl:mb-[92px]" >
        <div className="elemental-container">
          <div className="w-full relative min-h-[1px] flex" >
            <div className="p-0 m-0 flex relative w-full flex-wrap content-start xl:ml-[5px] xl:p-[10px]">
              <div className="w-full animate__animated animate__fadeIn" >
                <div className="">
                  <iframe className='max-w-full w-full m-0 leading-none border-0' loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158924.18906943742!2d-0.23346108004648697!3d51.50972180519046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60LAg0JHRgNC40YLQsNC90LjRmNCw!5e0!3m2!1ssr!2srs!4v1608396181691!5m2!1ssr!2srs" width={600} height={450} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />		</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact