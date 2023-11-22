'use client'
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { useState } from "react"
import { useForm } from "react-hook-form"


import CheckoutCartItem from "./checkout-cart-item";
import { formatCurrency } from "@/utils/formatCurrency";
import { useShoppingCart } from "@/context/ShoppingCartContext";

import {Order} from "@/types/order"
import { Product } from "@/types/product";

import { useRouter } from "next/navigation";
import { getProducts, productsURLEndpoint as productsCacheKey } from '@/services/productsAPI';
import useSWR from "swr"
import { addOrder} from '@/services/ordersAPI';
import { getCurrentDateTime } from "@/utils/getCurrentDateTime"
const OrderDetails = () => {
  const router = useRouter();
  const{data:products,isLoading, error} = useSWR(productsCacheKey,getProducts,
    {revalidateIfStale:false,
    revalidateOnFocus:false,
    revalidateOnReconnect:false})

  const{
    cartQuantity,
    cartItems,
     deleteCart
    }= useShoppingCart();

  const [displayCoupon, setDisplayCoupon] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Order>()

  
  const onSubmit = handleSubmit((data) => {
    const total =   cartItems.reduce((total, cartItem) =>{
    const item = products?.find((i:Product) => i.id === cartItem.id)   
    return total + (item?.price||0) * cartItem.quantity},0)
    const cartItemId = cartItems.map(cartItem=> cartItem.id)
    data.orderProducts = products?.filter((product:Product) => cartItemId.includes(product.id))
    data.subTotal = total ;
    data.total = total;
    data.dateTime = getCurrentDateTime();
    if(cartQuantity=== 0){
      alert("You dont have any items in your cart")
      router.push("/")
    }else{
      console.log(data);
      addOrder(data);
      alert("Your order has been sent successfully")
      deleteCart();
    }
  })
      
  return (
    <>
    <form>
      {isLoading?(<div className="text-center">...Loading...</div>):(<></>)}
      {error?(<div className="text-center">...Error...</div>):(<></>)}
      <div className="coupon relative bg-[#f7f6f7] text-[#515151] w-auto mt-0 mb-[2em] mx-0 pl-[3.5em] pr-[2em] py-[1em] border-t-[3px]  border-[#fbb731] border-solid">
        <FontAwesomeIcon className="text-yellow pr-[5px]" icon={faCalendar}/>
        Have a coupon?
        <a onClick={() => setDisplayCoupon(!displayCoupon)} className="hover:text-yellow">Click here to enter your code</a>
      </div>
      <div style={displayCoupon? {display:"block"} : {display:"none"}} className={`coupon-form  border text-left mx-0 my-[2em] p-5 rounded-[5px] border-solid animate__animated animate__fadeInDown border-[#d3ced2]`}>
        <p>If you have a coupon code, please apply it below.</p>
        <div className="form-row float-left p-[3px] mb-1.5 w-[47%]">
          <input {...register("couponCode")} type="text" className=" h-10 border rounded text-[#443737] w-full px-3 py-1.5 border-solid border-[#ccc]" placeholder="Coupon code" />
        </div>
        <div className="form-row float-right w-[47%] p-[3px] mb-1.5">
        <a href="" className="custom-button1 py-3 px-6">Apply Coupon</a>
        </div>
      </div>
      <div className="form__info">
        <div className="float-none md:float-left w-full md:w-[48%] max-w-full">
          <h3 className="text-[40px] leading-[48px] mb-3 pt-0 ">Billing details</h3>
          <div className="mb-[48px]">
            <div className="input-info mt-0 mb-1.5 mx-0 p-[3px] w-[47%] float-left">
              <label className="leading-[2]">First name&nbsp;
              <span className="text-red font-bold">*</span></label>
              <span className="w-full">
                <input {...register("firstName",{required:{value:true,message:"this is required"}})} type="text" className="h-10 border rounded text-text-color px-3 py-1.5 border-solid border-[#ccc] w-full" />
                {errors?.firstName && <p className="text-red">{errors.firstName.message}</p>}
              </span>
            </div>
            <div className="input-info mt-0 mb-1.5 mx-0 p-[3px] w-[47%] float-right">
            <label className="leading-[2]">Last Name&nbsp;
              <span className="text-red font-bold">*</span></label>
              <span className="w-full">
                <input {...register("lastName",{required:{value:true,message:"this is required"}})} type="text"  className="h-10 border rounded text-text-color px-3 py-1.5 border-solid border-[#ccc] w-full" />
                {errors?.lastName && <p className="text-red">{errors.lastName.message}</p>}
              </span>
            </div>
            <div className="mt-0 mb-1.5 mx-0 p-[3px] clear-both">
            <label className="leading-[2]">Company name(optional)&nbsp;
              </label>
              <span className="w-full">
                <input {...register("company")} type="text" className="h-10 border rounded text-text-color px-3 py-1.5 border-solid border-[#ccc] w-full" />
              </span>
            </div>
            <div className="mt-0 mb-1.5 mx-0 p-[3px] clear-both">
            <label className="leading-[2]">Country / Region &nbsp;
              <span className="text-red font-bold">*</span></label>
              <span className="w-full">
                <select {...register("country" ,{required:{value:true,message:"this is required"}})} className="h-10 border rounded text-text-color px-3 py-1.5 border-solid border-[#ccc] w-full">
                  <option value="">Select a country / region…</option>
                  <option value="VN">Viet Nam</option>
                </select>
                {errors?.country && <p className="text-red">{errors.country.message}</p>}
              </span>
            </div>
            <div className="mt-0 mb-1.5 mx-0 p-[3px] clear-both">
            <label className="leading-[2]">Street address &nbsp;
              <span className="text-red font-bold">*</span></label>
              <span className="w-full">
                <input {...register("address",{required:{value:true,message:"this is required"}})} type="text" className="h-10 border rounded text-text-color px-3 py-1.5 border-solid border-[#ccc] w-full" placeholder="House number and street name" />
                {errors?.address && <p className="text-red">{errors.address.message}</p>}
              </span>
            </div>
            <div className="mt-0 mb-1.5 mx-0 p-[3px] clear-both">
            <label className="hidden leading-[2]">Apartment, suite, unit, etc. &nbsp;
              <span className="text-red font-bold">*</span>
              </label>
              <span className="w-full">
                
                <input {...register("apartment")} type="text" className="h-10 border rounded text-text-color px-3 py-1.5 border-solid border-[#ccc] w-full" placeholder="Apartment, suite, unit, etc. (optional)" /> 
                {errors?.apartment && <p className="text-red">{errors.apartment.message}</p>}
              </span>
            </div>
            <div className="mt-0 mb-1.5 mx-0 p-[3px] clear-both">
            <label className="leading-[2]">Postcode / ZIP(optional)&nbsp;
              </label>
              <span className="w-full">
                <input {...register("postCode")} type="number" className="h-10 border rounded text-text-color px-3 py-1.5 border-solid border-[#ccc] w-full"  />
              </span>
            </div>
            <div className="mt-0 mb-1.5 mx-0 p-[3px] clear-both">
            <label className="leading-[2]">Town / City&nbsp;<span className="text-red font-bold">*</span>
              </label>
              <span className="w-full">
                <input {...register("townCity",{required:{value:true,message:"this is required"}})} type="text" className="h-10 border rounded text-text-color px-3 py-1.5 border-solid border-[#ccc] w-full"  />
                {errors?.townCity && <p className="text-red">{errors.townCity.message}</p>}
              </span>
            </div>
            <div className="mt-0 mb-1.5 mx-0 p-[3px] clear-both">
            <label className="leading-[2]">Phone&nbsp;<span className="text-red font-bold">*</span>
              </label>
              <span className="w-full">
                <input {...register("phone", {
                        required: {
                            value: true,
                            message: 'this is required'
                        },
                        pattern: {
                            value: /[0-9]{10,16}/,
                            message: 'must be from 9-16 numbers'
                        }
                    })} type="number" className="h-10 border rounded text-text-color px-3 py-1.5 border-solid border-[#ccc] w-full"  />
                {errors?.phone && <p className="text-red">{errors.phone.message}</p>}
              </span>
            </div>
            <div className="mt-0 mb-1.5 mx-0 p-[3px] clear-both">
            <label className="leading-[2]">Email address&nbsp;<span className="text-red font-bold">*</span>
              </label>
              <span className="w-full">
                <input {...register("email",{required:{
                  value:true,
                  message:"this is required"
                },pattern:{
                  value: /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
                  message:"email invalid"
                }})} type="text" className="h-10 border rounded text-text-color px-3 py-1.5 border-solid border-[#ccc] w-full"  />
                {errors?.email && <p className="text-red">{errors.email.message}</p>}
              </span>
              </div>
          </div>
        </div>
        <div className="float-none md:float-right w-full md:w-[48%] max-w-full">
          <h3>Additional information</h3>
          <div className="additional-form clear-left mt-0 mb-1.5 mx-0 p-[3px] flex flex-wrap">
          <label className="leading-[2]">Order notes(optional)&nbsp;
              </label>
              <span className="w-full">
                <textarea {...register("orderNotes")} placeholder="Notes about your order, e.g. special notes for delivery." className="h-[4em] border rounded text-text-color px-3 py-1.5 border-solid border-[#ccc] w-full"  />
              </span>
          </div>
        </div>
        <div className="total-paid float-left">
          <h3>Your order</h3>

          <table className="shop-table border text-left w-full ml-0 -mr-px mt-0 mb-6 rounded-[5px] border-solid border-[rgba(0,0,0,0.1)] border-separate">
        <thead>
          <tr>
            <th className="product-name font-bold leading-[1.5em] px-3 py-[9px]">Product</th>
            <th className="product-total font-bold leading-[1.5em] px-3 py-[9px]">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <CheckoutCartItem key={item.id} {...item} products={products} />
          ))}
          
        </tbody>
        <tfoot>
          <tr className="cart-subtotal">
            <th className="font-bold border-t-[rgba(0,0,0,0.1)] border-t border-solid leading-[1.5em] px-3 py-[9px]">Subtotal</th>
            <td className="font-bold border-t-[rgba(0,0,0,0.1)] border-t border-solid px-3 py-[9px]">{formatCurrency(cartItems.reduce((total, cartItem) =>{

const item = products?.find((i:Product) => i.id === cartItem.id)

return total + (item?.price||0) * cartItem.quantity
},0)
)}</td>
          </tr>
          <tr className="order-total">
            <th className="font-bold border-t-[rgba(0,0,0,0.1)] border-t border-solid leading-[1.5em] px-3 py-[9px]">Total</th>
            <td className="font-bold border-t-[rgba(0,0,0,0.1)] border-t border-solid px-3 py-[9px]">{formatCurrency(cartItems.reduce((total, cartItem) =>{

const item = products?.find((i:Product) => i.id === cartItem.id)

return  total + (item?.price||0) * cartItem.quantity 
},0)
)}</td>
          </tr>
        </tfoot>
      </table>
      <div className="payment rounded-[5px] bg-[#ebe9eb]">
        <div className="payment-notify text-left m-0 p-[1em] border-b-[#d3ced2] border-b border-solid ">
          <div className="notify-content leading-loose text-left font-normal m-0 border-t-yellow border-t-[3px] border-solid  relative bg-[#f7f6f7] text-[#515151] w-auto mt-0 mb-[2em] mx-0 px-[2em] py-[1em] ">
          <FontAwesomeIcon className="text-yellow pr-5" icon={faCalendar}/>
          <span>Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.</span>
          </div>
        </div>
        <div className="p-[1em] mb-[6px] flex flex-wrap">
          <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#" className="hover:text-yellow text-black-navy">privacy policy</a></p>
          <button type="submit" className="float-none w-full bg-orange text-white rounded-[5px] uppercase leading-[1] cursor-pointer relative px-[1em] py-[0.618em] font-bold border-none md:float-left md:w-auto" onClick={onSubmit}>Place order</button>

        </div>
        
      </div>
        </div>
      </div>

    </form>
    </>
  )
}

export default OrderDetails