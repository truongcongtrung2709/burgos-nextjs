import Banner from "@/components/banner/banner"
import SomethingAbout from "@/sections/_about/something-about"
import AboutOurFeatures from "@/sections/_about/about-our-features"
import ClientsAboutUs from "@/sections/_about/client-about-us"
import AboutFastOrder from "../about-fast-order"
import AboutPhotoGallery from "../about-photo-gallery"
export default function AboutView () {
  const bannerInfo = {
    name: 'About',
    description:'Diam ut venenatis tellus in metus vulputate eu. Placerat in egestas erat imperdiet. Velit euismod in pellentesque massa placerat duis.',
    bannerImg : 'assets/images/contact-bg.webp'
  }
  return (
    <div className='bg-body-background bg-center bg-repeat'>  
      <Banner name={bannerInfo.name} description={bannerInfo.description} bannerImage={bannerInfo.bannerImg} />
      <SomethingAbout/>
      <AboutOurFeatures/>
      <ClientsAboutUs/>
      <AboutFastOrder/>
      <AboutPhotoGallery/>
    </div>
  )
}
