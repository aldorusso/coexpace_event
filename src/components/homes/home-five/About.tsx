import Image from "next/image"

import about_thumb1 from "@/assets/img/about/about-5/thumb.jpg"
import about_thumb2 from "@/assets/img/about/about-5/thumb-2.jpg"
import about_thumb3 from "@/assets/img/about/about-5/thumb-3.jpg"
import about_thumb4 from "@/assets/img/about/about-5/thumb-4.jpg"

const About = () => {
   return (
      <div className="td-about-area pt-140">
         <div className="container-fluid container-1700">
            <div className="row gx-20 align-items-center">
               <div className="col-lg-2 col-md-6 col-sm-6">
                  <div className="td-about-6-thumb mb-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <Image src={about_thumb1} alt="" />
                  </div>
               </div>
               <div className="col-lg-2 col-md-6 col-sm-6">
                  <div className="td-about-6-thumb mb-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                     <Image src={about_thumb2} alt="" />
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="td-about-6-content text-center mb-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.5s">
                     <span className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-15">About This Event</span>
                     <h2 className="td-about-6-tittle">Fashion’s<br /> Next Chapter Starts Here</h2>
                     <p className="para">Like previous year this year we are year arranging <br />
                        world marketing Fashion summit 2025<br />
                        of all the big Fashion Event</p>
                  </div>
               </div>
               <div className="col-lg-2 col-md-6 col-sm-6">
                  <div className="td-about-6-thumb mb-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.6s">
                     <Image src={about_thumb3} alt="" />
                  </div>
               </div>
               <div className="col-lg-2 col-md-6 col-sm-6">
                  <div className="td-about-6-thumb mb-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.7s">
                     <Image src={about_thumb4} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
