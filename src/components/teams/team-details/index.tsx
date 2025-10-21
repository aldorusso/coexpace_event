import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import TeamDetailsArea from "./TeamDetailsArea"
import Schedule from "./Schedule"
import Cta from "@/components/homes/home-two/Cta"
import FooterTwo from "@/layouts/footers/FooterTwo"

const TeamDetails = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb title="Our Speakers" sub_title="Speakers" />
            <TeamDetailsArea />
            <Schedule />
            <Cta />
         </main>
         <FooterTwo />
      </>
   )
}

export default TeamDetails
