"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import BlogDetailsArea from "@/components/pages/blogs/blog-details/BlogDetailsArea";
import blog_data from "@/data/BlogData";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";
import { notFound } from "next/navigation";

interface Props {
   blogId: string;
}

export default function BlogDetailsClient({ blogId }: Props) {

   const blogs = blog_data.filter((items) => items.page === "inner_blog");
   const single_blog = blogs.find((item) => String(item.id) === blogId);

   if (!single_blog) {
      notFound();
   }

   return (
      <Wrapper>
         <HeaderThree />
         <main>
            <Breadcrumb title="Blog Details" sub_title="Designing For Gen Z: Expectations And UX Guidelines" />
            <BlogDetailsArea single_blog={single_blog} />
         </main>
         <FooterOne />
      </Wrapper>
   );
}
