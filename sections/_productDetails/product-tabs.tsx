'use client'
import React, { useEffect, useState } from 'react'
import { Product  } from '@/types/product';
import { Review  } from '@/types/reviews';
import ProductDescTab from './product-desc-tab';
import ProductReviewsTab from './product-review-tab';
type Props = {
  productDetails: Product
}

const ProductTabs = ({productDetails}:Props) => {
  
  const [TabDesc, setTabDesc] = useState(true)
  const [TabRev, setTabRev] = useState(false)
  const [reviews, setReviews] = useState<Review[]>([])
  
  useEffect(()=>{
    
    setReviews(productDetails?.reviews)
    
  },[productDetails])

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
        <a onClick={handleTabReview} className={`${TabRev ? "text-orange border-orange":"text-text-color border-text"} border-solid border-[1px] rounded-[5px]  font-medium px-9 py-1.5 my-3 mx-0 md:m-0 uppercase w-full block md:inline-block`}>Review({!reviews?.length ? 0 : reviews?.length})</a>
      </li>
    </ul>
    <ProductDescTab productDetails={productDetails}/>
    <ProductReviewsTab productDetails={productDetails} review={reviews} />
    
  </div>
  )
}

export default ProductTabs