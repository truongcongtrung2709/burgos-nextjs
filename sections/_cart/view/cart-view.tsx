import Banner from "@/components/banner/banner"
import CartCategory from "../cart-category"
import CartProductList from "../cart-product-list"
import CartTotal from "../cart-total"
// import CartTotal from "./CartTotal"

const CartView = () => {
  const bannerInfo = {
    name: 'Cart',
    description:'Diam ut venenatis tellus in metus vulputate eu. Placerat in egestas erat imperdiet. Velit euismod in pellentesque massa placerat duis.',
    bannerImg : 'assets/images/bg-cart.webp'
  }
  
  return (
    <div className="bg-gray">
    <Banner name={bannerInfo.name} description={bannerInfo.description} bannerImage={bannerInfo.bannerImg}/>
    <section className=' py-[24px]'>
      <div className="elemental-container xl:flex xl:justify-between">
        <CartCategory/>
        <CartProductList/>
        <CartTotal/>
      </div>
    </section>
    </div>
  )
}

export default CartView