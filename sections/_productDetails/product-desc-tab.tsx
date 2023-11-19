import { Product } from '@/types/product'
import React from 'react'
type Props = {
  productDetails: Product
}
const ProductDescTab = ({productDetails} :Props) => {
  return (
    <div id='tab-content1' className={`tab-content1 mt-0 mb-[2em] mx-0 p-0`}>
      <h2 className='text-3xl text-center mb-0'>Description</h2>
      <p>{productDetails?.desc.split("\n")[1]}</p>
      <div className="weight row bg-[#f8f8f8] p-[0.5rem] m-0">
        <div className='flex-[0_0_100%] max-w-full col xs:flex-[0_0_16.666667%] xs:max-w-[16.666667%]'>Weight:</div>
        <div className='flex-[0_0_100%] max-w-full col xs:flex-[0_0_50%] xs:max-w-[50%]'>
          <span className='text-[15px] font-extrabold text-text-color font-lato'>{productDetails?.weight}g</span>
        </div>
      </div>
      <div className="ingredients row bg-[#E7E7E7] mb-3 p-[0.5rem] m-0">
        <div className='col flex-[0_0_100%] max-w-full xs:flex-[0_0_16.666667%] xs:max-w-[16.666667%]'>Ingredients:</div>
        <div className='flex-[0_0_100%] max-w-full col xs:flex-[0_0_50%] xs:max-w-[50%]'>
          <span className='text-[15px] font-extrabold text-text-color font-lato'>{productDetails?.ingredients}</span>
        </div>

      </div>
      <p>{productDetails?.desc.split("\n")[2]}</p>
    </div>
  )
}

export default ProductDescTab