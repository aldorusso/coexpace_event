import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FaqArea from "./FaqArea"
import Cta from "@/components/homes/home-two/Cta"
import FooterTwo from "@/layouts/footers/FooterTwo"

const Faq = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb title="Faq’s" sub_title="Faq’s" />
            <FaqArea />
            <Cta />
         </main>
         <FooterTwo />
      </>
   )
}

export default Faq
