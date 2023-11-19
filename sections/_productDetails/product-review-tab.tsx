import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar  } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Rating from '@/components/rating-stars/rating-stars';
import { Product, Review } from '@/types/product';
import { useForm } from 'react-hook-form';
import { addReviewById } from '@/services/reviewsAPI';
import { useParams } from 'next/navigation';
type Props = {
  review:Review[]
  productDetails: Product
}

const ProductReviewsTab = ({review,productDetails} : Props) => {
  const {productId} = useParams() as{
    productId: string
  }
  const [rating, setRating] = useState<number>(0)
  const [hover,setHover] =  useState<any>(null)
  
  const {register,handleSubmit,formState:{errors}} =useForm<Review>();

  const onSubmit = handleSubmit((data,e:any) => {
    e.preventDefault();
    console.log(data);
    addReviewById(data,productId)
  })
  return (
    <div id='tab-content2' className={` hidden tab-content2 mt-0 mb-[2em] mx-0 p-0`}>
      <div className='comment'>
        
        <h2 className='title-comment text-3xl leading-[56px] font-semibold mb-[18px] text-center'>
        {review?.length} reviews for <span className='text-3xl leading-[56px] font-semibold'>{productDetails?.name}</span>
        </h2>
        <ol className='comment-list m-0 w-full mb-[46px] '>
          {review?.map((review,index) => (
          <li key={index} className='comment-item mb-3'>
          <div className="comment-container relative border pl-1.5 pr-3 py-1.5 rounded-[3px] border-solid border-[#cccccc]">
            <Image src="/assets/images/icons/avatar.png" width={60} height={60} className='float-left  w-8 h-auto border shadow-none m-0 p-0 border-solid border-[#e4e1e3] bg-[#ebe9eb] absolute left-6 top-6' alt="" />
            <div className="comment-text rounded ml-[50px] mr-0 my-0 pt-[1em] pb-0 px-[1em]">
              <div className="star-rating float-right leading-[1] mt-[-3px] overflow-hidden relative h-[25px] text-base tracking-[10px] w-[129px]  ml-0 -mr-3.5 mb-0 text-yellow">
              <Rating value={review?.rating}/>
              </div>
              <p className='meta text-[15px] mt-[-9px] leading-[1.7] text-[#767676  mb-[1em] mx-0]'>
                <strong className='font-[800] text-[16px] text-black-navy mb-0'>{review?.name}</strong>
                <span className='text-[15px]'> - </span>
                <time className='italic text-[15px] text-[#979797]'>{review?.date}</time>
              </p>
              <div className="description">
                <p className='mb-[1em] leading-[1.7]'>{review?.comment}</p>
              </div>
            </div>
          </div>
        </li>
          ))}
          
        </ol>
      </div>
      <div className='review_form'>
        <span className='block text-center text-3xl font-extrabold leading-[52px] text-black-navy uppercase font-nunito'>Add a review </span>
        <form className="z-[1] w-full float-left">
          <p className='comment-notes mt-0 mb-2.5 mx-0 block text-center font-semibold'>
            <span className='email-notes text-[15px]'>Your email address will not be published.</span>
            <span className='required-field-message text-[15px]'>Required fields are marked  </span>
            <span className='text-[15px]'>*</span>
          </p>
          <p className='comment-form-author mt-0 mb-2.5 mx-0 max-w-[58rem]'>
          <label className=' text-[#979797]'>Name&nbsp;<span className="required  text-[#979797] align-middle">*</span></label>
          <input type="text" className='h-10 border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]'  {...register("name",
          {required:{
            value:true,
            message: "this is required",
          }})}/>
          {errors?.name && <p className="text-red">{errors.name.message}</p>}
          </p>
          <p className='comment-form-emails mt-0 mb-2.5 mx-0 max-w-[58rem]'>
          <label className=' text-[#979797]'>Email&nbsp;<span className="required  text-[#979797] align-middle">*</span></label>
          <input type="text" className='h-10 border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]'  {...register("email",{required:{
                  value:true,
                  message:"this is required"
                },pattern:{
                  value: /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
                  message:"email invalid"
                }})}/>
                {errors?.email && <p className="text-red">{errors.email.message}</p>}
          </p>
          <div className="comment-form-rating">
            {[...Array(5)].map((star, index) =>{
              const currentRating:number = index + 1;
              return (
                <label key={index}>
                  <input className='hidden' type="radio"  value={currentRating} onClick={()=>setRating(currentRating)}
                  {...register("rating",{required:{
                    value:true,
                    message: "this is required"
                  }})}
                  />
              <FontAwesomeIcon  className={`${currentRating <= (hover || rating) ? "text-yellow" : "text-gray"} cursor-pointer`} icon={faStar} onMouseEnter={() => setHover(currentRating)} onMouseLeave={()=> setHover(null)}/>
              </label>
              )
            })}
            
            {errors?.rating && <p className="text-red">{errors.rating.message}</p>}
          </div>
          <p className='comment-form-comment mt-0 mb-2.5 mx-0 max-w-[58rem]'>
          <label className=' text-[#979797]'>Your review&nbsp;<span className="required  text-[#979797] align-middle">*</span></label>
          <textarea  className='h-[75px]  border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]' cols={45} rows={8} {...register("comment",{required:{
            value:true,
            message:"this is required"
          }})}/>
          {errors?.comment && <p className="text-red">{errors.comment.message}</p>}
          </p>
          <p className='comment-form-checkBox mt-0 mb-2.5 mx-0 max-w-[58rem]'>
            <input type="checkbox" className='mr-[5px]'/>
            <label className='leading-[1.25] text-[#979797]'>Save my name, email, and website in this browser for the next time I comment.</label>
          </p>
          <div className="btn-submit text-right">
            <button onClick={onSubmit} className='uppercase custom-button1 mt-0 mb-2.5 mx-0 max-w-[58rem] pt-2.5 pb-2 px-4'>Submit</button>
          </div>
        </form>
      </div>
    TP</div>
  )
}

export default ProductReviewsTab