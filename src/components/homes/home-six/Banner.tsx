"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from "next/link"
import { StaticImageData } from 'next/image';

import bg_img1 from "@/assets/img/hero/hero-6/bg.jpg"
import bg_img2 from "@/assets/img/hero/hero-6/bg-2.jpg"
import bg_img3 from "@/assets/img/hero/hero-6/bg-3.jpg"

interface DataType {
   id: number;
   bg_img: StaticImageData;
   sub_title: string;
   title: string;
}

const banner_data: DataType[] = [
   {
      id: 1,
      bg_img: bg_img1,
      sub_title: "18 - 22 Nov, 2025",
      title: "Tech Conference Meetup 2025"
   },
   {
      id: 2,
      bg_img: bg_img2,
      sub_title: "18 - 22 Nov, 2025",
      title: "Gives you all you need to know"
   },
   {
      id: 3,
      bg_img: bg_img3,
      sub_title: "18 - 22 Nov, 2025",
      title: "Digital Marketing Meetup 2025"
   },
];

const setting = {
   slidesPerView: 1,
   speed: 1500,
   spaceBetween: 0,
   loop: true,
   autoplay: {
      delay: 3500,
   },
   navigation: {
      nextEl: ".td-hero-3-next",
      prevEl: ".td-hero-3-prev",
   },
};

const Banner = () => {
   return (
      <div className="td-hero-area td-hero-6-area fix p-relative">
         <span className="td-hero-6-blur d-none d-lg-block"></span>
         <span className="td-hero-6-blur-2 d-none d-lg-block"></span>
         <span className="td-hero-6-blur-2 d-none d-lg-block"></span>
         <Swiper {...setting} modules={[Navigation, Autoplay]} onSwiper={(swiper) => {
            swiper.wrapperEl.classList.add("p-relative");
         }} className="swiper-container td-hero-3-zoom">
            {banner_data.map((item) => (
               <SwiperSlide key={item.id} className="swiper-slide">
                  <div className="td-hero-3-item">
                     <div className="td-hero-3-bg bg-position" style={{ backgroundImage: `url(${item.bg_img.src})` }} data-swiper-parallax="1000"></div>
                     <div className="container">
                        <div className="td-hero-3-spacing">
                           <div className="row align-items-end">
                              <div className="col-xl-8 col-lg-10">
                                 <div className="td-hero-3-content p-relative mb-40">
                                    <span className="td-hero-6-box"></span>
                                    <span className="td-hero-3-subtitle text mb-10 d-inline-block">{item.sub_title}</span>
                                    <h2 className="td-hero-3-title mb-35 text2">{item.title}</h2>
                                    <Link className="td-btn td-btn-white td-left-right text3" href="/events">
                                       <span className="mr10 td-text d-inline-block mr-5">Book Your Seat</span>
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
               </SwiperSlide>
            ))}
         </Swiper>
         <div className="td-hero-3-navigation">
            <span className="td-hero-3-next d-inline-block">
               <i className="fa-sharp fa-regular fa-arrow-right"></i>
            </span>
            <span className="td-hero-3-prev d-inline-block">
               <i className="fa-sharp fa-regular fa-arrow-left"></i>
            </span>
         </div>
      </div>
   )
}

export default Banner
