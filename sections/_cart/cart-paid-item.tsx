'use client'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useShoppingCart } from '@/context/ShoppingCartContext'
import { Product } from '@/types/product'
import { getProducts,productsURLEndpoint as cacheKey } from '@/services/productsAPI'
import useSWR from "swr"

type CartTotalProps = {
  id:number,
  quantity:number
}
const PaidCartItem = ({id,quantity} : CartTotalProps) => {
  const {increaseCartQuantity, decreaseCartQuantity} = useShoppingCart()

  const {data:products,isLoading, error} = useSWR(cacheKey,getProducts, {
    revalidateIfStale:false,
    revalidateOnFocus:false,
    revalidateOnReconnect:false,
  })
  
    const item = products?.find((i:Product) => i.id === id);
    if(item ==null) return null;
  


  
 
  return (
    <>
    <div className="cart-item flex justify-between">
                    <h3 className='text-sm text-black font-semibold mr-2'>{item.name}</h3>
                    {isLoading ? (<div className='text-center'>...Loading...</div>) : (<></>)}
                    {error ? (<div className='text-center'>...Error...</div>) : (<></>)}
                  <div className="quantity flex items-center">
                  <button onClick={()=>decreaseCartQuantity(id)} className='bg-hero-pattern w-5 h-5 rounded-full'><FontAwesomeIcon className='text-white p-[2px] ' icon={faMinus}/></button>
                  <div  className='w-10 text-center'>
                    {quantity}
                  </div>
                  <button onClick={()=>increaseCartQuantity(id)} className='bg-hero-pattern w-5 h-5 rounded-full'><FontAwesomeIcon className='text-white p-[2px] ' icon={faPlus}/></button>
                  </div>
                </div>
                  <input type="text" placeholder='note...' className='w-full text-center'  />
                  </>
  )
}

export default PaidCartItem