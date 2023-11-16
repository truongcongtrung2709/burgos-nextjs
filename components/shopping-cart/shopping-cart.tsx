import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useShoppingCart } from '@/context/ShoppingCartContext';
import CartItem from './shopping-cart-item';
import { formatCurrency } from '@/utils/formatCurrency';
import { Product } from '@/types/product';
import Link from 'next/link';
import useSWR,{preload} from 'swr'
import { getProducts,productsURLEndpoint as cacheKey } from "@/services/productsAPI";
type ShopingCartProps={
  isOpen?: boolean
}
preload(cacheKey,getProducts)
const ShoppingCart = ({isOpen} : ShopingCartProps) => {
  
  const {closeCart,openCart, cartQuantity, cartItems}= useShoppingCart();

    const{data:products, isLoading, error} = useSWR(cacheKey,getProducts, 
      {revalidateIfStale:false, revalidateOnFocus:false,revalidateOnReconnect:false})
    if(isLoading) {
      return <div className="text-center">...Loading</div>
    }
    if(error){
      return <div className="text-center">false to get data</div>
    }
    
  return (
    <div className="shopping_cartwrapper">
        <div onClick={openCart} className={`shopping-cart flex z-[2] fixed cursor-pointer rounded-[50%] left-[4%] bottom-[1%]`} >
          <span className="shopping-cart text-yellow leading-[1] text-[40px]"><FontAwesomeIcon icon={faCartShopping} /> </span> 
            <span id="mini-cart-count_footer" className=' bg-[#fd0000] text-white right-[-9px] text-center text-[12px] leading-[21px] min-w-[12px] transition-transform duration-[0.3s] absolute font-semibold px-[7px] py-0 rounded-[2rem] top-0'>
            {cartQuantity}     
            </span>
          </div>
          <div id="pm_menu" className={`${isOpen ? "" :"invisible"} pm_open fixed h-full w-[300px] z-[999999]  text-center  ease-[ease] top-0 right-0 bg-white`}>
            <div className="close-btnWrap text-left pl-[10%] bg-dark-gray">
              <span onClick={closeCart} className="close-btn w-full block cursor-pointer">×</span>
            </div>
        <div className="car_count_title">
        <ul className=" cart_list_widget h-[calc(100vh_-_150px)] overflow-y-auto text-black m-0 p-2.5 text-left py-6 leading-6 text-[15px]">
          {cartItems.map(item=>(
            <CartItem key={item.id} {...item} products={products}/>
          ))}
        
      </ul>
      <div className="wcf-min-bottom-part w-full absolute mt-[10%] bottom-0 bg-[#ddd]">
        <p className="sub_total_cat text-lg font-extrabold mb-0 font-nunito mt-[5%] text-[#000] pt-[10px] m-0">Sub Total:{" "}{formatCurrency(cartItems.reduce((total, cartItem) =>{

          const item = products?.find((i:Product) => i.id === cartItem.id)
          
          return total + (item?.price||0) * cartItem.quantity
        },0)
        )}
        </p>
        <p className="woo-commerce_mini_cart_button uppercase text-sm rounded font-normal inline-block min-w-[100px] min-h-[31px] mb-[22px] pt-1">
          <Link className='text-white rounded inline-block min-w-[100px] min-h-[31px]  font-bold transition-all duration-[0.3s] ease-[ease] mx-2.5 my-0 p-2 bg-orange' href="/cart">Cart</Link>
        </p>
        <p className="woo-commerce_mini_cart_button uppercase text-sm rounded font-normal inline-block min-w-[100px] min-h-[31px] mb-[22px] pt-1">
          <Link href='/checkout' onClick={()=>closeCart}  className=' bg-orange inline-block min-w-[100px] min-h-[31px] text-white font-bold transition-all duration-[0.3s] ease-[ease] mx-2.5 my-0 p-2 uppercase'>Checkout</Link>
        </p>
      </div>
          <p className="cart__empty_message absolute w-full text-xl text-black -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 hidden">No product in the cart.</p>
        </div>
        </div>
        <div onClick={closeCart}  style={{visibility: isOpen? 'visible': 'hidden'}} className={`pm_overlay w-full h-full fixed z-[1000] invisible bg-black-overlay  m-0 p-0 left-0 top-0`}></div>
      </div>
  )
}

export default ShoppingCart