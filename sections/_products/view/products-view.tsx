import ProductList from "../product-list";
import Sidebar from '@/components/sidebar-product/sidebar-product'
import ProductHeader from "../products-header";

export default function AboutView () {

  return (
    <div className='container'>
      <div className="products-wrapper  row mb-[35px] pt-24">
      <div className='products-content relative w-full px-[15px] lg:flex-[0_0_66.666667%] lg:max-w-[66.666667%]'>
        <ProductHeader/>
        <ProductList/>
      </div>
        <Sidebar/>
      </div> 
    </div>

  )
}