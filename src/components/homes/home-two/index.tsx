import HeaderTwo from "@/layouts/headers/HeaderTwo"
import Banner from "./Banner"
import Countdown from "./Countdown"
import Counter from "./Counter"
import Team from "./Team"
import TextSlider from "../home-one/TextSlider"
import About from "./About"
import Price from "./Price"
import Brand from "./Brand"
import Location from "./Location"
import Blog from "./Blog"
import Cta from "./Cta"
import Event from "./Event"
import Experience from "./Experience"
import FooterTwo from "@/layouts/footers/FooterTwo"

const HomeTwo = () => {
   return (
      <>
         <HeaderTwo />
         <main>
            <Banner />
            <Countdown />
            <About />
            <Counter />
            <Team />
            <TextSlider />
            <Event />
            <Experience />
            <Price />
            <Brand />
            <Location />
            <Blog />
            <Cta />
         </main>
         <FooterTwo />
      </>
   )
}

export default HomeTwo
