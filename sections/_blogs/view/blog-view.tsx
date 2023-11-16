
import BlogList from '../blog-list'
import Sidebar from '@/components/sidebar-product/sidebar-product'
import Banner from '@/components/banner/banner'
const BlogView = () => {
  const bannerInfo = {
    name: 'Blogs',
    description:'Diam ut venenatis tellus in metus vulputate eu. Placerat in egestas erat imperdiet. Velit euismod in pellentesque massa placerat duis.',
    bannerImg : 'assets/images/bg-blog.webp'
  }

  return (
    <div className='bg-white'>
      <Banner name={bannerInfo.name} description={bannerInfo.description} bannerImage={bannerInfo.bannerImg}/>
      <div className="container">
        <div className="blog-grid-wrapper flex flex-wrap mx-[15px] text-center md:text-start pt-24 pb-[70px] lg:pt-[120px] lg:pb-[46px]">
            <BlogList/>
            <Sidebar/>
        </div>
      </div>
    </div>
  )
}

export default BlogView