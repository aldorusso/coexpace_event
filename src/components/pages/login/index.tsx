import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import LoginArea from "./LoginArea"
import FooterOne from "@/layouts/footers/FooterOne"

const Login = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb title="Login" sub_title="Login" />
            <LoginArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Login
