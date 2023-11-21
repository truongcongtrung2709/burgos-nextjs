'use client'
import ProductItem from './product-item';
import { Product } from '@/types/product';
import { productsURLEndpoint as cacheKey } from '@/services/productsAPI';
import useSWR from "swr"
import { _optionSoftProduct } from '@/_mock/_options-drop-down';
import fetcher from '@/services/fetcher';
import { useEffect, useState } from 'react';


  const Products = () => {
    const{data:productsData,isLoading, error,mutate}:any = useSWR(cacheKey+ "?_embed=reviews",fetcher,
      {revalidateIfStale:false,
      revalidateOnFocus:false,
      revalidateOnReconnect:false})
    const [products, setProducts] = useState<Product[]>([])
    useEffect(()=>{
      mutate()
      setProducts(productsData?.data)
    },[productsData,mutate])

  return (
    <>
           <form className='mb-6 w-full md:w-[250px] md:ml-auto md:mr-0'>
            <select  className=' mb-6 w-full align-top max-w-full border text-text-color text-[15px] h-11 appearance-none pl-[25px] rounded-[22px] border-solid border-gray-color outline-none font-lato bg-chevron-down-bg bg-[right_center] bg-no-repeat' name="orderby" id="">
              {_optionSoftProduct.map((option,index) => (
                <option key={index} value="menu_order" className='h-10 border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]' >{option}</option>
              ))}
            
            </select>
          </form>
          <div className="product__list mb-10 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-7">
            {isLoading? (<div className='text-center'>...loading...</div>) :(<></>)}
            {error? (<div className='text-center'>...error...</div>) :(<></>)}
          {products?.map((burger:Product) => (
            <div key={burger.id} className="product-item  text-center">
              <ProductItem {...burger}/>
            </div>    
          ))}
          </div>
          </>
  )
}

export default Products