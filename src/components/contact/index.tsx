import HeaderThree from "@/layouts/headers/HeaderThree"
import Breadcrumb from "../common/Breadcrumb"
import ContactArea from "./ContactArea"
import ContactFormArea from "./ContactFormArea"
import Cta from "../homes/home-two/Cta"
import FooterTwo from "@/layouts/footers/FooterTwo"

const Contact = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb title="Contact With Us" sub_title="Contact" />
            <ContactArea />
            <ContactFormArea />
            <Cta />
         </main>
         <FooterTwo />
      </>
   )
}

export default Contact
