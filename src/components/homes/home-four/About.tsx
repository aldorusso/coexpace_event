import Link from "next/link"
import Image from "next/image"

import about_1 from "@/assets/img/about/about-4/thumb.jpg"
import about_2 from "@/assets/img/about/about-4/thumb-2.jpg"
import shape from "@/assets/img/about/about-4/text.png"

const About = () => {
   return (
      <div className="td-about-area pt-130 pb-100">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-6 col-lg-10">
                  <div className="td-about-4-content mb-15 wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <span className="td-section-subtitle td-section-subtitle-2 mb-20">About This Event</span>
                     <h2 className="td-section-title mb-15">Educating for the Future
                        Join 500 others Kainty <br />
                        NY for a full day</h2>
                     <p className="td-section-4-para mb-30">when an unknown printer took a galley of type and scrambled
                        makespecimen booksurvived not only five centurie</p>
                     <div className="td-about-3-clients td-about-5-clients">
                        <div className="row">
                           <div className="col-lg-6 col-md-6 col-sm-6">
                              <div className="items mb-30 d-flex align-items-center">
                                 <span className="mb-10 icon mr-25">
                                    <i className="flaticon-meeting"></i>
                                 </span>
                                 <h5 className="title">Career<br /> development</h5>
                              </div>
                           </div>
                           <div className="col-lg-6 col-md-6 col-sm-6">
                              <div className="items mb-30 d-flex align-items-center">
                                 <span className="mb-10 icon mr-25">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23.04 31.3472V36.96C23.04 38.6368 21.68 40 20 40C18.32 40 16.96 38.6368 16.96 36.96V31.3472L20 26.0832L23.04 31.3472Z" fill="currentColor" />
                                       <path d="M23.04 3.04V8.6528L20 13.9168L16.96 8.6528V3.04C16.96 1.3632 18.32 0 20 0C20.8384 0 21.6 0.3392 22.1504 0.8896C22.7008 1.44 23.04 2.2016 23.04 3.04Z" fill="currentColor" />
                                       <path d="M16.96 8.6528V14.7328L11.6896 11.6896L8.8864 6.8352C8.048 5.3792 8.544 3.52 10 2.6784C10.48 2.4032 11.0016 2.272 11.5168 2.272C12.5696 2.272 13.5904 2.816 14.1536 3.792L16.96 8.6528Z" fill="currentColor" />
                                       <path d="M30 37.3216C28.544 38.16 26.6848 37.6608 25.8464 36.208L23.04 31.3472V25.2672L28.3104 28.3104L31.1136 33.1648C31.952 34.6208 31.456 36.48 30 37.3216Z" fill="currentColor" />
                                       <path d="M14.7328 16.96H8.6528L3.792 14.1536C2.3392 13.3152 1.84 11.456 2.6784 10C3.2416 9.024 4.2656 8.48 5.3152 8.48C5.8336 8.48 6.3552 8.6112 6.8352 8.8864L11.6896 11.6896L14.7328 16.96Z" fill="currentColor" />
                                       <path d="M37.3216 30C36.48 31.456 34.6208 31.952 33.1648 31.1136L28.3104 28.3104L25.2672 23.04H31.3472L36.208 25.8464C37.6608 26.6848 38.16 28.544 37.3216 30Z" fill="currentColor" />
                                       <path d="M13.9168 20L8.6528 23.04H3.04C1.3632 23.04 0 21.68 0 20C0 19.1616 0.3392 18.4 0.8896 17.8496C1.44 17.2992 2.2016 16.96 3.04 16.96H8.6528L13.9168 20Z" fill="currentColor" />
                                       <path d="M40 20C40 21.68 38.6368 23.04 36.96 23.04H31.3472L26.0832 20L31.3472 16.96H36.96C38.6368 16.96 40 18.32 40 20Z" fill="currentColor" />
                                       <path d="M14.7328 23.04L11.6896 28.3104L6.8352 31.1136C5.3792 31.952 3.52 31.456 2.6784 30C2.4032 29.52 2.272 28.9984 2.272 28.4832C2.272 27.4304 2.816 26.4096 3.792 25.8464L8.6528 23.04H14.7328Z" fill="currentColor" />
                                       <path d="M36.208 14.1536L31.3472 16.96H25.2672L28.3104 11.6896L33.1648 8.8864C34.6208 8.048 36.48 8.544 37.3216 10C38.16 11.456 37.6608 13.3152 36.208 14.1536Z" fill="currentColor" />
                                       <path d="M16.96 25.2672V31.3472L14.1536 36.208C13.3152 37.6608 11.456 38.16 10 37.3216C9.024 36.7584 8.48 35.7344 8.48 34.6848C8.48 34.1664 8.6112 33.6448 8.8864 33.1648L11.6896 28.3104L16.96 25.2672Z" fill="currentColor" />
                                       <path d="M31.1136 6.8352L28.3104 11.6896L23.04 14.7328V8.6528L25.8464 3.792C26.6848 2.3392 28.544 1.84 30 2.6784C31.456 3.52 31.952 5.3792 31.1136 6.8352Z" fill="currentColor" />
                                    </svg>
                                 </span>
                                 <h5 className="title">Technology<br /> in education</h5>
                              </div>
                           </div>
                           <div className="col-lg-6 col-md-6 col-sm-6">
                              <div className="items mb-30 d-flex align-items-center">
                                 <span className="mb-10 icon mr-25">
                                    <i className="flaticon-handshake"></i>
                                 </span>
                                 <h5 className="title">Innovative <br />learning</h5>
                              </div>
                           </div>
                           <div className="col-lg-6 col-md-6 col-sm-6">
                              <div className="items mb-30 d-flex align-items-center">
                                 <span className="mb-10 icon mr-25">
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M17.5672 17.5C27.202 17.458 35 8.75 35 8.75C35 8.75 27.202 0.042 17.5672 0H17.5C7.8344 0 0 8.75 0 8.75C0 8.75 7.8344 17.5 17.5 17.5C7.8344 17.5 0 26.25 0 26.25C0 26.25 7.8344 35 17.5 35H17.5672C27.202 34.958 35 26.25 35 26.25C35 26.25 27.202 17.542 17.5672 17.5ZM11.914 8.8648C11.914 5.7792 14.4144 3.2788 17.5 3.2788C17.5224 3.2788 17.5448 3.2788 17.5672 3.2816C20.622 3.3152 23.086 5.8016 23.086 8.8648C23.086 11.928 20.622 14.4116 17.5672 14.4452C17.5448 14.448 17.5224 14.448 17.5 14.448C14.4144 14.448 11.914 11.9476 11.914 8.8648ZM17.5672 31.962C17.5448 31.9648 17.5224 31.9648 17.5 31.9648C14.4144 31.9648 11.914 29.4644 11.914 26.3816C11.914 23.2988 14.4144 20.7956 17.5 20.7956C17.5224 20.7956 17.5448 20.7956 17.5672 20.7984C20.622 20.832 23.086 23.3184 23.086 26.3816C23.086 29.4448 20.622 31.9284 17.5672 31.962Z" fill="currentColor" />
                                    </svg>
                                 </span>
                                 <h5 className="title">Networking<br /> hub</h5>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="td-about-3-btn mt-10 d-flex align-items-center">
                        <Link className="td-btn td-btn-3-squre mb-15 td-left-right text3 mr-25" href="/about">
                           <span className="mr10 td-text d-inline-block mr-5">Read More</span>
                           <span className="td-arrow-angle">
                              <svg className="td-arrow-svg-top-right" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="white" />
                                 <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="white" />
                              </svg>
                           </span>
                        </Link>
                        <div className="td-about-3-number mb-15 d-flex align-items-center">
                           <span className="call-icon mr-10">
                              <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M19.9637 15.6422V18.4523C19.9648 18.7132 19.9114 18.9714 19.8068 19.2104C19.7023 19.4494 19.5491 19.664 19.3568 19.8404C19.1646 20.0167 18.9377 20.151 18.6905 20.2346C18.4434 20.3181 18.1816 20.3492 17.9217 20.3257C15.0394 20.0125 12.2707 19.0276 9.83806 17.45C7.57484 16.0119 5.65603 14.0931 4.21788 11.8299C2.63485 9.38622 1.64969 6.60403 1.34223 3.70871C1.31882 3.44969 1.3496 3.18862 1.43262 2.94214C1.51563 2.69567 1.64906 2.46917 1.82441 2.27709C1.99975 2.085 2.21317 1.93153 2.45108 1.82644C2.68899 1.72136 2.94617 1.66696 3.20625 1.66672H6.01634C6.47092 1.66224 6.91162 1.82322 7.2563 2.11964C7.60098 2.41606 7.82611 2.8277 7.88973 3.27783C8.00834 4.17712 8.2283 5.06011 8.54542 5.90995C8.67144 6.24521 8.69872 6.60958 8.62401 6.95987C8.5493 7.31016 8.37575 7.6317 8.1239 7.88637L6.9343 9.07598C8.26774 11.421 10.2094 13.3627 12.5545 14.6962L13.7441 13.5065C13.9988 13.2547 14.3203 13.0811 14.6706 13.0064C15.0209 12.9317 15.3852 12.959 15.7205 13.085C16.5703 13.4022 17.4533 13.6221 18.3526 13.7407C18.8076 13.8049 19.2232 14.0341 19.5202 14.3847C19.8173 14.7353 19.9751 15.1828 19.9637 15.6422Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                           </span>
                           <div>
                              <span className="subtitle">Call Us:</span>
                              <h5 className="td-number"><Link href="tel:+1(1234)-567-800">+1 (1234)-567-800</Link></h5>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-10">
                  <div className="td-about-5-thumb mb-30 p-relative wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <Image className="thumb-1" src={about_1} alt="" />
                     <Image className="thumb-2" src={about_2} alt="" />
                     <div className="td-about-5-rounded-text">
                        <div className="td-about-5-rounded-text-inner p-relative">
                           <div className="td-about-5-text">
                              <Image className="rotate-infinite-2" src={shape} alt="" />
                           </div>
                           <div className="td-about-5-rounded-icon">
                              <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path fillRule="evenodd" clipRule="evenodd" d="M38.8137 19.4068C28.0962 19.4068 19.4068 10.7174 19.4068 -0.000122919C19.4068 10.7174 10.7192 19.4068 -5.957e-05 19.4068C10.7175 19.4068 19.4068 28.0944 19.4068 38.8137C19.4068 28.0961 28.0945 19.4068 38.8137 19.4068Z" fill="#F248B4" />
                              </svg>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
