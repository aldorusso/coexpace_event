import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import EventDetailsArea from "./EventDetailsArea"
import Brand from "./Brand"
import Cta from "@/components/homes/home-two/Cta"
import FooterTwo from "@/layouts/footers/FooterTwo"

const EventDetails = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb title="Digital Marketing Conference" sub_title="Digital Marketing Conference" />
            <EventDetailsArea />
            <Brand />
            <Cta />
         </main>
         <FooterTwo />
      </>
   )
}

export default EventDetails
