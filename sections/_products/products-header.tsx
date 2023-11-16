import React from 'react'

const ProductHeader = () => {
  return (
    <>
    <nav className='mb-[15px] block text-[15px] font-medium text-text-color md:mb-6 pl-[18px] border-l-2 border-l-yellow border-solid'>
            <a href="/" className='text-[#0c4c7b] font-medium text-[15px]'>Home </a>- 
            <a href="/products" className='text-[#0c4c7b] font-medium text-[15px]'> Products</a>  
          </nav>
          <div className="header-title w-full md:w-auto">
            <h1 className='uppercase text-6xl font-extrabold'>Products</h1>
          </div>
          <p className='result-number mb-[48px] w-full float-left md:mt-0 md:mb-[1em] md:mx-0'>
            Showing all 12 results
          </p>
         
          </>
  )
}

export default ProductHeader