'use client'
import BlogItem from './blog-item'
import { Blog } from '@/types/blog';
import { getBlogs, blogsURLEndpoint as cacheKey } from '@/services/blogsAPI';
import useSWR from "swr"
const BlogList = () => {
  const {data:blogs, isLoading, error} = useSWR(cacheKey,getBlogs, {
    revalidateIfStale:false,
    revalidateOnFocus:false,
    revalidateOnReconnect:false
  })
  if(isLoading) return <div className='text-center relative w-full px-[15px] lg:flex-[0_0_66.666667%] lg:max-w-[66.666667%]'>...Loading...</div>
  if(error) return  <div className='text-center'>...Error...</div>
  
  return (
    <div className="relative w-full px-[15px] lg:flex-[0_0_66.666667%] lg:max-w-[66.666667%]">
      {blogs?.map((blog:Blog) =>(
        <article key={blog.id} className='blog-grid pb-[72px]'>
      <BlogItem {...blog}/>
        </article>
      ))}
    </div>
  )
}

export default BlogList