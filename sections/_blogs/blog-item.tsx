import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

type BlogItemProps = {
  id:number,
   title:string,
   dateTime:string,
   author:string,
   category:string,
   img: string
}


const BlogItem = ({id,title,dateTime,author,category,img}:BlogItemProps) => {
  return (
    <>
      <div  className="blog-img text-center">
        <a href={`/blogs/${id}`} className='block overflow-hidden'>
          <Image src={img} width={900} height={500} alt="" />
        </a>
      </div>
      <div className="blog-text">
        <ul className='meta-list block pt-[18px] px-0 pb-0 w-max-full w-full relative '>
          <li className='inline-block text-[15px] text-dark-gray leading-6 mr-6 mb-3'>
            <FontAwesomeIcon className='text-yellow mr-[5px]' icon={faCalendar}/>
            <span className='leading-[1.6] text-[#666666]'>{dateTime}</span>
          </li>
          <li className='inline-block text-[15px] text-dark-gray leading-6 mr-6 mb-3'>
            <FontAwesomeIcon className='text-yellow mr-[5px]' icon={faCalendar}/>
            <span className='leading-[1.6] text-[#666666]'>{author}</span>
          </li>
          <li className='inline-block text-[15px] text-dark-gray leading-6 mr-6 mb-3'>
            <FontAwesomeIcon className='text-yellow mr-[5px]' icon={faCalendar}/>
            <span className='leading-[1.6] text-[#666666]'>{category}</span>
          </li>
        </ul>
        <a href={`/blogs/${id}`}>
          <h2 className='blog-title text-center md:text-left text-2xl leading-9 font-black uppercase text-black-navy mb-6 md:text-3xl md:leading-[38px] transition-all duration-[0.3s] ease-[ease]'>{title}</h2>
        </a>
        <a href={`/blogs/${id}`}  className='custom-button1 uppercase px-10 py-5 lg:pt-[22px] lg:pb-5 lg:px-[50px]'>Read More</a>
      </div>
      </>
  )
}

export default BlogItem