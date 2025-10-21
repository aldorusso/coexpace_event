import Image from "next/image"
import Link from "next/link"

import about_thumb1 from "@/assets/img/about/about-2/about.jpg"

const About = () => {
   return (
      <div className="td-about-area pt-95">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="td-about-2-thumb p-relative mb-30">
                     <h2 className="td-about-2-bigtitle d-none d-xl-block">About</h2>
                     <Image className="thumb wow td-animetion-left" data-wow-duration="1.5s" data-wow-delay="0.2s" src={about_thumb1} alt="" />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="td-about-2-content-wrap ml-55 mb-30 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <div className="td-about-2-content">
                        <span className="td-section-subtitle td-section-subtitle-2 mb-30">About This Meetup</span>
                        <h2 className="td-section-title mb-10">About this Designer Conference</h2>
                        <p className="para">when an unknown printer took a galley of type and scrambled
                           it to make a type specimen book. It has survived not only five
                           centuries, but also the leap into electronic</p>
                     </div>
                     <div className="td-about-2-list mb-30">
                        <ul>
                           <li>
                              <i className="fa-sharp fa-solid fa-check"></i>
                              <span>Minere Arena Banquet Hall</span>
                           </li>
                           <li>
                              <i className="fa-sharp fa-solid fa-check"></i>
                              <span>Minere Arena Banquet Hall</span>
                           </li>
                           <li>
                              <i className="fa-sharp fa-solid fa-check"></i>
                              <span>Connect with Industry Leaders</span>
                           </li>
                           <li>
                              <i className="fa-sharp fa-solid fa-check"></i>
                              <span>Minere Arena Banquet Hall</span>
                           </li>
                           <li>
                              <i className="fa-sharp fa-solid fa-check"></i>
                              <span>Connect with Industry Leaders</span>
                           </li>
                           <li>
                              <i className="fa-sharp fa-solid fa-check"></i>
                              <span>Minere Arena Banquet Hall</span>
                           </li>
                        </ul>
                     </div>
                     <Link className="td-btn-square" href="/about">Read More</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
