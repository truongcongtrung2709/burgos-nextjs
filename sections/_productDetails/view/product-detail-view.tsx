'use client'
import {  productsURLEndpoint as cacheKey } from '@/services/productsAPI';
import useSWR,{preload} from "swr"
import ProductDetailBreadcrumb from '../product-detail-breadcumb';
import ProductInfo from '../product-infomation';
import { useParams } from 'next/navigation'
import fetcher from '@/services/fetcher';
import ProductTabs from '../product-tabs';
import ProductsRelated from '../products-related';
preload(cacheKey,fetcher)

const ProductDetailView = () => {
  const {productId} = useParams()
  const {data:productDetails}:any = useSWR(()=> cacheKey + "/" + productId,fetcher)
  return (
    <div className='container'>
      <div className="productDetails flex pt-[96px] mb-[35px]">
        <div className="productDetails__content flex-[0_0_100%] max-w-full">
          <ProductDetailBreadcrumb productDetails={productDetails?.data}/>
        <div className="productDetails__info relative md:flex flex-wrap">
          <ProductInfo productDetails={productDetails?.data}/>
          <ProductTabs productDetails={productDetails?.data}/>
          <ProductsRelated/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailView