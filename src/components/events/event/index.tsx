import Breadcrumb from "@/components/common/Breadcrumb"
import EventArea from "./EventArea"
import Experience from "./Experience"
import TextSlider from "@/components/homes/home-one/TextSlider"
import Ticket from "@/components/homes/home-one/Ticket"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderThree from "@/layouts/headers/HeaderThree"

const Event = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb title="All Events" sub_title="Events" />
            <EventArea />
            <TextSlider />
            <Experience />
            <Ticket />
         </main>
         <FooterOne />
      </>
   )
}

export default Event
