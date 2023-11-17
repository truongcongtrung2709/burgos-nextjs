'use client'
import {  productsURLEndpoint as cacheKey } from '@/services/productsAPI';
import useSWR,{preload} from "swr"
import ProductDetailBreadcrumb from '../product-detail-breadcumb';
import ProductInfo from '../product-infomation';
import { useParams } from 'next/navigation'
import fetcher from '@/services/fetcher';
import { Product } from '@/types/product';
preload(cacheKey,fetcher)

const ProductDetailView = () => {
  const {productId} = useParams()
  const {data:productDetails}:any = useSWR(()=> cacheKey + "/" + productId,fetcher)
  
  return (
    <div className='container'>
      <div className="productDetails flex pt-[96px] mb-[35px]">
        <div className="productDetails__content flex-[0_0_100%] max-w-full">
          <ProductDetailBreadcrumb productDetails={productDetails?.data}/>
         <ProductInfo productDetails={productDetails?.data}/>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailView