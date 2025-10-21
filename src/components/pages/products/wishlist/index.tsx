import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import WishlistArea from "./WishlistArea"
import FooterOne from "@/layouts/footers/FooterOne"

const Wishlist = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb title="Wishlist" sub_title="Wishlist" />
        <WishlistArea />
      </main>
      <FooterOne />
    </>
  )
}

export default Wishlist
