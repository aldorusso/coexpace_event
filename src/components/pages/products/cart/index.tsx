import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import CartArea from "./CartArea"
import FooterOne from "@/layouts/footers/FooterOne"

const Cart = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb title="Cart" sub_title="Cart" />
            <CartArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Cart
