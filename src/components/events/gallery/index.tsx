import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import GalleryArea from "./GalleryArea"
import Cta from "@/components/homes/home-two/Cta"
import FooterTwo from "@/layouts/footers/FooterTwo"

const Gallery = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb title="Event Gallery" sub_title="Event Gallery" />
            <GalleryArea />
            <Cta />
         </main>
         <FooterTwo />
      </>
   )
}

export default Gallery
