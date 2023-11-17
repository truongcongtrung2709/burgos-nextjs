import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';

const ProductsRelated = () => {
  return (
    <section className='related w-full'>
              <h2 className='font-extrabold uppercase mb-[38px] text-center p-0'>Related products</h2>
              <ul className='products mt-0 mb-[1em] mx-0 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5'>
                <li className='product text-center w-full mt-0 mb-[2.992em] mx-0'>
                  <a href="/" className='text-3xl leading-[38px] font-semibold overflow-hidden m-0'>
                    <div className="wrap-img mb-[18px]">
                      <Image src={"/assets/images/our-product1.webp"} alt="" width={500} height={500} />
                    </div>
                    <div className='star-rating overflow-hidden relative tracking-[10px] w-[129px] mt-5 text-yellow mx-auto text-[15px]'>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon className='px-1' icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon className='px-1' icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <h2 className='text-center font-extrabold text-lg leading-8 mt-3 mb-[5px]'>Burger Bomb</h2>
                    <p className='font-black text-center text-orange mt-1.5 font-nunito text-[26px]'>$9.00</p>
                  </a>
                  <button className='custom-button1 pt-[13px] pb-3 px-[30px]'>Add To Cart</button>
                </li>
                <li className='product text-center w-full mt-0 mb-[2.992em] mx-0'>
                  <a href="/" className='text-3xl leading-[38px] font-semibold overflow-hidden m-0'>
                    <div className="wrap-img mb-[18px]">
                      <Image src="/assets/images/our-product2.webp" alt="" width={500} height={500} />
                    </div>
                    <div className='star-rating overflow-hidden relative tracking-[10px] w-[129px] mt-5 text-yellow mx-auto text-[15px]'>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon className='px-1' icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon className='px-1' icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <h2 className='text-center font-extrabold text-lg leading-8 mt-3 mb-[5px]'>Burger Bomb</h2>
                    <p className='font-black text-center text-orange mt-1.5 font-nunito text-[26px]'>$9.00</p>
                  </a>
                  <button className='custom-button1 pt-[13px] pb-3 px-[30px]'>Add To Cart</button>
                </li>
                <li className='product text-center w-full mt-0 mb-[2.992em] mx-0'>
                  <a href="/" className='text-3xl leading-[38px] font-semibold overflow-hidden m-0'>
                    <div className="wrap-img mb-[18px]">
                      <Image src="/assets/images/our-product3.webp" alt="" width={500} height={500} />
                    </div>
                    <div className='star-rating overflow-hidden relative tracking-[10px] w-[129px] mt-5 text-yellow mx-auto text-[15px]'>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon className='px-1' icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon className='px-1' icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <h2 className='text-center font-extrabold text-lg leading-8 mt-3 mb-[5px]'>Burger Bomb</h2>
                    <p className='font-black text-center text-orange mt-1.5 font-nunito text-[26px]'>$9.00</p>
                  </a>
                  <button className='custom-button1 pt-[13px] pb-3 px-[30px]'>Add To Cart</button>
                </li>
                <li className='product text-center w-full mt-0 mb-[2.992em] mx-0'>
                  <a href="/" className='text-3xl leading-[38px] font-semibold overflow-hidden m-0'>
                    <div className="wrap-img mb-[18px]">
                      <Image src="/assets/images/our-product4.webp" alt="" width={500} height={500} />
                    </div>
                    <div className='star-rating overflow-hidden relative tracking-[10px] w-[129px] mt-5 text-yellow mx-auto text-[15px]'>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon className='px-1' icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon className='px-1' icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <h2 className='text-center font-extrabold text-lg leading-8 mt-3 mb-[5px]'>Burger Bomb</h2>
                    <p className='font-black text-center text-orange mt-1.5 font-nunito text-[26px]'>$9.00</p>
                  </a>
                  <button className='custom-button1 pt-[13px] pb-3 px-[30px]'>Add To Cart</button>
                </li>
              </ul>

            </section>
  )
}

export default ProductsRelated