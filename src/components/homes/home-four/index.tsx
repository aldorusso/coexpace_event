import HeaderFour from "@/layouts/headers/HeaderFour"
import Banner from "./Banner"
import TextSlider from "../home-one/TextSlider"
import About from "./About"
import Team from "./Team"
import Cta from "./Cta"
import Pricing from "./Pricing"
import Testimonial from "./Testimonial"
import Brand from "./Brand"
import Blog from "../home-two/Blog"
import Map from "../home-one/Map"
import FooterThree from "@/layouts/footers/FooterThree"
import Event from "./Event"

const HomeFour = () => {
   return (
      <>
         <HeaderFour />
         <main>
            <Banner />
            <TextSlider />
            <About />
            <Team />
            <Cta />
            <Event />
            <Pricing />
            <Testimonial />
            <Brand />
            <Blog />
            <Map />
         </main>
         <FooterThree />
      </>
   )
}

export default HomeFour
