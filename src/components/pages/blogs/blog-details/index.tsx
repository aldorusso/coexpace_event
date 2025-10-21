import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import BlogDetailsArea from "./BlogDetailsArea"
import FooterOne from "@/layouts/footers/FooterOne"

const BlogDetails = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb title="Blog Details" sub_title="Designing For Gen Z: Expectations And UX Guidelines" />
            <BlogDetailsArea />
         </main>
         <FooterOne />
      </>
   )
}

export default BlogDetails
