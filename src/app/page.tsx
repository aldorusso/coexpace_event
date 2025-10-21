import HomeOne from "@/components/homes/home-one";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "The Invisible Emergency - Coexpace Global Webinar 2025",
  description: "A global call to face what we can't see. Join experts, survivors, and community leaders addressing the unseen crisis of mental health.",
};
const page = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  )
}

export default page