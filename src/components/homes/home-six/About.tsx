"use client"
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image"
import Link from "next/link"

import shape from "@/assets/img/about/about-6/round.png"
import about_thumb1 from "@/assets/img/about/about-6/thumb.jpg"
import about_thumb2 from "@/assets/img/about/about-6/thumb-2.jpg"

const About = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="td-about-area pt-150 pb-110">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-9 wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <div className="td-about-7-thumb p-relative mb-30 mr-90">
                        <span className="td-about-7-shape">
                           <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M38.1302 90.95C30.9402 90.95 21.4602 86.05 13.3802 78.17C7.70017 72.62 3.42017 66.3 1.34017 60.37C-0.779835 54.32 -0.379835 49.38 2.48017 46.45C4.17017 44.72 6.67017 43.8 9.71017 43.8C10.0502 43.8 10.4002 43.81 10.7602 43.83C10.4502 40.31 11.2802 37.44 13.1802 35.5C14.8702 33.77 17.3702 32.85 20.4102 32.85C20.7502 32.85 21.1002 32.86 21.4502 32.88C21.1402 29.36 21.9702 26.49 23.8702 24.55C25.5602 22.82 28.0602 21.9 31.1002 21.9C31.4402 21.9 31.7902 21.91 32.1402 21.93C31.8302 18.41 32.6602 15.54 34.5502 13.6C36.2402 11.87 38.7402 10.95 41.7802 10.95C42.1202 10.95 42.4702 10.96 42.8202 10.98C42.5102 7.46 43.3402 4.59 45.2302 2.65C46.9202 0.92 49.4202 0 52.4602 0C59.6502 0 69.1302 4.9 77.2102 12.78C89.0302 24.32 93.9202 38.55 88.1102 44.5C86.4202 46.23 83.9202 47.15 80.8902 47.15C80.5502 47.15 80.2002 47.14 79.8502 47.12C80.1602 50.64 79.3302 53.51 77.4302 55.45C75.7402 57.18 73.2402 58.1 70.2002 58.1C69.8602 58.1 69.5102 58.09 69.1602 58.07C69.4702 61.59 68.6402 64.46 66.7402 66.4C65.0502 68.13 62.5502 69.05 59.5102 69.05C59.1702 69.05 58.8202 69.04 58.4702 69.02C58.7802 72.54 57.9502 75.41 56.0502 77.35C54.3602 79.08 51.8602 80 48.8202 80C48.4802 80 48.1302 79.99 47.7702 79.97C48.0802 83.49 47.2502 86.36 45.3502 88.3C43.6602 90.03 41.1602 90.95 38.1202 90.95H38.1302ZM9.65016 46.24C7.32016 46.24 5.50016 46.89 4.26017 48.16C2.00017 50.48 1.86017 54.64 3.86017 59.88C5.92017 65.25 9.97017 71.06 15.2602 76.23C22.8802 83.67 31.8902 88.48 38.2002 88.48C40.5302 88.48 42.3502 87.83 43.5902 86.56C45.0902 85.03 45.6602 82.64 45.2602 79.63C38.6402 78.35 30.7502 73.73 24.0702 67.21C17.3902 60.69 12.5802 52.91 11.1402 46.32C10.6202 46.26 10.1202 46.24 9.64017 46.24H9.65016ZM47.3902 77.46C47.9102 77.52 48.4102 77.54 48.8902 77.54C51.2202 77.54 53.0402 76.89 54.2802 75.62C55.7802 74.09 56.3502 71.7 55.9502 68.69C49.3302 67.41 41.4402 62.79 34.7602 56.27C28.0802 49.75 23.2702 41.97 21.8302 35.38C21.3102 35.32 20.8102 35.3 20.3302 35.3C18.0002 35.3 16.1902 35.95 14.9402 37.22C13.4402 38.75 12.8702 41.14 13.2702 44.15C19.8902 45.43 27.7802 50.05 34.4602 56.57C41.1402 63.09 45.9502 70.87 47.3902 77.46ZM13.8402 46.83C15.4902 52.61 19.9602 59.45 25.9502 65.29C31.9402 71.14 38.8802 75.44 44.7002 76.95C43.0502 71.17 38.5802 64.34 32.5902 58.49C26.6002 52.64 19.6602 48.33 13.8402 46.83ZM58.0802 66.51C58.6002 66.57 59.1002 66.59 59.5802 66.59C61.9102 66.59 63.7202 65.94 64.9702 64.67C66.4702 63.14 67.0402 60.75 66.6402 57.74C60.0202 56.46 52.1302 51.84 45.4402 45.32C38.7602 38.8 33.9502 31.02 32.5102 24.43C31.9902 24.37 31.4902 24.35 31.0102 24.35C28.6802 24.35 26.8702 25 25.6202 26.27C24.1202 27.8 23.5502 30.19 23.9502 33.2C30.5702 34.48 38.4602 39.1 45.1402 45.62C51.8202 52.14 56.6302 59.92 58.0702 66.51H58.0802ZM24.5202 35.88C26.1702 41.66 30.6402 48.49 36.6302 54.34C42.6202 60.19 49.5602 64.5 55.3802 66C53.7302 60.22 49.2602 53.38 43.2702 47.54C37.2802 41.69 30.3402 37.39 24.5202 35.88ZM68.7602 55.56C69.2802 55.62 69.7802 55.64 70.2602 55.64C72.5902 55.64 74.4102 54.99 75.6502 53.72C77.1502 52.19 77.7202 49.8 77.3202 46.79C70.7002 45.51 62.8102 40.89 56.1202 34.37C49.4402 27.85 44.6302 20.07 43.1902 13.48C42.6702 13.42 42.1702 13.4 41.6902 13.4C39.3602 13.4 37.5402 14.05 36.3002 15.32C34.8002 16.85 34.2302 19.24 34.6302 22.25C41.2502 23.53 49.1402 28.15 55.8302 34.67C62.5102 41.19 67.3202 48.97 68.7602 55.56ZM35.2102 24.93C36.8602 30.71 41.3302 37.54 47.3202 43.39C53.3102 49.24 60.2502 53.55 66.0702 55.05C64.4202 49.27 59.9502 42.44 53.9602 36.59C47.9702 30.74 41.0302 26.43 35.2102 24.93ZM79.4502 44.61C79.9702 44.67 80.4702 44.69 80.9502 44.69C83.2802 44.69 85.1002 44.04 86.3402 42.77C91.1102 37.88 86.1802 25.28 75.3302 14.7C67.7102 7.26 58.7002 2.45 52.3902 2.45C50.0602 2.45 48.2402 3.1 47.0002 4.37C45.5002 5.9 44.9302 8.29 45.3302 11.3C51.9502 12.58 59.8402 17.2 66.5302 23.72C73.2102 30.24 78.0202 38.02 79.4602 44.61H79.4502ZM45.8902 13.99C47.5402 19.77 52.0102 26.61 58.0002 32.45C63.9902 38.3 70.9302 42.61 76.7502 44.11C75.1002 38.33 70.6302 31.49 64.6402 25.65C58.6502 19.8 51.7102 15.49 45.8902 13.99Z" fill="#DE549E" />
                           </svg>
                        </span>
                        <div className="td-about-7-video">
                           <div className="p-relative d-inline-block">
                              <Image className="rotate-infinite-2" src={shape} alt="" />
                              <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="td-video-play popup-video">
                                 <span className="p-relative z-index-11">
                                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M19.8571 12L0.571429 23.1346L0.57143 0.865352L19.8571 12Z" fill="currentColor" />
                                    </svg>
                                 </span>
                              </a>
                           </div>
                        </div>
                        <div className="thumb-1">
                           <Image src={about_thumb1} alt="" />
                        </div>
                        <div className="thumb-2 text-end">
                           <Image src={about_thumb2} alt="" />
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-9 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <div className="td-about-3-content-wrap mb-15">
                        <div className="td-about-2-content">
                           <span className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-20">about our Tech conferences</span>
                           <h2 className="td-section-title mb-15">Driving the Future of Information Technology</h2>
                           <p className="para para-2 mb-30">Join 500 others in Manhattan, NY for a full day of inspiring
                              keynotes and new connections at the premier <br />
                              conference for software Product Managers.</p>
                           <div className="td-about-3-clients td-about-7-clients mb-25">
                              <div className="items mb-10 d-flex">
                                 <span className="mb-10 icon">
                                    <i className="flaticon-meeting"></i>
                                 </span>
                                 <div>
                                    <h5 className="title">Worldwide Tech Events</h5>
                                    <p className="para">conference  a full day of inspiring keynotes connections
                                       for software Product Managers.</p>
                                 </div>
                              </div>
                              <div className="items d-flex mb-10">
                                 <span className="mb-10 icon">
                                    <i className="flaticon-handshake"></i>
                                 </span>
                                 <div>
                                    <h5 className="title">6,000+ people’s Meet-up</h5>
                                    <p className="para">conference  a full day of inspiring keynotes connections
                                       for software Product Managers.</p>
                                 </div>
                              </div>
                           </div>
                           <Link className="td-btn td-btn-green td-btn-3-squre td-left-right text3 d-inline-block" href="/about">
                              <span className="mr10 td-text d-inline-block mr-5">Become an Attendance</span>
                              <span className="td-arrow-angle">
                                 <svg className="td-arrow-svg-top-right" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="currentColor" />
                                    <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="currentColor" />
                                 </svg>
                              </span>
                           </Link>
                        </div>
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

export default About
