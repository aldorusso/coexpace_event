import { StaticImageData } from "next/image";

import blog_1 from "@/assets/img/blog/blog.jpg"
import blog_2 from "@/assets/img/blog/blog-2.jpg"
import blog_3 from "@/assets/img/blog/blog-3.jpg"
import blog2_1 from "@/assets/img/blog/blog-2/blog.jpg"
import blog2_2 from "@/assets/img/blog/blog-2/blog-2.jpg"
import blog2_3 from "@/assets/img/blog/blog-2/blog-3.jpg"
import blog3_1 from "@/assets/img/blog/blog-5/thumb.jpg"
import blog3_2 from "@/assets/img/blog/blog-5/thumb-2.jpg"
import blog3_3 from "@/assets/img/blog/blog-5/thumb-3.jpg"
import blog4_1 from "@/assets/img/blog/postbox/thumb-sm-4.jpg"
import blog4_2 from "@/assets/img/blog/postbox/thumb-sm-3.jpg"
import blog4_3 from "@/assets/img/blog/postbox/thumb-sm-2.jpg"
import blog4_4 from "@/assets/img/blog/postbox/thumb-sm.jpg"

export interface BlogDataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   title: string;
   desc?: string;
   date: string;
   comment: string;
   tag: string;
}

const blog_data: BlogDataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: blog_1,
      title: "Civil Litigation paper’s Of Conference",
      date: "16 Jan, 2025",
      comment: "12 Comments",
      tag: "Business",
   },
   {
      id: 2,
      page: "home_1",
      thumb: blog_2,
      title: "Reinventing Experiences of Creativity",
      date: "16 Jan, 2025",
      comment: "12 Comments",
      tag: "Conference",
   },
   {
      id: 3,
      page: "home_1",
      thumb: blog_3,
      title: "The Save soil, save world Projects in 2025",
      date: "16 Jan, 2025",
      comment: "12 Comments",
      tag: "Marketing",
   },

   // home_2
   {
      id: 1,
      page: "home_2",
      thumb: blog2_1,
      title: "Met planner to oversee inaugu ration events",
      date: "16 Jan, 2025",
      comment: "12 Comments",
      tag: "Business",
   },
   {
      id: 2,
      page: "home_2",
      thumb: blog2_2,
      title: "Civil Litigation paper’s Of Conference",
      date: "16 Jan, 2025",
      comment: "12 Comments",
      tag: "Business",
   },
   {
      id: 3,
      page: "home_2",
      thumb: blog2_3,
      title: "Reinventing Experiences of Creativity",
      date: "16 Jan, 2025",
      comment: "12 Comments",
      tag: "Business",
   },

   // home_5
   {
      id: 1,
      page: "home_5",
      thumb: blog3_1,
      title: "Met planner to oversee inauguration events",
      date: "16 Jan, 2025",
      comment: "12 Comments",
      tag: "Business",
   },
   {
      id: 2,
      page: "home_5",
      thumb: blog3_2,
      title: "Reinventing Experiences of Creativity",
      date: "16 Jan, 2025",
      comment: "12 Comments",
      tag: "Business",
   },
   {
      id: 3,
      page: "home_5",
      thumb: blog3_3,
      title: "The Save soil, save world Projects in 2025",
      date: "16 Jan, 2025",
      comment: "12 Comments",
      tag: "Business",
   },

   // inner_blog
   {
      id: 1,
      page: "inner_blog",
      thumb: blog4_1,
      title: "Bundle And Save On Smashing Books Workshops",
      date: "jan 10, 2025",
      comment: "03 Comments",
      tag: "Business",
      desc: "em ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aene an imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncusMaecenas tempususMaece, tellus eget condimen",
   },
   {
      id: 2,
      page: "inner_blog",
      thumb: blog4_2,
      title: "Open-Source Meets Design Tooling With Penpot",
      date: "jan 10, 2025",
      comment: "03 Comments",
      tag: "Business",
      desc: "em ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aene an imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncusMaecenas tempususMaece, tellus eget condimen",
   },
   {
      id: 3,
      page: "inner_blog",
      thumb: blog4_3,
      title: "Designing For Gen Z: Expectations And UX Guidelines",
      date: "jan 10, 2025",
      comment: "03 Comments",
      tag: "Business",
      desc: "em ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aene an imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncusMaecenas tempususMaece, tellus eget condimen",
   },
   {
      id: 4,
      page: "inner_blog",
      thumb: blog4_4,
      title: "Civil Litigation paper’s Of Conference",
      date: "jan 10, 2025",
      comment: "03 Comments",
      tag: "Business",
      desc: "em ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aene an imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncusMaecenas tempususMaece, tellus eget condimen",
   },
   {
      id: 5,
      page: "inner_blog",
      thumb: blog4_3,
      title: "Designing For Gen Z: Expectations And UX Guidelines",
      date: "jan 10, 2025",
      comment: "03 Comments",
      tag: "Business",
      desc: "em ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aene an imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncusMaecenas tempususMaece, tellus eget condimen",
   },
   {
      id: 6,
      page: "inner_blog",
      thumb: blog4_4,
      title: "Civil Litigation paper’s Of Conference",
      date: "jan 10, 2025",
      comment: "03 Comments",
      tag: "Business",
      desc: "em ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aene an imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncusMaecenas tempususMaece, tellus eget condimen",
   },
];

export default blog_data;