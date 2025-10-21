import Login from "@/components/pages/login";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Login Evente - Conference and Event React Next js Template",
};
const page = () => {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  )
}

export default page