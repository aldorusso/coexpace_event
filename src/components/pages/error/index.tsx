import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import ErrorArea from "./ErrorArea"
import FooterTwo from "@/layouts/footers/FooterTwo"
import Cta from "@/components/homes/home-two/Cta"

const NotFound = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb title="Error Page" sub_title="404 Page" />
            <ErrorArea />
            <Cta />
         </main>
         <FooterTwo />
      </>
   )
}

export default NotFound
