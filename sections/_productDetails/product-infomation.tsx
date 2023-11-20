 /* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react'
import ProductTabs from './product-tabs'
import ProductsRelated from './products-related'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { Product } from '@/types/product';
import Image from 'next/image';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import { useParams } from 'next/navigation';
import Rating from '@/components/rating-stars/rating-stars';
import { Review } from '@/types/reviews';
import { getAverageRatingStars } from '@/utils/getAverageRatingStars';

type Props = {
  productDetails: Product
}

const ProductInfo = ({productDetails}:Props) => {
  const {addAmountCartQuantity} = useShoppingCart();
  const [quantity, setQuantity] = useState(1)
  const [reviews, setReviews] = useState<Review[]>();
  useEffect(()=>{
    setReviews(productDetails?.reviews)

  },[productDetails])

  const {productId} = useParams() as{
    productId: string
  }
  function handleAddCart (e:any) {
    e.preventDefault();
    addAmountCartQuantity(parseInt(productId),quantity);
  }
  return (
    <>
    <span className={`${productDetails?.sale? "" : "hidden"}sale absolute z-[1] inline-block min-h-[auto] w-auto text-white text-xs leading-[18px] font-semibold m-[15px] p-[5px] rounded-[14px] left-1.5  top-1.5 bg-orange font-nunito`}>Sale!</span>
    <div className="productDetails-left w-full md:w-[40%] mb-[2em]">
      <div className="img-item overflow-hidden relative ">
        <img src={productDetails?.image} width={1000} height={1119} alt="" />
      </div>
    </div>
    <div className="productDetails-summary mb-[2em] w-full pl-0 clear-none md:w-[60%] md:pl-[58px]">
      <h1 className='text-[35px] leading-[50px] font-extrabold md:text-[44px] md:leading-[65px] uppercase lg:text-6xl lg:leading-[81px] '>{productDetails?.name}</h1>
      <div className="rating">
        <div className="float-left ml-0 mr-1  mb-0 overflow-hidden relative h-[25px] tracking-[10px] w-[129px] text-yellow">
        <Rating value={getAverageRatingStars(reviews)}/>
        </div>
        <a href="#review" className='text-dark-gray ml-3'> (customer reviews)</a>
      </div>
      <p className="price block pt-1  mb-9">
        <span className='text-dark-gray line-through text-[1.25em] mr-[5px]'>{productDetails?.oldPrice}</span>
        <span className='text-3xl leading-[38px] font-extrabold text-yellow mr-[5px]'>${productDetails?.price}.00</span>
      </p>
      <div className="description">
        <p className='text-[15px] mb-5 pt-1'>{productDetails?.desc.split("\n")[0]}</p>
      </div>
      <form className='mb-[2em] mt-[30px] '>
        <div className="quantity float-left mb-3 w-[132px] border mr-5 pt-[13px] pb-3.5 px-[25px] rounded-[5px] border-solid border-[#ccc] flex justify-between items-center">
          <span className='text-dark-gray text-lg p-0 border-[none] cursor-pointer' onClick={() => quantity===1? setQuantity(1) : setQuantity(quantity-1)}>-</span>
          <input type="number" value={quantity} readOnly className='w-[3.631em] text-center outline-none'/>
          <span className='text-dark-gray text-lg p-0 border-[none] cursor-pointer' onClick={() =>{setQuantity(quantity+1)}}>+</span>
        </div>
        <button type='submit' className='custom-button1 uppercase px-10 py-5 align-middle lg:px-[50px] lg:pt-[22px] pb-[20px]' onClick={handleAddCart}>Add To Cart</button>
      </form>
      <div className="productDetail-meta">
        <span className='text-text-color uppercase block font-bold mb-1.5'>
          Category:
          <a className='pl-[6px] uppercase' href="">burgers</a>
        </span>
      </div>

    </div>
    
    </>
  )
}

export default ProductInfo