import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import RegisterArea from "./RegisterArea"
import FooterOne from "@/layouts/footers/FooterOne"

const Register = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb title="Register" sub_title="Register" />
            <RegisterArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Register
