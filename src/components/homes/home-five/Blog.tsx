import blog_data from "@/data/BlogData"
import Image from "next/image"
import Link from "next/link"

const Blog = () => {
   return (
      <div className="td-blog-area grey-bg-4 pt-140 p-relative z-index-1 fix pb-110">
         <div className="td-hero-4-blur td-team-5-blur"></div>
         <div className="td-hero-4-blur td-hero-4-blur-2 td-team-5-blur-2"></div>
         <div className="container">
            <div className="row align-items-end">
               <div className="col-xl-6 col-lg-8">
                  <div className="td-blog-title-wrap mb-40 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".2s">
                     <span className="td-section-subtitle td-section-subtitle-2 mb-25">Blog Post</span>
                     <h2 className="td-section-title">Insights from business experts Meetup</h2>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="mb-40">
                     <p className="td-section-text">Like previous year this year we are arranging world <br />
                        marketing summit 2025 Its the gathering <br />
                        of all the big</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {blog_data.filter((items) => items.page === "home_5").map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".3s">
                     <div className="td-blog-item td-blog-5-item mb-30">
                        <div className="td-blog-thumb p-relative fix">
                           <Image className="w-100" src={item.thumb} alt="" />
                           <div className="td-blog-content">
                              <span className="td-blog-5-tag mb-10">{item.tag}</span>
                              <h3 className="td-blog-title mb-15"><Link className="underline-white" href="/blog-details">{item.title}</Link></h3>
                              <div className="td-blog-date">
                                 <span className="mr-20 date">
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M12.6 1V4.6M5.40002 1V4.6M0.900024 8.2H17.1M2.70002 2.8H15.3C16.2941 2.8 17.1 3.60589 17.1 4.6V17.2C17.1 18.1941 16.2941 19 15.3 19H2.70002C1.70591 19 0.900024 18.1941 0.900024 17.2V4.6C0.900024 3.60589 1.70591 2.8 2.70002 2.8Z" stroke="CurrentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {item.date}
                                 </span>
                                 <span>
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M18.5 12.3333C18.5 12.8343 18.301 13.3147 17.9468 13.669C17.5925 14.0232 17.1121 14.2222 16.6111 14.2222H5.27778L1.5 18V2.88889C1.5 2.38792 1.69901 1.90748 2.05324 1.55324C2.40748 1.19901 2.88792 1 3.38889 1H16.6111C17.1121 1 17.5925 1.19901 17.9468 1.55324C18.301 1.90748 18.5 2.38792 18.5 2.88889V12.3333Z" stroke="CurrentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {item.comment}
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Blog
