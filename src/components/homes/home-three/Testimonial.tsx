"use client"
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from "next/image";
import testi_data from "@/data/TestimonialData";
import { useJarallax } from "@/hooks/useJarallax";

import bg_img from "@/assets/img/testimonial/tes-video.jpg"

const setting = {
   slidesPerView: 1,
   spaceBetween: 0,
   loop: true,
   autoplay: {
      delay: 3500,
   },
   navigation: {
      nextEl: ".td-testimonial-3-next",
      prevEl: ".td-testimonial-3-prev",
   },
};

const Testimonial = () => {

  useJarallax(0.2);

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="td-testimonial-area fix green-bg">
            <div className="container-fluid p-0">
               <div className="row gx-0">
                  <div className="col-lg-6">
                     <div className="td-testimonial-3-wrap pt-160 pb-160 p-relative">
                        <span className="td-testimonial-3-qoute">
                           <svg width="113" height="90" viewBox="0 0 113 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M63.5625 50.4V0H113V51.12C113 85.68 81.2188 90 81.2188 90L76.9812 79.92C76.9812 79.92 91.1063 77.76 93.9313 66.24C96.7562 57.6 91.1062 50.4 91.1062 50.4H63.5625ZM0 50.4V0H49.4375V51.12C49.4375 85.68 17.6562 90 17.6562 90L13.4187 79.92C13.4187 79.92 27.5438 77.76 30.3688 66.24C33.1938 57.6 27.5438 50.4 27.5438 50.4H0Z" fill="#462AF1" />
                           </svg>
                        </span>
                        <span className="td-section-subtitle td-section-subtitle-2 mb-20">Testimonials</span>
                        <h2 className="td-section-title text-white mb-35">What our Attendees<br /> are Saying</h2>
                        <Swiper {...setting} modules={[Autoplay, Navigation]} onSwiper={(swiper) => {
                           swiper.wrapperEl.classList.add("p-relative");
                        }} className="swiper-container td-testimonial-3-slider">
                           {testi_data.filter((items) => items.page === "home_3").map((item) => (
                              <SwiperSlide key={item.id} className="swiper-slide">
                                 <div>
                                    <div className="td-testimonial-3-ratings mb-20">
                                       <span><i className="fa-sharp fa-solid fa-star"></i></span>
                                       <span><i className="fa-sharp fa-solid fa-star"></i></span>
                                       <span><i className="fa-sharp fa-solid fa-star"></i></span>
                                       <span><i className="fa-sharp fa-solid fa-star"></i></span>
                                       <span><i className="fa-sharp fa-solid fa-star"></i></span>
                                    </div>
                                    <p className="mb-20">{item.desc}</p>
                                    <div className="td-testimonial-3-avatar">
                                       <div className="td-testimonial-3-avatar-thumb mr-15">
                                          <Image src={item.user} alt="" />
                                       </div>
                                       <div>
                                          <h6 className="names">{item.user_name}</h6>
                                          <span className="td-position">{item.designation}</span>
                                       </div>
                                    </div>
                                 </div>
                              </SwiperSlide>
                           ))}
                        </Swiper>
                        <div className="td-testimonial-3-navigation">
                           <span className="td-testimonial-3-next d-inline-block">
                              <i className="fa-solid fa-angle-left"></i>
                           </span>
                           <span className="td-testimonial-3-prev d-inline-block">
                              <i className="fa-solid fa-angle-right"></i>
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="td-testimonial-3-video bg-position jarallax" style={{ backgroundImage: `url(${bg_img.src})` }}>
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

export default Testimonial
