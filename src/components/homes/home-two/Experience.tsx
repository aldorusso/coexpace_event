"use client"
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";
import Link from "next/link"
import { useJarallax } from "@/hooks/useJarallax";

import bg_img from "@/assets/img/banner/banner.jpg"

const Experience = () => {

  useJarallax(0.2);
   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="td-banner-area td-banner-spacing-2 bg-position jarallax" style={{ backgroundImage: `url(${bg_img.src})` }}>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-8">
                     <div className="td-banner-title-wrap td-banner-title-wrap-2 wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <span className="td-section-subtitle td-section-subtitle-2 mb-20">GET EXPERIENCE</span>
                        <h2 className="td-section-title mb-15">the best experience
                           in Design Principles</h2>
                        <p className="mb-35">Like previous year this year we are arranging world marketing <br />
                           summit 2025. Its the gathering of all the big</p>
                        <Link className="td-btn-square" href="/events">Buy Tickets Now</Link>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                     <div className="td-banner-2-video-wrap ml-200">
                        <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="td-video-play popup-video td-pulse-border">
                           <span className="p-relative z-index-11">
                              <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M19.8571 12L0.571429 23.1346L0.57143 0.865352L19.8571 12Z" fill="currentColor" />
                              </svg>
                           </span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <VideoPopup
            isOpen={isVideoOpen}
            onClose={() => setIsVideoOpen(false)}
            videoId="TfU0qjuZkJ4"
         />
      </>
   )
}

export default Experience
