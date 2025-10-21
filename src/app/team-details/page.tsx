import TeamDetails from "@/components/teams/team-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Team Details Evente - Conference and Event React Next js Template",
};
const page = () => {
  return (
    <Wrapper>
      <TeamDetails />
    </Wrapper>
  )
}

export default page