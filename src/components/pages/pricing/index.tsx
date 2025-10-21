import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import PricingArea from "./PricingArea"
import Brand from "./Brand"
import FooterTwo from "@/layouts/footers/FooterTwo"
import Cta from "@/components/homes/home-two/Cta"

const Pricing = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb title="Our Pricing Table" sub_title="Pricing Plan" />
        <PricingArea />
        <Brand />
        <Cta />
      </main>
      <FooterTwo />
    </>
  )
}

export default Pricing
