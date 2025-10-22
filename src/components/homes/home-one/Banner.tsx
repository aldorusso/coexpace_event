"use client"
import BannerIconOne from "./BannerIconOne"
import Link from "next/link"
import Image from "next/image"
import DealCounter from "@/components/common/DealCounter"

import shape from "@/assets/img/hero/shape.png"
import banner_thumb from "@/assets/img/hero/thumb.png"
import bg_img from "@/assets/img/hero/bg.jpg"

const Banner = () => {

   return (
      <div className="td-hero-area td-hero-spacing bg-position p-relative fix" style={{ backgroundImage: `url(${bg_img.src})` }}>
         <div className="td-hero-text-shape wow td-animetion-left" data-wow-duration="1.5s" data-wow-delay="1s">
            <BannerIconOne />
         </div>
         <div className="container-fluid container-1680">
            <div className="row align-items-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="td-hero-content p-relative mb-30 pl-165">
                     <span className="td-hero-subtitle mb-10 wow td-animetion-left" data-wow-duration="1.5s" data-wow-delay="0.1s">20 - 21 November, 2025</span>
                     <h2 className="td-hero-title wow td-animetion-left" data-wow-duration="1.5s" data-wow-delay="0.3s">The Invisible Emergency</h2>
                     <p className="td-hero-location wow mb-35 td-animetion-left" data-wow-duration="1.5s" data-wow-delay="0.5s">The Mental Health Crisis of Our Time</p>
                     <div className="td-hero-countdown mb-40 wow td-animetion-right" data-wow-duration="1.5s" data-wow-delay="0.7s">
                        <ul className="deal-counter ml0-md" id="timer">
                           <DealCounter expiryTimestamp={new Date("2025-11-20T09:00:00")} />
                        </ul>
                     </div>
                     <Link className="td-btn td-left-right wow  td-animetion-top" data-wow-duration="1.5s" data-wow-delay="0.9s" href="#">
                        <span className="mr10 td-text d-inline-block mr-5">REGISTER</span>
                        <span className="td-arrow-angle">
                           <svg className="td-arrow-svg-top-right" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="white" />
                              <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="white" />
                           </svg>
                        </span>
                     </Link>
                     <div className="td-hero-social d-flex align-items-center">
                        <span>Follow Us On:</span>
                        <span><Link href="https://www.linkedin.com/company/coexpace.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link></span>
                        <span><Link href="https://www.instagram.com/coexpace_/" target="_blank"><i className="fa-brands fa-instagram"></i></Link></span>
                        <span><Link href="https://www.facebook.com/Coexpace.org/" target="_blank"><i className="fa-brands fa-facebook"></i></Link></span>
                        <span className="hero-border"></span>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-12">
                  <div className="td-hero-thumb mb-30 p-relative">
                     <div className="td-hero-shape-one up-down">
                        <Image src={shape} alt="" />
                     </div>
                     <div className="td-hero-shape-two up-down">
                        <Image src={shape} alt="" />
                     </div>
                     <Image className="w-100" src={banner_thumb} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Banner
