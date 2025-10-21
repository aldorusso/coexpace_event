import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import CheckoutArea from "./CheckoutArea"
import FooterOne from "@/layouts/footers/FooterOne"

const Checkout = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb title="Checkout" sub_title="Checkout" />
            <CheckoutArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Checkout
