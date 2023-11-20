"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "@/utils/formatCurrency";
import { useShoppingCart } from "@/context/ShoppingCartContext"
import { useRouter } from 'next/navigation';
import {motion} from "framer-motion"
import Image from "next/image";
import Rating from "@/components/rating-stars/rating-stars";
type ProductItemProps= {
  id:number,
  image:string,
  name:string,
  oldPrice:string,
  price:number,
  sale:boolean
}

const ProductItem = ({id, image, name, oldPrice,price,sale}:ProductItemProps) => {
  const { increaseCartQuantity} = useShoppingCart()
  const router = useRouter()
  return (
    <>
           <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
              transition={{duration:0.5, delay:0.25}}
           onClick={()=>router.push(`/products/${id}`)} className="group block mb-5 animate__animated animate__fadeIn">
             <div className="product-image mb-[18px] overflow-hidden relative">
               <span style={{display: sale ? "block" : "none"}} className={`absolute z-[1] right-auto left-0  md:left-auto top-[15px] ml-5 md:ml-0 bg-orange text-white md:inline-block md:mb-0 py-[5px] px-[11px] text-[14px] leading-[18px] font-semibold rounded-[14px] md:right-5`}>
                 {sale ?"  Sale!" :null}
               </span>
               <Image
                 src={image}
                 width={500}
                 height={500}
                 alt=""
                 className="group-hover:scale-110 group-hover:transition-all transition-all"
               />
             </div>
             <div className=" relative star-rating w-[129px] h-5 tracking-[10px] mx-auto text-md overflow-hidden text-yellow ">
               <Rating value={3}/>
             </div>
             <h2 className="mt-3 mb-[5px] text-lg leading-[1.6] font-extrabold group-hover:text-orange group-hover:transition-all transition-all">
               {name}
             </h2>
             
             <span className="price block mt-1 text-orange">
               <del className="text-dark-gray" aria-hidden="true">
                 <span className="woocommerce-Price-amount amount">
                  
                   <bdi className="mr-1 text-base leading-4 font-bold text-dark-gray">
                   {oldPrice}
                   </bdi>
                 </span>
               </del>{" "}
               <ins className="no-underline">
                
                 <span className="woocommerce-Price-amount amount">
                  
                   <bdi className="text-2xl leading-8 font-black text-orange no-underline"> 
                    {formatCurrency(price)}
                   </bdi>
                 </span>
               </ins>
             </span>
           </motion.a>
           <button
             className="custom-button1 pl-[30px] pr-[30px] py-[13px] animate__animated animate__fadeIn"
             onClick={()=> increaseCartQuantity(id)}
           >
             Add to cart
           </button>
    </>
  )
}

export default ProductItem