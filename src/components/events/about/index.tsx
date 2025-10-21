import Breadcrumb from "@/components/common/Breadcrumb"
import AboutArea from "./AboutArea"
import Feature from "./Feature"
import TextSlider from "@/components/homes/home-one/TextSlider"
import Team from "@/components/homes/home-three/Team"
import Testimonial from "@/components/homes/home-three/Testimonial"
import Brand from "@/components/homes/home-two/Brand"
import Cta from "@/components/homes/home-two/Cta"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderThree from "@/layouts/headers/HeaderThree"

const About = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb title="What We Have Done" sub_title="About" />
            <AboutArea />
            <Feature />
            <TextSlider />
            <Team />
            <Testimonial />
            <Brand />
            <Cta />
         </main>
         <FooterTwo />
      </>
   )
}

export default About
