import Image from "next/image"

import about_thumb1 from "@/assets/img/about/about-details/thumb.jpg"
import about_thumb2 from "@/assets/img/about/about-details/thumb-2.jpg"
import about_thumb3 from "@/assets/img/about/about-details/thumb-3.jpg"
import shape_1 from "@/assets/img/about/about-details/shape-2.png"
import shape_2 from "@/assets/img/about/about-details/shape.png"
import Link from "next/link"

const AboutArea = () => {
   return (
      <div className="td-about-area pt-140 pb-50 p-relative fix">
         <h2 className="td-about-4-bigtitle td-team-bigtext">
            About
         </h2>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-6 col-lg-12">
                  <div className="td-about-4-thumb-wrap mr-45 mb-30">
                     <div className="row align-items-end">
                        <div className="col-lg-7 col-md-7 col-sm-7">
                           <div className="td-about-4-thumb mb-25">
                              <Image className="w-100 thumb wow td-animetion-left" data-wow-duration="1.5s" data-wow-delay="0.2s" src={about_thumb1} alt="" />
                           </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-5">
                           <div className="td-about-4-thumb text-center mb-25">
                              <Image className="mb-25 tdtranslateX2" src={shape_1} alt="" />
                              <Image className="w-100 thumb wow td-animetion-right" data-wow-duration="1.5s" data-wow-delay="0.2s" src={about_thumb3} alt="" />
                           </div>
                        </div>
                        <div className="col-lg-12">
                           <div className="td-about-4-thumb-2 p-relative text-center pb-40 mb-25 pl-70 mr-70">
                              <Image className="td-about-4-shape up-down" src={shape_2} alt="" />
                              <Image className="w-100 thumb wow td-animetion-top" data-wow-duration="1.5s" data-wow-delay="0.2s" src={about_thumb2} alt="" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-9">
                  <div className="td-about-3-content-wrap ml-20 mb-15 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.2s">
                     <span className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-15">About This Event</span>
                     <h2 className="td-section-title mb-15">Business Conference <br /> for Solving Problems</h2>
                     <p className="para para-2 mb-30">Join 500 others in Manhattan, NY for a full day of inspiring
                        keynotes and new connections at the premier <br />
                        conference for software Product Managers.</p>
                     <div className="td-about-3-clients d-flex flex-wrap">
                        <div className="mb-15 items mr-40 d-flex align-items-center">
                           <span className="mb-10 mr-15 icon">
                              <i className="flaticon-meeting"></i>
                           </span>
                           <h5 className="title">6,000+ people’s<br /> In Person Meet-up</h5>
                        </div>
                        <div className="mb-15 items d-flex align-items-center">
                           <span className="mb-10 mr-15 icon">
                              <i className="flaticon-handshake"></i>
                           </span>
                           <h5 className="title">Connect with<br /> Industry Leaders</h5>
                        </div>
                     </div>
                     <p className="para mb-40"> when an unknown printer took a galley type and scrambled dear awreleather
                        to make a type specimen book. It has survived not only five areaw centuri
                        but also the leap into electronic typesetting, remaining essenti
                        unchanged. It was popularised.</p>
                     <div className="td-about-3-btn d-flex align-items-center">
                        <Link className="td-btn td-btn-3-squre mb-15 td-left-right text3 mr-25" href="/contact">
                           <span className="mr10 td-text d-inline-block mr-5">Buy Ticket</span>
                           <span className="td-arrow-angle">
                              <svg className="td-arrow-svg-top-right" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="white" />
                                 <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="white" />
                              </svg>
                           </span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutArea
