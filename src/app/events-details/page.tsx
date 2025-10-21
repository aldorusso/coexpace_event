import EventDetails from "@/components/events/event-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Event Details Evente - Conference and Event React Next js Template",
};
const page = () => {
  return (
    <Wrapper>
      <EventDetails />
    </Wrapper>
  )
}

export default page