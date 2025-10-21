import EventsVenue from "@/components/events/events-venue";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Events Venue Evente - Conference and Event React Next js Template",
};
const page = () => {
  return (
    <Wrapper>
      <EventsVenue />
    </Wrapper>
  )
}

export default page