"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import testi_data from "@/data/TestimonialData"
import Image from "next/image"

const setting = {
   slidesPerView: 1,
   spaceBetween: 26,
   loop: true,
   autoplay: {
      delay: 3500,
   },
   navigation: {
      nextEl: ".td-testimonial-4-next",
      prevEl: ".td-testimonial-4-prev",
   },
   breakpoints: {
      '1200': {
         slidesPerView: 3,
      },
      '991': {
         slidesPerView: 2,
      },
      '768': {
         slidesPerView: 2,
      },
      '576': {
         slidesPerView: 1,
      },
      '0': {
         slidesPerView: 1,
      },
   },
};

const Testimonial = () => {
   return (
      <div className="td-testimonial-area pt-140 pb-140">
         <div className="container">
            <div className="row align-items-end">
               <div className="col-xl-6 col-lg-8">
                  <div className="td-testimonial-4-title-wrap mb-40  wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <span className="td-section-subtitle td-section-subtitle-2 mb-20">Testimonials</span>
                     <h2 className="td-section-title mb-10">In Their Words Feedback  That Drives Change</h2>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-4">
                  <div className="td-testimonial-4-navigation mb-60 d-flex justify-content-lg-end">
                     <span className="td-testimonial-4-prev">
                        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M19.6027 8.28297C19.7675 8.11818 19.8527 7.90793 19.8527 7.68063C19.8527 7.45333 19.7618 7.23739 19.6027 7.07828C19.4436 6.91917 19.2277 6.82825 19.0003 6.82825L3.26943 6.82257L8.21321 1.87879C8.54848 1.54352 8.54279 1.00369 8.21321 0.674101C7.88362 0.344515 7.3381 0.344515 7.00283 0.679783L0.604336 7.07828C0.558876 7.12374 0.519099 7.17488 0.479321 7.23739L0.422496 7.33968L0.382719 7.47037C0.377036 7.49879 0.371353 7.53856 0.365671 7.56698C0.354306 7.64653 0.354306 7.71472 0.359988 7.77723C0.365671 7.81701 0.36567 7.86247 0.3884 7.91929L0.439543 8.06135L0.473638 8.12954C0.507733 8.18637 0.553194 8.24319 0.598654 8.28865L6.99715 14.6872C7.33242 15.0224 7.87226 15.0167 8.20184 14.6872C8.53143 14.3576 8.53143 13.812 8.20184 13.4825L3.25806 8.53868L18.9947 8.53868C19.222 8.53868 19.4379 8.44776 19.6027 8.28297Z" fill="currentColor" />
                        </svg>
                     </span>
                     <span className="td-testimonial-4-next">
                        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M0.397304 8.28297C0.232512 8.11818 0.147275 7.90793 0.147275 7.68063C0.147274 7.45333 0.238194 7.23739 0.397304 7.07828C0.556414 6.91917 0.77235 6.82825 0.99965 6.82825L16.7306 6.82257L11.7868 1.87879C11.4515 1.54352 11.4572 1.00369 11.7868 0.674101C12.1164 0.344515 12.6619 0.344515 12.9972 0.679783L19.3957 7.07828C19.4411 7.12374 19.4809 7.17488 19.5207 7.23739L19.5775 7.33968L19.6173 7.47037C19.623 7.49879 19.6286 7.53856 19.6343 7.56698C19.6457 7.64653 19.6457 7.71472 19.64 7.77723C19.6343 7.81701 19.6343 7.86247 19.6116 7.91929L19.5605 8.06135L19.5264 8.12954C19.4923 8.18637 19.4468 8.24319 19.4013 8.28865L13.0028 14.6872C12.6676 15.0224 12.1277 15.0167 11.7982 14.6872C11.4686 14.3576 11.4686 13.812 11.7982 13.4825L16.7419 8.53868L1.00533 8.53868C0.778033 8.53868 0.562097 8.44776 0.397304 8.28297Z" fill="currentColor" />
                        </svg>
                     </span>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <Swiper {...setting} modules={[Autoplay, Navigation]} className="swiper-container td-testimonial-4-slider">
                     {testi_data.filter((items) => items.page === "home_4").map((item) => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                           <div className="td-testimonial-4-item p-relative">
                              <div className="td-testimonial-4-rating mb-20">
                                 <span><i className="fa-solid fa-star"></i></span>
                                 <span><i className="fa-solid fa-star"></i></span>
                                 <span><i className="fa-solid fa-star"></i></span>
                                 <span><i className="fa-solid fa-star"></i></span>
                                 <span><i className="fa-solid fa-star"></i></span>
                              </div>
                              <p className="text mb-20">{item.desc}</p>
                              <div className="td-testimonial-4-avatar-wrap d-flex align-items-center">
                                 <div className="td-testimonial-4-avatar mr-15">
                                    <Image src={item.user} alt="" />
                                 </div>
                                 <div className="td-testimonial-4-content">
                                    <h5>{item.user_name}</h5>
                                    <span>{item.designation}</span>
                                 </div>
                              </div>
                              <span className="td-testimonial-4-qoute">
                                 <svg width="65" height="47" viewBox="0 0 65 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.051 23.521L37.051 4.14312C37.051 1.85725 38.9266 -2.27941e-06 41.248 -2.07647e-06L60.8162 -3.65761e-07C63.1244 -1.63968e-07 65 1.85725 65 4.14313L65 28.0927C65 33.9243 62.5473 41.8988 50.8091 46.7173C48.6451 47.5485 46.2187 46.4835 45.3793 44.3535C44.5662 42.2754 45.5367 39.9506 47.5958 39.0415C55.6749 35.7296 56.6192 31.2098 56.6192 28.0927L56.6192 27.6771L41.248 27.6771C38.9266 27.6771 37.051 25.8199 37.051 23.521Z" fill="#E6E6E6" />
                                    <path d="M2.0526e-06 23.521L3.74667e-06 4.14312C3.9465e-06 1.85725 1.87557 -5.51851e-06 4.18382 -5.31672e-06L23.7521 -3.60601e-06C26.0734 -3.40307e-06 27.949 1.85725 27.949 4.14312L27.949 28.0927C27.949 33.9243 25.4833 41.8988 13.745 46.7173C11.594 47.5485 9.1546 46.4835 8.3152 44.3535C7.50205 42.2754 8.4857 39.9506 10.5317 39.0415C18.6108 35.7296 19.5551 31.2098 19.5551 28.0927L19.5551 27.6771L4.18382 27.6771C1.87557 27.6771 1.85163e-06 25.8198 2.0526e-06 23.521Z" fill="#E6E6E6" />
                                 </svg>
                              </span>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Testimonial
