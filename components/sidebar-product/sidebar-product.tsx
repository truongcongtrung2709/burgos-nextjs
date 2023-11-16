import Image from "next/image"

const Sidebar = () => {
  return (
    <div className="relative w-full px-[15px] text-left pl-[15px] lg:pl-[46px] lg:flex-[0_0_33.333333%] lg:max-w-[33.333333%]">
      <div className='search mb-[35px]'>
        <form className="search__content max-w-full lg:max-w-[1000px]">
          <input type="text " placeholder='Search'  className='float-left w-full lg:w-[57.5%] h-[39px] border rounded text-text-color mr-[4.5%] px-3 py-1.5 border-solid border-[#ccc]'/>
          <button type='submit' className='custom-button1 w-auto mt-3 mb-0 mx-auto pt-[11px] pb-2.5 px-[17px] cursor-pointer lg:w-[38%] lg:m-0'>Search</button>
        </form>
      </div>
      <div className='archive mb-[35px]'>
        <h2 className='font-extrabold uppercase leading-none text-[15px] mb-5 px-3 py-[3px] border-l-[3px] border-l-yellow border-solid'>Archives</h2>
        <ul>
          <li>
            <a href="/" className='text-black-navy'>October 2020</a>
          </li>
        </ul>
      </div>
      <div className='latest_posts mb-[35px]'>
        <h2 className='posts-title font-extrabold uppercase leading-none text-[15px] mb-5 px-3 py-[3px] border-l-[3px] border-l-yellow border-solid'>Latest Posts</h2>
        <div className="posts-list mt-[32px]">
          <div className="post-item flex items-start overflow-hidden mt-[14px] mb-[12px] p-0 ">
            <div className='item-left pr-[10px] float-left'>
            <a href="/" className='text-black-navy'>
              <Image src="/assets/images/sb-latest-post1.webp" width={64} height={64}  alt="" />
            </a>
            </div>
            <div className='item-right flex-1 ml-[7px] table-cell align-top'>
              <h3 className='font-bold mb-[6px] text-md leading-normal'>
                <a href="/">Alternative methods of food delivery logistic</a>
              </h3>
              <div className="entry-meta text-[85%] text-[#888] font-normal">
                <span className='hidden'>9:39 pm</span>
                <span>29 Oct 2020</span>
              </div>
            </div>
          </div>
          <div className="post-item flex items-start overflow-hidden mt-[14px] mb-[12px] p-0 ">
            <div className='item-left pr-[10px] float-left'>
            <a href="/" className='text-black-navy'>
              <Image src="/assets/images/sb-latest-post2.webp" width={64} height={64}  alt="" />
            </a>
            </div>
            <div className='item-right flex-1 ml-[7px] table-cell align-top'>
              <h3 className='font-bold mb-[6px] text-md leading-normal'>
                <a href="/">Where and how do we keep the ingridients fresh?</a>
              </h3>
              <div className="entry-meta text-[85%] text-[#888] font-normal">
                <span className='hidden'>9:39 pm</span>
                <span>29 Oct 2020</span>
              </div>
            </div>
          </div>
          <div className="post-item flex items-start overflow-hidden mt-[14px] mb-[12px] p-0 ">
            <div className='item-left pr-[10px] float-left'>
            <a href="/" className='text-black-navy'>
              <Image src="/assets/images/sb-latest-post3.webp" width={64} height={64}  alt="" />
            </a>
            </div>
            <div className='item-right flex-1 ml-[7px] table-cell align-top'>
              <h3 className='font-bold mb-[6px] text-md leading-normal'>
                <a href="/">Not eating meat is decision, eating meat is an instict</a>
              </h3>
              <div className="entry-meta text-[85%] text-[#888] font-normal">
                <span className='hidden'>9:39 pm</span>
                <span>29 Oct 2020</span>
              </div>
            </div>
          </div>
          <div className="post-item flex items-start overflow-hidden mt-[14px] mb-[12px] p-0 ">
            <div className='item-left pr-[10px] float-left'>
            <a href="/" className='text-black-navy'>
              <Image src="/assets/images/sb-latest-post4.webp" width={64} height={64}  alt="" />
            </a>
            </div>
            <div className='item-right flex-1 ml-[7px] table-cell align-top'>
              <h3 className='font-bold mb-[6px] text-md leading-normal'>
                <a href="/">Food trucks – where to stock up on ingridients</a>
              </h3>
              <div className="entry-meta text-[85%] text-[#888] font-normal">
                <span className='hidden'>9:39 pm</span>
                <span>29 Oct 2020</span>
              </div>
            </div>
          </div>
          <div className="post-item flex items-start overflow-hidden mt-[14px] mb-[12px] p-0 ">
            <div className='item-left pr-[10px] float-left'>
            <a href="/" className='text-black-navy'>
              <Image src="/assets/images/sb-latest-post5.webp" width={64} height={64}  alt="" />
            </a>
            </div>
            <div className='item-right flex-1 ml-[7px] table-cell align-top'>
              <h3 className='font-bold mb-[6px] text-md leading-normal'>
                <a href="/">Brie Burger Served With Curly</a>
              </h3>
              <div className="entry-meta text-[85%] text-[#888] font-normal">
                <span className='hidden'>9:39 pm</span>
                <span>29 Oct 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{background:`url("/assets/images/ads.webp")`}} className='ads mb-[35px] bg-cover bg-[center_center] bg-no-repeat text-center px-0 py-[70px]'>
        <h6 className='inline-block text-xs leading-[18px] text-white uppercase mb-1 px-2.5 py-[5px] rounded-[20px] bg-orange'>sale</h6>
        <h5 className='font-black text-6xl leading-[76px] text-white'>-30%</h5>
        <a href="/" className='custom-button1 px-10 py-5 lg:pt-[22px] lg:pb-5 lg:px-[50px]'>buy now</a>
      </div>
    </div>
  )
}

export default Sidebar