import Team from "@/components/teams/team";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Team Evente - Conference and Event React Next js Template",
};
const page = () => {
  return (
    <Wrapper>
      <Team />
    </Wrapper>
  )
}

export default page