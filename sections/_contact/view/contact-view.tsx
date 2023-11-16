import Banner from "@/components/banner/banner"
import ContactZone from "../contact-zone"
import ContactMessage from "../contact-message"

const ContactView = () => {
  const bannerInfo = {
    name: 'Contact',
    description:'Diam ut venenatis tellus in metus vulputate eu. Placerat in egestas erat imperdiet. Velit euismod in pellentesque massa placerat duis.',
    bannerImg : 'assets/images/bg-blog.webp'
  }
  return (
    <>
    <Banner name={bannerInfo.name} description={bannerInfo.description} bannerImage={bannerInfo.bannerImg}/>
    <ContactZone/>
    <ContactMessage/>
    </>
  )
}

export default ContactView