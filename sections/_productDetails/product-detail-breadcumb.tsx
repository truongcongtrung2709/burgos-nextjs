import { Product } from "@/types/product"

type Props = {
  productDetails: Product
}
const ProductDetailBreadcrumb = ({productDetails}:Props) => {
  return (
    <nav className='bread-crumb mb-[15px] md:mb-6 block text-[15px] font-medium text-text-color pl-[18px] border-l-2 border-l-yellow border-solid'>
            <a href="/" className='text-black-navy text-[15px] font-medium'>Home</a> -
            <a href="/products" className='text-black-navy text-[15px] font-medium'> Products</a> - {productDetails?.name}
          </nav>
  )
}

export default ProductDetailBreadcrumb