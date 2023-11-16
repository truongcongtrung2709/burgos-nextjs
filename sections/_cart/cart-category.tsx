
const CartCategory = () => {
  return (
    <div className="category xl:max-w-[25%] md:max-w-[20%] md:block hidden mr-3">
        <div className="sticky top-0">
          <div className="rounded-[3px] text-black bg-white">
            <div className="category-header border-b-[1px] border-solid border-gray flex items-center justify-between">
              <div className="px-4 py-3">
                <p className='leading-[20px] font-[500] text-xs'>Category</p>
              </div>
            </div>
            <div className="category-body p-2 overflow-y-auto">
              <li className='m-0 mb-2 px-4 py-[6px] overflow-hidden text-xs font-normal'>
                All products
              </li>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CartCategory