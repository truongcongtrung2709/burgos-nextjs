'use client'
import BlogItem from './blog-item'
import { Blog } from '@/types/blog';
import { getBlogs, blogsURLEndpoint as cacheKey } from '@/services/blogsAPI';
import useSWR,{mutate} from "swr"
import { useEffect } from 'react';

const BlogList = () => {
  const {data:blogs, isLoading, error} = useSWR(cacheKey,getBlogs, {
    revalidateIfStale:false,
    revalidateOnFocus:false,
    revalidateOnReconnect:false
  })
  useEffect(() => {
    mutate(cacheKey)
  })
  return (
    <div className="relative w-full px-[15px] lg:flex-[0_0_66.666667%] lg:max-w-[66.666667%]">
      {isLoading? (<div className='text-center'>...loading...</div>) :(<></>)}
      {error? (<div>...error...</div>) :(<></>)}
      {blogs?.map((blog:Blog) =>(
        <article key={blog.id} className='blog-grid pb-[72px]'>
      <BlogItem {...blog}/>
        </article>
      ))}
    </div>
  )
}

export default BlogList