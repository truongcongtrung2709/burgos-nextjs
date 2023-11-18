'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import { Product } from '@/types/product';

type Props = {
  productDetails: Product
}

const ProductTabs = ({productDetails}:Props) => {
  
  const [TabDesc, setTabDesc] = useState(true)
  const [TabRev, setTabRev] = useState(false)

  function handleTabDescription() {
    setTabDesc(true)
    setTabRev(false)
    document.getElementById('tab-content2')?.classList.add('hidden')
    document.getElementById('tab-content1')?.classList.remove('hidden')
  }

  function handleTabReview(){
    setTabRev(true)
    setTabDesc(false)
    document.getElementById('tab-content2')?.classList.remove('hidden')
    document.getElementById('tab-content1')?.classList.add('hidden')
  }
  return (
    <div className="tabs-container w-full lg:w-[80%] mx-auto pt-4 pb-[55px] px-0 clear-both">
    <ul className="wc-tabs  relative md:flex md:justify-center text-center mt-0 mb-6 mx-0 p-0">
      <li className='description_tab bg-white  z-[2] relative  p-0 my-3 mx-0 md:mx-[-5px] md:my-0 md:px-[1em] md:py-0'>
        <a onClick={handleTabDescription} className={`${TabDesc ? "text-orange border-orange":"text-text-color border-text"} placeholder:file:border-solid border-[1px] rounded-[5px] font-medium px-9 py-1.5 my-3 mx-0 md:m-0 uppercase w-full block md:inline-block`}>Description</a>
      </li>
      <li className='description_tab bg-white  z-[2] relative  p-0 my-3 mx-0 md:mx-[-5px] md:my-0 md:px-[1em] md:py-0'>
        <a onClick={handleTabReview} className={`${TabRev ? "text-orange border-orange":"text-text-color border-text"} border-solid border-[1px] rounded-[5px]  font-medium px-9 py-1.5 my-3 mx-0 md:m-0 uppercase w-full block md:inline-block`}>Review(2)</a>
      </li>
    </ul>
    <div id='tab-content1' className={`${TabDesc ?"" :""}tab-content1 mt-0 mb-[2em] mx-0 p-0`}>
      <h2 className='text-3xl text-center mb-0'>Description</h2>
      <p>{productDetails?.desc.split("\n")[1]}</p>
      <div className="weight row bg-[#f8f8f8] p-[0.5rem] m-0">
        <div className='flex-[0_0_100%] max-w-full col xs:flex-[0_0_16.666667%] xs:max-w-[16.666667%]'>Weight:</div>
        <div className='flex-[0_0_100%] max-w-full col xs:flex-[0_0_50%] xs:max-w-[50%]'>
          <span className='text-[15px] font-extrabold text-text-color font-lato'>{productDetails?.weight}g</span>
        </div>
      </div>
      <div className="ingridients row bg-[#E7E7E7] mb-3 p-[0.5rem] m-0">
        <div className='col flex-[0_0_100%] max-w-full xs:flex-[0_0_16.666667%] xs:max-w-[16.666667%]'>Ingredients:</div>
        <div className='flex-[0_0_100%] max-w-full col xs:flex-[0_0_50%] xs:max-w-[50%]'>
          <span className='text-[15px] font-extrabold text-text-color font-lato'>{productDetails?.ingredients}</span>
        </div>

      </div>
      <p>{productDetails?.desc.split("\n")[2]}</p>
    </div>

    <div id='tab-content2' className={`${TabRev ? "": ""} hidden tab-content2 mt-0 mb-[2em] mx-0 p-0`}>
      <div className='comment'>
        <h2 className='title-comment text-3xl leading-[56px] font-semibold mb-[18px] text-center'>
        2 reviews for <span className='text-3xl leading-[56px] font-semibold'>{productDetails?.name}</span>
        </h2>
        <ol className='comment-list m-0 w-full mb-[46px] '>
          <li className='comment-item mb-3'>
            <div className="comment-container relative border pl-1.5 pr-3 py-1.5 rounded-[3px] border-solid border-[#cccccc]">
              <Image src="/assets/images/icons/avatar.png" width={60} height={60} className='float-left  w-8 h-auto border shadow-none m-0 p-0 border-solid border-[#e4e1e3] bg-[#ebe9eb] absolute left-6 top-6' alt="" />
              <div className="comment-text rounded ml-[50px] mr-0 my-0 pt-[1em] pb-0 px-[1em]">
                <div className="star-rating float-right leading-[1] mt-[-3px] overflow-hidden relative h-[25px] text-base tracking-[10px] w-[129px]  ml-0 -mr-3.5 mb-0 text-yellow">
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon className='px-1' icon={faStar}/>
                <FontAwesomeIcon className='' icon={faStar}/>
                <FontAwesomeIcon className='px-1' icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </div>
                <p className='meta text-[15px] mt-[-9px] leading-[1.7] text-[#767676  mb-[1em] mx-0]'>
                  <strong className='font-[800] text-[16px] text-black-navy mb-0'>admin</strong>
                  <span className='text-[15px]'>-</span>
                  <time className='italic text-[15px] text-[#979797]'>November 5, 2020</time>
                </p>
                <div className="description">
                  <p className='mb-[1em] leading-[1.7]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
              </div>
            </div>
          </li>
          <li className='comment-item mb-3'>
            <div className="comment-container relative border pl-1.5 pr-3 py-1.5 rounded-[3px] border-solid border-[#cccccc]">
              <Image src="/assets/images/icons/avatar.png" width={60} height={60} className='float-left  w-8 h-auto border shadow-none m-0 p-0 border-solid border-[#e4e1e3] bg-[#ebe9eb] absolute left-6 top-6' alt="" />
              <div className="comment-text rounded ml-[50px] mr-0 my-0 pt-[1em] pb-0 px-[1em]">
                <div className="star-rating float-right leading-[1] mt-[-3px] overflow-hidden relative h-[25px] text-base tracking-[10px] w-[129px]  ml-0 -mr-3.5 mb-0 text-yellow">
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon className='px-1' icon={faStar}/>
                <FontAwesomeIcon className='' icon={faStar}/>
                <FontAwesomeIcon className='px-1' icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </div>
                <p className='meta text-[15px] mt-[-9px] leading-[1.7] text-[#767676  mb-[1em] mx-0]'>
                  <strong className='font-[800] text-[16px] text-black-navy mb-0'>admin</strong>
                  <span className='text-[15px]'>-</span>
                  <time className='italic text-[15px] text-[#979797]'>November 5, 2020</time>
                </p>
                <div className="description">
                  <p className='mb-[1em] leading-[1.7]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
      <div className='review_form'>
        <span className='block text-center text-3xl font-extrabold leading-[52px] text-black-navy uppercase font-nunito'>Add a review </span>
        <form className="z-[1] w-full float-left">
          <p className='comment-notes mt-0 mb-2.5 mx-0 block text-center font-semibold'>
            <span className='email-notes text-[15px]'>Your email address will not be published.</span>
            <span className='required-field-message text-[15px]'>Required fields are marked  </span>
            <span className='text-[15px]'>*</span>
          </p>
          <p className='comment-form-author mt-0 mb-2.5 mx-0 max-w-[58rem]'>
          <label className=' text-[#979797]'>Name&nbsp;<span className="required  text-[#979797] align-middle">*</span></label>
          <input type="text" className='h-10 border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]' required/>
          </p>
          <p className='comment-form-emails mt-0 mb-2.5 mx-0 max-w-[58rem]'>
          <label className=' text-[#979797]'>Email&nbsp;<span className="required  text-[#979797] align-middle">*</span></label>
          <input type="text" className='h-10 border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]' required/>
          </p>
          <div className="comment-form-rating">
            <label className='text-[#979797]'>Your rating&nbsp;<span className="required text-[15px]">*</span>
            </label>
            <p className="stars mt-0 mb-2.5 mx-0 max-w-[58rem]">
              <span className='text-[15px] text-[#979797]'>							
                <a className="star-1" href="#">
                  <FontAwesomeIcon className="text-[#979797]" icon={faStar}/>
                  </a>							
                <a className="star-2" href="#">
                  <FontAwesomeIcon className="text-[#979797]" icon={faStar}/>
                  </a>							
                <a className="star-3" href="#">
                  <FontAwesomeIcon className="text-[#979797]" icon={faStar}/>
                  </a>							
                <a className="star-4" href="#">
                  <FontAwesomeIcon className="text-[#979797]" icon={faStar}/>
                  </a>							
                <a className="star-5" href="#">
                  <FontAwesomeIcon className="text-[#979797]" icon={faStar}/>
                  </a>						
              </span>					
            </p>
            <select className='h-10 border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]' name="rating" id="rating" required style={{display: "none"}}>
              <option value="">Rate…</option>
              <option value="5">Perfect</option>
              <option value="4">Good</option>
              <option value="3">Average</option>
              <option value="2">Not that bad</option>
              <option value="1">Very poor</option>
            </select>
          </div>
          <p className='comment-form-comment mt-0 mb-2.5 mx-0 max-w-[58rem]'>
          <label className=' text-[#979797]'>Your review&nbsp;<span className="required  text-[#979797] align-middle">*</span></label>
          <textarea  className='h-[75px]  border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]' cols={45} rows={8} required/>
          </p>
          <p className='comment-form-checkBox mt-0 mb-2.5 mx-0 max-w-[58rem]'>
            <input type="checkbox" className='mr-[5px]'/>
            <label className='leading-[1.25] text-[#979797]'>Save my name, email, and website in this browser for the next time I comment.</label>
          </p>
          <div className="btn-submit text-right">
            <button className='uppercase custom-button1 mt-0 mb-2.5 mx-0 max-w-[58rem] pt-2.5 pb-2 px-4'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default ProductTabs