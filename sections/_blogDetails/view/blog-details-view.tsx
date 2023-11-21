"use client"
import Sidebar from '@/components/sidebar-product/sidebar-product'

import { useParams } from 'next/navigation'
import useSWR from "swr"
import { blogsURLEndpoint as cacheKey } from '@/services/blogsAPI'
import fetcher from '@/services/fetcher'
import BlogArticle from '../blog-article'
const BlogDetails = () => {
  const {blogId} = useParams();
  
  const {data:blogDetails}:any = useSWR(() => cacheKey + "/" + blogId,fetcher,{
    revalidateIfStale:false,
    revalidateOnFocus:false,
    revalidateOnReconnect:false
  })  
  
  return (
    <section className='index-post-wrapper pb-[46px] lg:px-[72px]'>
      <div className="container">
        <div className="post-content row">
          <div className="col lg:flex-[0_0_66.666667%]">
            <BlogArticle blogDetails={blogDetails?.data}/>
          </div>
          <Sidebar/>
        </div>
      </div>
    </section>
  )
}

export default BlogDetails