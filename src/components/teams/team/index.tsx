import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import TeamArea from "./TeamArea"
import Counter from "./Counter"
import InnerFooter from "@/layouts/footers/InnerFooter"

const Team = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb title="Our Speakers" sub_title="Speakers" />
            <TeamArea />
            <Counter />
         </main>
         <InnerFooter />
      </>
   )
}

export default Team
