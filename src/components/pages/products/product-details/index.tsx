import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderThree from "@/layouts/headers/HeaderThree"
import ProductDetailsArea from "./ProductDetailsArea"
import ProductDetailsTab from "./ProductDetailsTab"
import SimilarProduct from "./SimilarProduct"

const ProductDetails = () => {

  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb title="Shop Details" sub_title="Shop Details" />
        <ProductDetailsArea />
        <ProductDetailsTab />
        <SimilarProduct />
      </main>
      <FooterOne />
    </>
  )
}

export default ProductDetails
