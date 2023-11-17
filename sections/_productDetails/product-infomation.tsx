"use client"
import React, { useState } from 'react'
import ProductTabs from './product-tabs'
import ProductsRelated from './products-related'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { Product } from '@/types/product';
import Image from 'next/image';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import { useParams } from 'next/navigation';

type Props = {
  productDetails: Product
}

const ProductInfo = ({productDetails}:Props) => {
  const {addAmountCartQuantity} = useShoppingCart();
  const [quantity, setQuantity] = useState(1)

  const {productId} = useParams() as{
    productId: string
  }
  function handleAddCart () {
    addAmountCartQuantity(parseInt(productId),quantity);
  }
  return (
    <div className="productDetails__item relative md:flex flex-wrap">
    <span className={`${productDetails?.sale? "" : "hidden"}sale absolute z-[1] inline-block min-h-[auto] w-auto text-white text-xs leading-[18px] font-semibold m-[15px] p-[5px] rounded-[14px] left-1.5  top-1.5 bg-orange font-nunito`}>Sale!</span>
    <div className="productDetails-left w-full md:w-[40%] mb-[2em]">
      <div className="img-item overflow-hidden relative ">
        <Image src={productDetails?.image} width={1000} height={1119} alt="" />
      </div>
    </div>
    <div className="productDetails-summary mb-[2em] w-full pl-0 clear-none md:w-[60%] md:pl-[58px]">
      <h1 className='text-[35px] leading-[50px] font-extrabold md:text-[44px] md:leading-[65px] uppercase lg:text-6xl lg:leading-[81px] '>{productDetails?.name}</h1>
      <div className="rating">
        <div className="float-left ml-0 mr-1  mb-0 overflow-hidden relative h-[25px] tracking-[10px] w-[129px] text-yellow">
          <FontAwesomeIcon className='' icon={faStar}/>
          <FontAwesomeIcon className='px-1' icon={faStar}/>
          <FontAwesomeIcon className='' icon={faStar}/>
          <FontAwesomeIcon className='px-1' icon={faStar}/>
          <FontAwesomeIcon className='' icon={faStar}/>
        </div>
        <a href="#review" className='text-dark-gray ml-3'> (customer reviews)</a>
      </div>
      <p className="price block pt-1  mb-9">
        <span className='text-dark-gray line-through text-[1.25em] mr-[5px]'>{productDetails?.oldPrice}</span>
        <span className='text-3xl leading-[38px] font-extrabold text-yellow mr-[5px]'>${productDetails?.price}.00</span>
      </p>
      <div className="description">
        <p className='text-[15px] mb-5 pt-1'>{productDetails?.desc}</p>
      </div>
      <form className='mb-[2em] mt-[30px] '>
        <div className="quantity float-left mb-3 w-[132px] border mr-5 pt-[13px] pb-3.5 px-[25px] rounded-[5px] border-solid border-[#ccc] flex justify-between items-center">
          <span className='text-dark-gray text-lg p-0 border-[none] cursor-pointer' onClick={() => quantity===1? setQuantity(1) : setQuantity(quantity-1)}>-</span>
          <input type="number" value={quantity} readOnly className='w-[3.631em] text-center outline-none'/>
          <span className='text-dark-gray text-lg p-0 border-[none] cursor-pointer' onClick={() =>{setQuantity(quantity+1)}}>+</span>
        </div>
        <button className='custom-button1 uppercase px-10 py-5 align-middle lg:px-[50px] lg:pt-[22px] pb-[20px]' onClick={handleAddCart}>Add To Cart</button>
      </form>
      <div className="productDetail-meta">
        <span className='text-text-color uppercase block font-bold mb-1.5'>
          Category:
          <a className='pl-[6px] uppercase' href="">burgers</a>
        </span>
      </div>

    </div>
    <ProductTabs productDetails={productDetails}/>
    <ProductsRelated/>
  </div>
  )
}

export default ProductInfo