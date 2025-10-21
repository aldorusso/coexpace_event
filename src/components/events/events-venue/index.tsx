import FooterOne from "@/layouts/footers/FooterOne"
import HeaderThree from "@/layouts/headers/HeaderThree"
import Breadcrumb from "../../common/Breadcrumb"
import Feature from "../about/Feature"
import EventsVenueArea from "./EventsVenueArea"

const EventsVenue = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb title="Event vanue" sub_title="Event vanue" />
            <EventsVenueArea />
            <Feature />
         </main>
         <FooterOne />
      </>
   )
}

export default EventsVenue
