"use client"
import Link from "next/link"
import Image, { StaticImageData } from "next/image"

import rc_post1 from "@/assets/img/blog/postbox/thumb.jpg"
import rc_post2 from "@/assets/img/blog/postbox/thumb-2.jpg"
import rc_post3 from "@/assets/img/blog/postbox/thumb-3.jpg"
import rc_post4 from "@/assets/img/blog/postbox/thumb-4.jpg"

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   comment: string;
}

const rc_data: DataType[] = [
   {
      id: 1,
      img: rc_post1,
      title: "Save soil, save area world Projects",
      comment: "02 Comments"
   },
   {
      id: 2,
      img: rc_post2,
      title: "Save soil, save area world Projects",
      comment: "02 Comments"
   },
   {
      id: 3,
      img: rc_post3,
      title: "Save soil, save area world Projects",
      comment: "02 Comments"
   },
   {
      id: 4,
      img: rc_post4,
      title: "Save soil, save area world Projects",
      comment: "02 Comments"
   },
];

const BlogSidebar = () => {
   return (
      <div className="td-blog-sidebar-wrapper pl-40 mb-40">
         <div className="td-blog-sidebar-search mb-35">
            <div className="td-product-left-title-wrap mb-15">
               <h3 className="td-product-left-title">Search</h3>
               <span className="td-product-left-border"></span>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
               <input type="text" placeholder="Search here" />
               <button type="submit"><i className="flaticon-search"></i></button>
            </form>
         </div>
         <div className="td-product-categories-list td-product-bottom-border mb-35 pb-20">
            <div className="td-product-left-title-wrap mb-10">
               <h3 className="td-product-left-title">Categories</h3>
               <span className="td-product-left-border"></span>
            </div>
            <ul>
               <li>
                  <Link href="#">Accessories <span>(44)</span></Link>
               </li>
               <li>
                  <Link href="#">Marketing <span>(12)</span></Link>
               </li>
               <li>
                  <Link href="#">Digital Agenyc <span>(05)</span></Link>
               </li>
               <li>
                  <Link href="#">Modern Technology <span>(11)</span></Link>
               </li>
               <li>
                  <Link href="#">Conference <span>(03)</span></Link>
               </li>
            </ul>
         </div>
         <div className="td-blog-sidebar-widget td-product-bottom-border mb-35 pb-20">
            <div className="td-product-left-title-wrap mb-15">
               <h3 className="td-product-left-title">Recent Posts</h3>
               <span className="td-product-left-border"></span>
            </div>
            {rc_data.map((item) => (
               <div key={item.id} className="td-blog-post d-flex mb-25">
                  <div className="td-blog-post-thumb">
                     <Link href="/blog-details"><Image src={item.img} alt="blog" /></Link>
                  </div>
                  <div className="td-blog-content-2">
                     <h4 className="td-blog-post-title"><Link href="/blog-details">{item.title}</Link></h4>
                     <span className="td-blog-post-date"><i className="flaticon-calendar"></i>{item.comment}</span>
                  </div>
               </div>
            ))}
         </div>
         <div className="td-blog-tag-widget">
            <div className="td-product-left-title-wrap mb-15">
               <h3 className="td-product-left-title">Tags Cloud</h3>
               <span className="td-product-left-border"></span>
            </div>
            <div className="tagcloud">
               <Link href="#">Business</Link>
               <Link href="#">Conference</Link>
               <Link href="#">Event</Link>
               <Link href="#">News</Link>
               <Link href="#">Marketing</Link>
            </div>
         </div>
      </div>
   )
}

export default BlogSidebar
