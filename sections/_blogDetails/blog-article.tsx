 /* eslint-disable @next/next/no-img-element */
import { Blog } from '@/types/blog'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faCalendar, faFolder, faUserCircle } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image'

type Props = {
  blogDetails:Blog
}
const BlogArticle = ({blogDetails}:Props) => {
  return (
    <article>
              <div className="single-title mt-24 row ">
                <div className="title-wrapper flex-[0_0_100%] max-w-full">
                  <h2 className='text-6xl leading-[72px] uppercase font-black mt-5 mb-10 mx-0 pt-0 pb-10 px-0 border-b-2 border-b-[rgba(0,0,0,0.2)] border-solid'>{blogDetails?.title}</h2>
                <ul className="meta-list relative w-full mb-10 pt-[18px]">
                  <li className='inline-block text-[15px] text-[#979797] leading-6 mr-6 mb-3'>
                    <FontAwesomeIcon className='text-yellow-color mr-[5px]' icon={faCalendar}/>
                    <span className='text-[#666666] leading-[1.6]'>{blogDetails?.dateTime}</span>
                  </li>
                  <li className='inline-block text-[15px] text-[#979797] leading-6 mr-6 mb-3'>
                  <FontAwesomeIcon className='text-yellow-color mr-[5px]' icon={faUserCircle}/>
                    <span className='text-[#666666] leading-[1.6]'>{blogDetails?.dateTime}</span>
                  </li>
                  <li className='inline-block text-[15px] text-[#979797] leading-6 mr-6 mb-3'>
                  <FontAwesomeIcon className='text-yellow-color mr-[5px]' icon={faFolder}/>
                    <span className='text-[#666666] leading-[1.6]'>{blogDetails?.dateTime}</span>
                  </li>
                </ul>

                </div>

              </div>
              <div className="post-img text-center">
                <img src={blogDetails?.img} alt="" width={1920} height={1000} className='max-w-full' />
              </div>
              <div className="post-text row pt-6">
                <div className="post-content flex-[0_0_100%] max-w-full">
                  <p>{blogDetails?.content.split("\n")[0]}</p>
                  <p>{blogDetails?.content.split("\n")[1]}</p>
                  <div className="split-p flex flex-wrap md:flex-nowrap gap-[2em]">
                    <div className='basis-full grow break-words md:basis-0 '>
                      <p>{blogDetails?.content.split("\n")[2]}</p>
                    </div>
                    <div className='basis-full grow break-words md:basis-0 '>
                      <p>{blogDetails?.content.split("\n")[3]}</p>
                    </div>
                  </div>
                  <p>{blogDetails?.content.split("\n")[4]}</p>
                  <p>{blogDetails?.content.split("\n")[5]}</p>
                  <p>{blogDetails?.content.split("\n")[6]}</p>
                  <p>{blogDetails?.content.split("\n")[7]}</p>
                  <div className="flex flex-wrap md:flex-nowrap gap-[2em] mb-[1.75em]">
                    <ul className='basis-full grow break-words md:basis-0 '>
                      <li>1.{blogDetails?.content.split("\n")[8]}</li>
                      <li>2.{blogDetails?.content.split("\n")[9]}</li>
                      <li>3.{blogDetails?.content.split("\n")[10]}</li>
                    </ul>
                    <ul className='basis-full grow break-words md:basis-0 '>
                    <li><FontAwesomeIcon className='text-yellow-color pr-[5px]' icon={faArrowAltCircleRight}/>{blogDetails?.content.split("\n")[11]}</li>
                      <li><FontAwesomeIcon className='text-yellow-color pr-[5px]' icon={faArrowAltCircleRight}/>{blogDetails?.content.split("\n")[12]}</li>
                      <li><FontAwesomeIcon className='text-yellow-color pr-[5px]' icon={faArrowAltCircleRight}/>{blogDetails?.content.split("\n")[13]}</li>
                    </ul>
                  </div>
                  <blockquote className='px-9 py-12 border-l-8 border-l-yellow-color border-y-[none] border-solid break-words mb-[1.75em]'>
                    <p className='font-nunito text-lg leading-7 font-semibold text-black-navy-color'>{blogDetails?.blockQuote.split("\n")[0]}</p>
                    <cite className='text-lg text-orange-color leading-7 font-semibold italic normal-case'>{blogDetails?.blockQuote.split("\n")[1]}</cite>
                  </blockquote>
                  <p>{blogDetails?.content.split("\n")[14]}</p>
                  <p>{blogDetails?.content.split("\n")[15]}</p>
                  <p>{blogDetails?.content.split("\n")[16]}</p>
                  
                </div>

              </div>
            </article>
  )
}

export default BlogArticle