import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderThree from "@/layouts/headers/HeaderThree"
import ProductArea from "./ProductArea"

const Product = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb title="Shop Archive" sub_title="Shop Archive" />
            <ProductArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Product
