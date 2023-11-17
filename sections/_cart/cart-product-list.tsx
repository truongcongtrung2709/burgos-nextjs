'use client'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useState } from 'react'


import { productsURLEndpoint as cacheKey, getProducts } from '@/services/productsAPI'
import useSWR, { preload } from "swr"

import { Product } from '@/types/product'
import CartProductItem from './cart-product-item'

preload(cacheKey,getProducts) 

const CartProductList = () => {
  const [search, setSearch] = useState<string>('')

  const {data:products,isLoading, error} = useSWR(cacheKey,getProducts, {
    revalidateIfStale:false,
    revalidateOnFocus:false,
    revalidateOnReconnect:false,
  })

  return (
    <div className="products xl:max-w-[50%] md:max-w-[70%] max-w-full w-full mr-3">
        <div className='products-header sticky bg-white h-16 z-[100] flex  my-0 pr-6 pl-8 pt-3 top-0 '>
          <form  className='w-full rounded-[3px] '>
            <div className="w-full border-0 m-0 inline-flex relative min-w-0 flex-col align-top p-0 ">
              <div className='h-[36px] pl-[14px] relative rounded-[4px] w-full text-black cursor-text inline-flex  text-md  items-center font-normal leading-[1.1876em] border-[1px] border-solid border-dark-gray '>
                <div className="searchEl mr-2 h-[0.01em] flex max-h-[2em] items-center whitespace-nowrap">
                  <FontAwesomeIcon className='text-dark-gray' icon={faSearch} />
                </div>
                <input onChange={(e) => setSearch(e.target.value)}
                 placeholder='what are you looking for?' type="text" className='focus:outline-none w-full h-[1.1876em] block text-sm min-w-0 m-0 pt-1.5 pb-[7px] px-0 ' />
              </div>
            </div>
          </form>
        </div>
        <div className='products-body bg-white '>
        <p className='bg-gray leading-[20px] font-[500] text-md m-0 p-3'>All Products</p>
        <div className="product-list h-[500px] overflow-y-auto bg-white">
          {isLoading? (<div className='text-center'>...loading...</div>) :(<></>)}
          {error? (<div>...error...</div>) :(<></>)}  
        {products?.filter((item:Product)=> {
          return search.toLowerCase()=== '' ? item : item.name.toLowerCase().includes(search.toLowerCase())
        }).map((item:Product) => (
        <CartProductItem key={item.id} {...item}/>
        ))}
        </div>
        </div>
      </div>
  )
}

export default CartProductList