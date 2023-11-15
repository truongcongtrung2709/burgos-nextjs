import { useShoppingCart } from '@/context/ShoppingCartContext'
import { formatCurrency } from '@/utils/formatCurrency'
import { Product } from '@/types/product'
import Image from 'next/image'
type CartItemProps = {
  id:number
  quantity:number
  products:Product[];
}
const CartItem = ({id, quantity,products}:CartItemProps) => {

  const {removeFromCart} = useShoppingCart();

  
  
  const item = products?.find((i:Product) => i.id === id);
  if(item ==null) return null;

  return (
    <>
    <li className="mini_cart_item flex leading-[2.5] justify-center overflow-hidden min-h-[100px] mb-3 border-b-[#f2f2f2] border-b border-solid ">
          <section style={{width: '90%'}}>
            <div className="cart_image_item ">
              <Image width={268} height={300} src={item.image} className=" w-20 h-auto shadow-none pr-2.5 float-left max-w-full align-middle ml-1 border-none" alt="" sizes="(max-width: 268px) 100vw, 268px"/>                     
            </div>
            <div className="cart-item-data-field text-md">
              <p className="product_name  text-[#3a3a3a] text-xs font-bold pt-[5px] pb-0 px-0">
                {item.name}                          
              </p>
              <p className="quantity text-[#3a3a3a] italic text-[18px] font-extrabold p-0 rounded-[5px] border-[none]">{quantity} × 
                <span className=" amount">
                  <bdi className='text-orange-color text-[18px] font-extrabold'>
                    {formatCurrency(item.price)}
                  </bdi>
                </span>
              </p>                        
            </div>
          </section>
          <section style={{width: '10%'}}>
            <div className="wc_remove_btn">
              <button onClick={()=>removeFromCart(item.id)} className=" remove_from_cart_button text-[#5f5f5f] border transition-all duration-[0.3s] ease-[ease] border-solid border-transparent" >×</button>                         
               </div>
          </section>
        </li>
    </>
  )
}

export default CartItem