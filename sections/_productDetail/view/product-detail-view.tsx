'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import { Product } from '@/types/product';
import Image from 'next/image';
import { getProductById, productsURLEndpoint as cacheKey } from '@/services/productsAPI';
import useSWR,{preload} from "swr"

preload(cacheKey, getProductById)

const ProductDetailView = () => {
  const {data:productDetails , isLoading,error} = useSWR(cacheKey,getProductById, {
    revalidateIfStale:false,
    revalidateOnFocus:false,
    revalidateOnReconnect:false
  })
  console.log(productDetails)
  const {addAmountCartQuantity} = useShoppingCart();
  const [quantity, setQuantity] = useState(1)
  const [TabDesc, setTabDesc] = useState(true)
  const [TabRev, setTabRev] = useState(false)
  const {productId} = useParams() as{
    productId:string
  };
  
  function handleAddCart () {
    addAmountCartQuantity(parseInt(productId),quantity);
  }
  function handleTabDescription() {
    setTabDesc(true)
    setTabRev(false)
    document.getElementById('tab-content2')?.classList.add('hidden')
    document.getElementById('tab-content1')?.classList.remove('hidden')
  }
  function handleTabReview(){
    setTabRev(true)
    setTabDesc(false)
    document.getElementById('tab-content2')?.classList.remove('hidden')
    document.getElementById('tab-content1')?.classList.add('hidden')
  }

  if(isLoading) return <div>loading</div>
  if(error) return <div>Error</div>
  return (
    <div className='container'>
      <div className="productDetails flex pt-[96px] mb-[35px]">
        <div className="productDetails__content flex-[0_0_100%] max-w-full">
          <nav className='bread-crumb mb-[15px] md:mb-6 block text-[15px] font-medium text-text-color pl-[18px] border-l-2 border-l-yellow border-solid'>
            <a href="/" className='text-black-navy text-[15px] font-medium'>Home</a> -
            <a href="/products" className='text-black-navy text-[15px] font-medium'>Products</a> - {productDetails?.name}
          </nav>
          <div className="productDetails__item relative md:flex flex-wrap">
            <span className={`${productDetails?.sale? "" : "hidden"}sale absolute z-[1] inline-block min-h-[auto] w-auto text-white text-xs leading-[18px] font-semibold m-[15px] p-[5px] rounded-[14px] left-1.5  top-1.5 bg-orange font-nunito`}>Sale!</span>
            <div className="productDetails-left w-full md:w-[40%] mb-[2em]">
              <div className="img-item overflow-hidden relative ">
                <Image src="/assets/images/our-product1.webp" width={1000} height={1119} alt="" />
              </div>
            </div>
            <div className="productDetails-summary mb-[2em] w-full pl-0 clear-none md:w-[60%] md:pl-[58px]">
              <h1 className='text-[35px] leading-[50px] font-extrabold md:text-[44px] md:leading-[65px] uppercase lg:text-6xl lg:leading-[81px] '>{productDetails?.name}</h1>
              <div className="rating">
                <div className="float-left ml-0 mr-1  mb-0 overflow-hidden relative h-[25px] tracking-[10px] w-[129px] text-yellow">
                  <FontAwesomeIcon className='' icon={faStar}/>
                  <FontAwesomeIcon className='px-1' icon={faStar}/>
                  <FontAwesomeIcon className='' icon={faStar}/>
                  <FontAwesomeIcon className='px-1' icon={faStar}/>
                  <FontAwesomeIcon className='' icon={faStar}/>
                </div>
                <a href="#review" className='text-dark-gray ml-3'> (customer reviews)</a>
              </div>
              <p className="price block pt-1  mb-9">
                <span className='text-dark-gray line-through text-[1.25em] mr-[5px]'>{productDetails?.oldPrice}</span>
                <span className='text-3xl leading-[38px] font-extrabold text-yellow mr-[5px]'>${productDetails?.price}.00</span>
              </p>
              <div className="description">
                <p className='text-[15px] mb-5 pt-1'>{productDetails?.desc}</p>
              </div>
              <form className='mb-[2em] mt-[30px] '>
                <div className="quantity float-left mb-3 w-[132px] border mr-5 pt-[13px] pb-3.5 px-[25px] rounded-[5px] border-solid border-[#ccc] flex justify-between items-center">
                  <span className='text-dark-gray text-lg p-0 border-[none] cursor-pointer' onClick={() => quantity===1? setQuantity(1) : setQuantity(quantity-1)}>-</span>
                  <input type="number" value={quantity} readOnly className='w-[3.631em] text-center outline-none'/>
                  <span className='text-dark-gray text-lg p-0 border-[none] cursor-pointer' onClick={() =>{setQuantity(quantity+1)}}>+</span>
                </div>
                <button className='custom-button1 uppercase px-10 py-5 align-middle lg:px-[50px] lg:pt-[22px] pb-[20px]' onClick={handleAddCart}>Add To Cart</button>
              </form>
              <div className="productDetail-meta">
                <span className='text-text-color uppercase block font-bold mb-1.5'>
                  Category:
                  <a className='pl-[6px] uppercase' href="">burgers</a>
                </span>
              </div>

            </div>
            <div className="tabs-container w-full lg:w-[80%] mx-auto pt-4 pb-[55px] px-0 clear-both">
              <ul className="wc-tabs  relative md:flex md:justify-center text-center mt-0 mb-6 mx-0 p-0">
                <li className='description_tab bg-white  z-[2] relative  p-0 my-3 mx-0 md:mx-[-5px] md:my-0 md:px-[1em] md:py-0'>
                  <a onClick={handleTabDescription} className={`${TabDesc ? "text-orange border-orange":"text-text-color border-text"} placeholder:file:border-solid border-[1px] rounded-[5px] font-medium px-9 py-1.5 my-3 mx-0 md:m-0 uppercase w-full block md:inline-block`}>Description</a>
                </li>
                <li className='description_tab bg-white  z-[2] relative  p-0 my-3 mx-0 md:mx-[-5px] md:my-0 md:px-[1em] md:py-0'>
                  <a onClick={handleTabReview} className={`${TabRev ? "text-orange border-orange":"text-text-color border-text"} border-solid border-[1px] rounded-[5px]  font-medium px-9 py-1.5 my-3 mx-0 md:m-0 uppercase w-full block md:inline-block`}>Review(2)</a>
                </li>
              </ul>
              <div id='tab-content1' className={`${TabDesc ?"" :""}tab-content1 mt-0 mb-[2em] mx-0 p-0`}>
                <h2 className='text-3xl text-center mb-0'>Description</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="weight row bg-[#f8f8f8] p-[0.5rem] m-0">
                  <div className='flex-[0_0_100%] max-w-full col xs:flex-[0_0_16.666667%] xs:max-w-[16.666667%]'>Weight:</div>
                  <div className='flex-[0_0_100%] max-w-full col xs:flex-[0_0_50%] xs:max-w-[50%]'>
                    <span className='text-[15px] font-extrabold text-text-color font-lato'>345g</span>
                  </div>
                </div>
                <div className="ingridients row bg-[#E7E7E7] mb-3 p-[0.5rem] m-0">
                  <div className='col flex-[0_0_100%] max-w-full xs:flex-[0_0_16.666667%] xs:max-w-[16.666667%]'>Ingridients:</div>
                  <div className='flex-[0_0_100%] max-w-full col xs:flex-[0_0_50%] xs:max-w-[50%]'>
                    <span className='text-[15px] font-extrabold text-text-color font-lato'>Duis vitae justo tempor, vulputate libero sit amet, lacinia nulla. Fusce eu turpis quis</span>
                  </div>

                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>

              <div id='tab-content2' className={`${TabRev ? "": ""} hidden tab-content2 mt-0 mb-[2em] mx-0 p-0`}>
                <div className='comment'>
                  <h2 className='title-comment text-3xl leading-[56px] font-semibold mb-[18px] text-center'>
                  2 reviews for <span className='text-3xl leading-[56px] font-semibold'>{productDetails?.name}</span>
                  </h2>
                  <ol className='comment-list m-0 w-full mb-[46px] '>
                    <li className='comment-item mb-3'>
                      <div className="comment-container relative border pl-1.5 pr-3 py-1.5 rounded-[3px] border-solid border-[#cccccc]">
                        <Image src="/assets/images/icons/avatar.png" width={60} height={60} className='float-left  w-8 h-auto border shadow-none m-0 p-0 border-solid border-[#e4e1e3] bg-[#ebe9eb] absolute left-6 top-6' alt="" />
                        <div className="comment-text rounded ml-[50px] mr-0 my-0 pt-[1em] pb-0 px-[1em]">
                          <div className="star-rating float-right leading-[1] mt-[-3px] overflow-hidden relative h-[25px] text-base tracking-[10px] w-[129px]  ml-0 -mr-3.5 mb-0 text-yellow">
                          <FontAwesomeIcon icon={faStar}/>
                          <FontAwesomeIcon className='px-1' icon={faStar}/>
                          <FontAwesomeIcon className='' icon={faStar}/>
                          <FontAwesomeIcon className='px-1' icon={faStar}/>
                          <FontAwesomeIcon icon={faStar}/>
                          </div>
                          <p className='meta text-[15px] mt-[-9px] leading-[1.7] text-[#767676  mb-[1em] mx-0]'>
                            <strong className='font-[800] text-[16px] text-black-navy mb-0'>admin</strong>
                            <span className='text-[15px]'>-</span>
                            <time className='italic text-[15px] text-[#979797]'>November 5, 2020</time>
                          </p>
                          <div className="description">
                            <p className='mb-[1em] leading-[1.7]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='comment-item mb-3'>
                      <div className="comment-container relative border pl-1.5 pr-3 py-1.5 rounded-[3px] border-solid border-[#cccccc]">
                        <Image src="/assets/images/icons/avatar.png" width={60} height={60} className='float-left  w-8 h-auto border shadow-none m-0 p-0 border-solid border-[#e4e1e3] bg-[#ebe9eb] absolute left-6 top-6' alt="" />
                        <div className="comment-text rounded ml-[50px] mr-0 my-0 pt-[1em] pb-0 px-[1em]">
                          <div className="star-rating float-right leading-[1] mt-[-3px] overflow-hidden relative h-[25px] text-base tracking-[10px] w-[129px]  ml-0 -mr-3.5 mb-0 text-yellow">
                          <FontAwesomeIcon icon={faStar}/>
                          <FontAwesomeIcon className='px-1' icon={faStar}/>
                          <FontAwesomeIcon className='' icon={faStar}/>
                          <FontAwesomeIcon className='px-1' icon={faStar}/>
                          <FontAwesomeIcon icon={faStar}/>
                          </div>
                          <p className='meta text-[15px] mt-[-9px] leading-[1.7] text-[#767676  mb-[1em] mx-0]'>
                            <strong className='font-[800] text-[16px] text-black-navy mb-0'>admin</strong>
                            <span className='text-[15px]'>-</span>
                            <time className='italic text-[15px] text-[#979797]'>November 5, 2020</time>
                          </p>
                          <div className="description">
                            <p className='mb-[1em] leading-[1.7]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                          </div>
                        </div>
                      </div>
                    </li>
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
                    <input type="text" className='h-10 border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]' required/>
                    </p>
                    <p className='comment-form-emails mt-0 mb-2.5 mx-0 max-w-[58rem]'>
                    <label className=' text-[#979797]'>Email&nbsp;<span className="required  text-[#979797] align-middle">*</span></label>
                    <input type="text" className='h-10 border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]' required/>
                    </p>
                    <div className="comment-form-rating">
                      <label className='text-[#979797]'>Your rating&nbsp;<span className="required text-[15px]">*</span>
                      </label>
                      <p className="stars mt-0 mb-2.5 mx-0 max-w-[58rem]">
                        <span className='text-[15px] text-[#979797]'>							
                          <a className="star-1" href="#">
                            <FontAwesomeIcon className="text-[#979797]" icon={faStar}/>
                            </a>							
                          <a className="star-2" href="#">
                            <FontAwesomeIcon className="text-[#979797]" icon={faStar}/>
                            </a>							
                          <a className="star-3" href="#">
                            <FontAwesomeIcon className="text-[#979797]" icon={faStar}/>
                            </a>							
                          <a className="star-4" href="#">
                            <FontAwesomeIcon className="text-[#979797]" icon={faStar}/>
                            </a>							
                          <a className="star-5" href="#">
                            <FontAwesomeIcon className="text-[#979797]" icon={faStar}/>
                            </a>						
                        </span>					
                      </p>
                      <select className='h-10 border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]' name="rating" id="rating" required style={{display: "none"}}>
                        <option value="">Rate…</option>
                        <option value="5">Perfect</option>
                        <option value="4">Good</option>
                        <option value="3">Average</option>
                        <option value="2">Not that bad</option>
                        <option value="1">Very poor</option>
                      </select>
                    </div>
                    <p className='comment-form-comment mt-0 mb-2.5 mx-0 max-w-[58rem]'>
                    <label className=' text-[#979797]'>Your review&nbsp;<span className="required  text-[#979797] align-middle">*</span></label>
                    <textarea  className='h-[75px]  border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]' cols={45} rows={8} required/>
                    </p>
                    <p className='comment-form-checkBox mt-0 mb-2.5 mx-0 max-w-[58rem]'>
                      <input type="checkbox" className='mr-[5px]'/>
                      <label className='leading-[1.25] text-[#979797]'>Save my name, email, and website in this browser for the next time I comment.</label>
                    </p>
                    <div className="btn-submit text-right">
                      <button className='uppercase custom-button1 mt-0 mb-2.5 mx-0 max-w-[58rem] pt-2.5 pb-2 px-4'>Submit</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
            <section className='related w-full'>
              <h2 className='font-extrabold uppercase mb-[38px] text-center p-0'>Related products</h2>
              <ul className='products mt-0 mb-[1em] mx-0 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5'>
                <li className='product text-center w-full mt-0 mb-[2.992em] mx-0'>
                  <a href="/" className='text-3xl leading-[38px] font-semibold overflow-hidden m-0'>
                    <div className="wrap-img mb-[18px]">
                      <Image src={"/assets/images/our-product1.webp"} alt="" width={500} height={500} />
                    </div>
                    <div className='star-rating overflow-hidden relative tracking-[10px] w-[129px] mt-5 text-yellow mx-auto text-[15px]'>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon className='px-1' icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon className='px-1' icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <h2 className='text-center font-extrabold text-lg leading-8 mt-3 mb-[5px]'>Burger Bomb</h2>
                    <p className='font-black text-center text-orange mt-1.5 font-nunito text-[26px]'>$9.00</p>
                  </a>
                  <button className='custom-button1 pt-[13px] pb-3 px-[30px]'>Add To Cart</button>
                </li>
                <li className='product text-center w-full mt-0 mb-[2.992em] mx-0'>
                  <a href="/" className='text-3xl leading-[38px] font-semibold overflow-hidden m-0'>
                    <div className="wrap-img mb-[18px]">
                      <Image src="/assets/images/our-product2.webp" alt="" width={500} height={500} />
                    </div>
                    <div className='star-rating overflow-hidden relative tracking-[10px] w-[129px] mt-5 text-yellow mx-auto text-[15px]'>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon className='px-1' icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon className='px-1' icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <h2 className='text-center font-extrabold text-lg leading-8 mt-3 mb-[5px]'>Burger Bomb</h2>
                    <p className='font-black text-center text-orange mt-1.5 font-nunito text-[26px]'>$9.00</p>
                  </a>
                  <button className='custom-button1 pt-[13px] pb-3 px-[30px]'>Add To Cart</button>
                </li>
                <li className='product text-center w-full mt-0 mb-[2.992em] mx-0'>
                  <a href="/" className='text-3xl leading-[38px] font-semibold overflow-hidden m-0'>
                    <div className="wrap-img mb-[18px]">
                      <Image src="/assets/images/our-product3.webp" alt="" width={500} height={500} />
                    </div>
                    <div className='star-rating overflow-hidden relative tracking-[10px] w-[129px] mt-5 text-yellow mx-auto text-[15px]'>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon className='px-1' icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon className='px-1' icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <h2 className='text-center font-extrabold text-lg leading-8 mt-3 mb-[5px]'>Burger Bomb</h2>
                    <p className='font-black text-center text-orange mt-1.5 font-nunito text-[26px]'>$9.00</p>
                  </a>
                  <button className='custom-button1 pt-[13px] pb-3 px-[30px]'>Add To Cart</button>
                </li>
                <li className='product text-center w-full mt-0 mb-[2.992em] mx-0'>
                  <a href="/" className='text-3xl leading-[38px] font-semibold overflow-hidden m-0'>
                    <div className="wrap-img mb-[18px]">
                      <Image src="/assets/images/our-product4.webp" alt="" width={500} height={500} />
                    </div>
                    <div className='star-rating overflow-hidden relative tracking-[10px] w-[129px] mt-5 text-yellow mx-auto text-[15px]'>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon className='px-1' icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon className='px-1' icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <h2 className='text-center font-extrabold text-lg leading-8 mt-3 mb-[5px]'>Burger Bomb</h2>
                    <p className='font-black text-center text-orange mt-1.5 font-nunito text-[26px]'>$9.00</p>
                  </a>
                  <button className='custom-button1 pt-[13px] pb-3 px-[30px]'>Add To Cart</button>
                </li>
              </ul>

            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailView