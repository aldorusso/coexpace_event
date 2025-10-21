import HeaderFive from "@/layouts/headers/HeaderFive"
import Banner from "./Banner"
import TextSlider from "../home-one/TextSlider"
import About from "./About"
import Counter from "./Counter"
import Event from "./Event"
import Experience from "./Experience"
import Category from "./Category"
import Pricing from "./Pricing"
import Blog from "./Blog"
import FooterFour from "@/layouts/footers/FooterFour"
import Brand from "./Brand"

const HomeFive = () => {
   return (
      <>
         <HeaderFive />
         <main>
            <Banner />
            <TextSlider />
            <About />
            <Counter />
            <Event />
            <Experience />
            <Category />
            <Pricing />
            <Brand />
            <Blog />
            <TextSlider />
         </main>
         <FooterFour />
      </>
   )
}

export default HomeFive
