import { IHomeGallery } from "@/types/gallery"
import Image from "next/image"

type Props={
  gallery: IHomeGallery[],
}
export default function HomeGallery ({gallery} :Props) {
  return (
    <>
    <section className="grid grid-cols-3 md:grid-cols-6">
                    {gallery.map((pic)=>(
                      <div key={pic.id} className="px-0  ">
                      <figure className="view m-0 relative overflow-hidden">
                        <Image   width={420} height={580} src={pic.image} className="max-w-full h-auto" alt="" decoding="async" />      <figcaption className="mask">
                          <a href="/" className="absolute top-0 left-0 w-full h-full text-center transition-all mt-0 group hover:bg-yellow">
                            <div className="mask-inner2 absolute top-1/2 w-full float-left p-3 mt-[-23px]">
                              <h3 className='mb-0 text-sm font-bold uppercase opacity-0 group-hover:opacity-100'>{pic.title}</h3>
                            </div>  
                          </a> 
                        </figcaption> 
                      </figure>  
                    </div> 
                    ))}
                    
                    
      </section>
    </>
  )
}
