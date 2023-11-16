type BannerProps = {
  name: string,
  description:string,
  bannerImage: string
}
const Banner = ({name, description, bannerImage}:BannerProps) => {
  return (
    <div style={{backgroundImage:`url(${bannerImage})`}} className="page-title bg-cover bg-center bg-no-repeat text-center text-gray bg-black-navy">  
        <div className="page-title-inner pt-[96px] pb-[35px] bg-[rgba(0,0,0,0.3)] md:pt-[120px] md:pb-[58px]">    
          <div className="container "> 
            <div className="text-left row "> 
              <div className="col lg:flex-[0_0_66.666667%] lg:max-w-[66.666667%]"> 
                <div className="breadcrumb1 pl-5 border-l-2 border-l-yellow border-solid"> 
                  <span className="text-lg leading-[1] break-words" property="itemListElement" typeof="ListItem">
                    <a href="/" className="home text-lg leading-[1] break-words">
                      <span property="name" className="p-0 font-[500] text-white text-lg leading-[1] break-words">Burgos</span>
                      </a>
                    <meta property="position"  />
                    </span> - 
                    <span property="itemListElement" typeof="ListItem" className="post text-lg leading-[1] break-words">
                      <span property="name" className="post p-0 font-[500] text-lg leading-[1] break-words">{name}</span>
                    </span>        
                    </div> 
                <h1 className="text-[55px] leading-[70px] pt-0 mb-0 mt-3 font-black text-white uppercase md:text-[72px] md:leading-[90px] break-words">{name}</h1> 
                <p className="title-small text-gray pt-1 mt-0 text-[17px] max-w-[500px]" />{description}   </div> 
              <div className="col-lg-4"> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div>
  )
}

export default Banner