import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import BlogArea from "./BlogArea"
import FooterOne from "@/layouts/footers/FooterOne"

const Blog = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb title="Latest Blogs" sub_title="Blogs" />
            <BlogArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Blog
