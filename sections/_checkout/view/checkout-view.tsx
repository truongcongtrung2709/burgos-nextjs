'use client'
import { useEffect } from 'react'
import Banner from '@/components/banner/banner'
import OrderDetails from '../checkout-order-detail'
import { useShoppingCart } from '@/context/ShoppingCartContext';
import { useRouter } from 'next/navigation';

const CheckoutView = () => {
  const{cartItems}= useShoppingCart();
  const router = useRouter()
  useEffect(() =>{
    if(cartItems.length === 0)
    {
      alert("You dont have any cart items")
      router.push("/cart")

    }
  },[cartItems.length,router])
  const bannerInfo = {
    name: 'Check Out',
    description:'Diam ut venenatis tellus in metus vulputate eu. Placerat in egestas erat imperdiet. Velit euismod in pellentesque massa placerat duis.',
    bannerImg : 'assets/images/checkout-bg.webp',
  }
  
  return (
  <div className='bg-white'>
    <Banner name={bannerInfo.name} description={bannerInfo.description} bannerImage={bannerInfo.bannerImg}/>
    <div className="container py-[46px] lg:py-[96px]">
      <div className="checkout__content row flex-col col">
        <OrderDetails  />

      </div>
    
    </div>
  </div>
  )
}

export default CheckoutView