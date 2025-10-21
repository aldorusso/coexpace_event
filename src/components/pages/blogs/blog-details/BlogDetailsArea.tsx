"use client"
import Image from "next/image"
import Link from "next/link"
import BlogForm from "@/components/forms/BlogForm"
import BlogSidebar from "../blog/BlogSidebar"
import { BlogDataType } from "@/data/BlogData"

import blog_1 from "@/assets/img/blog/postbox/thumb-sm-4.jpg"
import blog_2 from "@/assets/img/blog/postbox/thumb-sm-2.jpg"

interface BlogData {
   single_blog?: BlogDataType;
}

const BlogDetailsArea = ({ single_blog }: BlogData) => {
   return (
      <div className="td-postbox-area pt-140 pb-100">
         <div className="container">
            <div className="row">
               <div className="col-xxl-9 col-xl-8 col-lg-8">
                  <div className="td-postbox-wrapper mr-20 mb-40">
                     <div className="td-postbox-item mb-40">
                        <div className="td-postbox-thumb mb-25">
                           <Image className="w-100" src={single_blog ? single_blog.thumb : blog_1} alt="" />
                        </div>
                        <div className="td-postbox-content">
                           <div className="td-blog-date mb-10">
                              <span className="mr-20 date">
                                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1111 2V4.80003M5.88888 2V4.80003M2 7.59992H16M3.55556 3.39988H14.4444C15.3036 3.39988 16 4.02668 16 4.79989V14.6C16 15.3732 15.3036 16 14.4444 16H3.55556C2.69645 16 2 15.3732 2 14.6V4.79989C2 4.02668 2.69645 3.39988 3.55556 3.39988Z" stroke="#444444" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                                 {single_blog ? single_blog.date : "jan 10, 2025"}
                              </span>
                              <span className="mr-20 date">
                                 <i className="flaticon-account"></i>
                                 by Admin
                              </span>
                              <span className="mr-20 date">
                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.4638 17.4999L9.95457 13.5647L4.44531 17.4999V4.90733C4.44531 4.48986 4.61115 4.08948 4.90635 3.79429C5.20154 3.49909 5.60192 3.33325 6.01939 3.33325H13.8898C14.3072 3.33325 14.7076 3.49909 15.0028 3.79429C15.298 4.08948 15.4638 4.48986 15.4638 4.90733V17.4999Z" stroke="#444444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                                 Business
                              </span>
                              <span>
                                 <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_2311_233" fill="white">
                                       <path d="M9.53244 12.2688H14.9991C15.9947 12.2688 16.7769 11.4766 16.7769 10.5288V3.07328C16.7769 2.1255 15.9947 1.33328 14.9991 1.33328H2.99911C2.00355 1.33328 1.22133 2.1255 1.22133 3.07328V10.5288C1.22133 11.4766 2.00355 12.2688 2.99911 12.2688H4.77688V15.7777H4.78022L4.78244 15.7766L9.53355 12.2688H9.53244ZM5.44355 16.6699C5.20702 16.8443 4.91149 16.9188 4.62056 16.8775C4.32963 16.8361 4.06657 16.6822 3.888 16.4488C3.74484 16.2602 3.6672 16.03 3.66688 15.7933V13.3799H3.00022C1.40466 13.3799 0.111329 12.1033 0.111329 10.5288V3.07328C0.110218 1.49883 1.40355 0.222168 2.99911 0.222168H14.9991C16.5947 0.222168 17.888 1.49883 17.888 3.07328V10.5288C17.888 12.1044 16.5947 13.3799 14.9991 13.3799H9.89911L5.44244 16.6699H5.44355Z" />
                                    </mask>
                                    <path d="M9.53244 12.2688H14.9991C15.9947 12.2688 16.7769 11.4766 16.7769 10.5288V3.07328C16.7769 2.1255 15.9947 1.33328 14.9991 1.33328H2.99911C2.00355 1.33328 1.22133 2.1255 1.22133 3.07328V10.5288C1.22133 11.4766 2.00355 12.2688 2.99911 12.2688H4.77688V15.7777H4.78022L4.78244 15.7766L9.53355 12.2688H9.53244ZM5.44355 16.6699C5.20702 16.8443 4.91149 16.9188 4.62056 16.8775C4.32963 16.8361 4.06657 16.6822 3.888 16.4488C3.74484 16.2602 3.6672 16.03 3.66688 15.7933V13.3799H3.00022C1.40466 13.3799 0.111329 12.1033 0.111329 10.5288V3.07328C0.110218 1.49883 1.40355 0.222168 2.99911 0.222168H14.9991C16.5947 0.222168 17.888 1.49883 17.888 3.07328V10.5288C17.888 12.1044 16.5947 13.3799 14.9991 13.3799H9.89911L5.44244 16.6699H5.44355Z" fill="black" />
                                    <path d="M4.77688 12.2688H6.37688V10.6688H4.77688V12.2688ZM4.77688 15.7777H3.17688V17.3777H4.77688V15.7777ZM4.78022 15.7777V17.3777H5.15777L5.49549 17.2089L4.78022 15.7777ZM4.78244 15.7766L5.49771 17.2078L5.62147 17.146L5.73278 17.0638L4.78244 15.7766ZM9.53355 12.2688L10.4839 13.556L14.3944 10.6688H9.53355V12.2688ZM5.44355 16.6699L6.39292 17.9578L10.3106 15.0699H5.44355V16.6699ZM3.888 16.4488L2.61355 17.4162L2.61735 17.4212L3.888 16.4488ZM3.66688 15.7933L2.06688 15.7933L2.06689 15.7954L3.66688 15.7933ZM3.66688 13.3799H5.26688V11.7799H3.66688V13.3799ZM0.111329 3.07328L1.71133 3.07328L1.71133 3.07215L0.111329 3.07328ZM9.89911 13.3799V11.7799H9.3725L8.94884 12.0927L9.89911 13.3799ZM5.44244 16.6699L4.49217 15.3827L0.581084 18.2699H5.44244V16.6699ZM9.53244 13.8688H14.9991V10.6688H9.53244V13.8688ZM14.9991 13.8688C16.8618 13.8688 18.3769 12.3767 18.3769 10.5288H15.1769C15.1769 10.5765 15.1275 10.6688 14.9991 10.6688V13.8688ZM18.3769 10.5288V3.07328H15.1769V10.5288H18.3769ZM18.3769 3.07328C18.3769 1.22543 16.8618 -0.266721 14.9991 -0.266721V2.93328C15.1275 2.93328 15.1769 3.02557 15.1769 3.07328H18.3769ZM14.9991 -0.266721H2.99911V2.93328H14.9991V-0.266721ZM2.99911 -0.266721C1.1364 -0.266721 -0.378671 1.22543 -0.378671 3.07328H2.82133C2.82133 3.02557 2.8707 2.93328 2.99911 2.93328V-0.266721ZM-0.378671 3.07328V10.5288H2.82133V3.07328H-0.378671ZM-0.378671 10.5288C-0.378671 12.3767 1.1364 13.8688 2.99911 13.8688V10.6688C2.8707 10.6688 2.82133 10.5765 2.82133 10.5288H-0.378671ZM2.99911 13.8688H4.77688V10.6688H2.99911V13.8688ZM3.17688 12.2688V15.7777H6.37688V12.2688H3.17688ZM4.77688 17.3777H4.78022V14.1777H4.77688V17.3777ZM5.49549 17.2089L5.49771 17.2078L4.06717 14.3454L4.06495 14.3465L5.49549 17.2089ZM5.73278 17.0638L10.4839 13.556L8.58321 10.9816L3.8321 14.4894L5.73278 17.0638ZM9.53355 10.6688H9.53244V13.8688H9.53355V10.6688ZM4.49418 15.382C4.59521 15.3076 4.72145 15.2757 4.84572 15.2934L4.39539 18.4615C5.10152 18.5619 5.81882 18.381 6.39292 17.9578L4.49418 15.382ZM4.84572 15.2934C4.97 15.3111 5.08236 15.3768 5.15864 15.4765L2.61735 17.4212C3.05078 17.9876 3.68927 18.3612 4.39539 18.4615L4.84572 15.2934ZM5.16243 15.4815C5.23006 15.5706 5.26673 15.6793 5.26688 15.7911L2.06689 15.7954C2.06767 16.3808 2.25962 16.9499 2.61356 17.4162L5.16243 15.4815ZM5.26688 15.7933V13.3799H2.06688V15.7933H5.26688ZM3.66688 11.7799H3.00022V14.9799H3.66688V11.7799ZM3.00022 11.7799C2.26849 11.7799 1.71133 11.1999 1.71133 10.5288H-1.48867C-1.48867 13.0066 0.540837 14.9799 3.00022 14.9799V11.7799ZM1.71133 10.5288V3.07328H-1.48867V10.5288H1.71133ZM1.71133 3.07215C1.71086 2.40217 2.26714 1.82217 2.99911 1.82217V-1.37783C0.539961 -1.37783 -1.49042 0.595499 -1.48867 3.07441L1.71133 3.07215ZM2.99911 1.82217H14.9991V-1.37783H2.99911V1.82217ZM14.9991 1.82217C15.7308 1.82217 16.288 2.40219 16.288 3.07328H19.488C19.488 0.595477 17.4585 -1.37783 14.9991 -1.37783V1.82217ZM16.288 3.07328V10.5288H19.488V3.07328H16.288ZM16.288 10.5288C16.288 11.2006 15.7312 11.7799 14.9991 11.7799V14.9799C17.4581 14.9799 19.488 13.0081 19.488 10.5288H16.288ZM14.9991 11.7799H9.89911V14.9799H14.9991V11.7799ZM8.94884 12.0927L4.49217 15.3827L6.39271 17.9572L10.8494 14.6672L8.94884 12.0927ZM5.44244 18.2699H5.44355V15.0699H5.44244V18.2699Z" fill="#444444" mask="url(#path-1-inside-1_2311_233)" />
                                 </svg>
                                 03 Comments
                              </span>
                           </div>
                           <h3 className="td-blog-title mb-15">{single_blog ? single_blog.title : "Bundle  And Save On Smashing Books Workshops"}</h3>
                           <p className="mb-15">em ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aene
                              an imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncusMaecenas
                              tempususMaece, tellus eget condimen</p>
                           <p className="mb-40">Applications are like the lifeblood of mobile phones and tablets today. The true potential of your areaw gear jimanwe mob
                              ile phon harnessed by applications  can provide utility. Apps come under various segments.Applications are like the lifeb
                              lood of moones and tablets todayue potential of your mobile phone.</p>
                           <h3 className="td-blog-title-sm mb-20">At lacus nibh in scelerisque arcu at it pellen tesque ?</h3>
                           <p className="mb-45">Applications are like the lifeblood of mobile phones and tablets today. The true potential of your mobile phone is harnessed
                              by applications  can provide utility. Apps come under various segments.</p>
                           <div className="td-postbox-details-qoute">
                              <blockquote className="td-postbox-blockquote">
                                 <p>Modern lifeblood of mobile phones and tablets today. The true potential your
                                    phone  tions  can provide utility. Apps come under variousof mobile.</p>
                                 <h5>Elon Musk, CO Founder</h5>
                              </blockquote>
                           </div>
                           <p className="mt-30 mb-40">Mpplications are like the lifeblood of mobile phones and tablets today. The true potential of your mobile phone is harnessed
                              by applications  can provide utility. Apps come under various segments.Applications are like the lifeblood of mobile phones
                              and tablets todayue potential of your mobile phone.</p>
                           <h3 className="td-blog-title-sm mb-10">What You Need to Know about the Facebook Product Design
                              Interview and What to do about it?</h3>
                           <p>Facebook are like the lifeblood of mobile phones and tablets today. The true potential of your mobile phone is harnessed by
                              applications  can provide utility. Apps come under various segments.Applications are like the lifeblood of mobile phones
                              and tablets todayue potential of your mobile phone.</p>
                        </div>
                     </div>
                     <div className="td-postbox-item mb-55 td-product-bottom-border pb-60">
                        <div className="td-postbox-thumb mb-35">
                           <Image className="w-100" src={blog_2} alt="" />
                        </div>
                        <div className="td-postbox-content">
                           <p className="mb-50">Facebook are like the lifeblood of mobile phones and tablets today. The true potential of your mobile phone is harnessed
                              plications  can provide utility. Apps come under various segments.Applications are like the lifeblood of mobile phones
                              tablets todayue potential of your mobile phone.</p>
                           <div className="td-blog-tag-widget">
                              <div className="tagcloud">
                                 <Link href="#">Agency</Link>
                                 <Link href="#">Agency Theme</Link>
                                 <Link href="#">Marketing Team</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="td-postbox-navigation-area td-product-bottom-border pb-10 mb-70">
                        <div className="col-12">
                           <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                 <div className="td-postbox-navigation mb-40">
                                    <div className="td-postbox-navigation-icon">
                                       <span className="navigation-btn mb-10 d-inline-block"><a href="#"><i className="fa-solid fa-arrow-left-long mr-10"></i> Previous post:</a> </span>
                                       <p className="td-postbox-navigation-para m-25">fter years of occasionally pissing off<br /> clients with sloppy project management</p>
                                       <span className="td-date"><i className="flaticon-calendar"></i>24, December</span>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                 <div className="td-postbox-navigation text-right mb-40">
                                    <div className="td-postbox-navigation-icon">
                                       <span className="navigation-btn mb-10 d-inline-block"><a href="#">Next post: <i className="fa-regular fa-arrow-right-long ml-10"></i></a></span>
                                       <p className="td-postbox-navigation-para m-25">fter years of occasionally pissing off<br /> clients with sloppy project management</p>
                                       <span className="td-date"><i className="flaticon-calendar"></i>24, December</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="td-postbox-form td-product-details-review-form">
                        <h3 className="td-postbox-form-title mb-20">Leave a Reply</h3>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <BlogForm />
                     </div>
                  </div>
               </div>
               <div className="col-xxl-3 col-xl-4 col-lg-4">
                  <BlogSidebar />
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlogDetailsArea
