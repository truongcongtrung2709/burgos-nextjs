'use client'
import { useShoppingCart } from "@/context/ShoppingCartContext"
import { formatCurrency } from "@/utils/formatCurrency"

import CartPaidItem from "./cart-paid-item"


import { getProducts,productsURLEndpoint as cacheKey } from '@/services/productsAPI'
import useSWR, {preload} from "swr"

import { Product } from "@/types/product"

preload(cacheKey,getProducts) 
const CartTotal = () => {
const {deleteCart,cartItems} = useShoppingCart()
const {data:products,isLoading, error} = useSWR(cacheKey,getProducts, {
  revalidateIfStale:false,
  revalidateOnFocus:false,
  revalidateOnReconnect:false,
})

if(isLoading) return <div>...Loading...</div>

if(error) return <div>...error...</div>
  return (
    <div  className={`cart xl:max-w-[25%] xl:block xl:mt-0 mt-6 max-w-full w-full `}>
    <div className="xl:sticky top-0">
      <div className="bg-white text-black rounded-[3px]">
        <div className="cart-header  border-b-[1px] border-solid border-gray flex items-center justify-between">
        <div className="px-4 py-3">
            <p className='leading-[20px] font-[500] text-xs'>Cart</p>
            
          </div>
          <div className="px-4 py-3">
            <p onClick={deleteCart} className='leading-[20px] font-[500] text-xs text-black-navy underline cursor-pointer'>Delete Cart</p>
          </div>
        </div>
        <div className="cart-body border-b-[1px] border-solid border-gray">
          <div className="cart-list p-4 overflow-y-auto h-[500px]">
            {isLoading? (<div className='text-center'>...loading...</div>) :(<></>)}
            {error? (<div>...error...</div>) :(<></>)}
          {cartItems.map(item => (
            <CartPaidItem key={item.id} {...item}/>
          ))}
            
          </div>
        </div>
        <div className="text-sm text-black font-semibold cart-footer p-4">
          <div className="total flex justify-between">
            <p>Total</p>
            <p>{" "}{formatCurrency(cartItems.reduce((total, cartItem) =>{

const item = products?.find((i:Product) => i.id === cartItem.id)

return total + (item?.price||0) * cartItem.quantity
},0)
)}</p>
          </div>
          <a href='/checkout' className='custom-button1 text-center w-full px-2 py-3'>Paid</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartTotal