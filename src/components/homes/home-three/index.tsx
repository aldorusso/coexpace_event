import HeaderThree from "@/layouts/headers/HeaderThree"
import Banner from "./Banner"
import Countdown from "./Countdown"
import Feature from "./Feature"
import About from "./About"
import Team from "./Team"
import Pricing from "./Pricing"
import FooterOne from "@/layouts/footers/FooterOne"
import Event from "./Event"
import TextSlider from "../home-one/TextSlider"
import Experience from "../home-one/Experience"
import Testimonial from "./Testimonial"
import Brand from "../home-two/Brand"
import Blog from "./Blog"

const HomeThree = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Banner />
            <Countdown />
            <Feature />
            <About />
            <Event />
            <TextSlider />
            <Experience />
            <Team />
            <Pricing />
            <Testimonial />
            <Brand />
            <Blog />
         </main>
         <FooterOne />
      </>
   )
}

export default HomeThree
