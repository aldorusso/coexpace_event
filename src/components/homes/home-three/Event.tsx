"use client"
import { useState } from "react";
import event_two_data from "@/data/EventTwoData";
import Image from "next/image";
import Link from "next/link";

import bg_img from "@/assets/img/schedule/schedule-4/bg.jpg"

interface BtnData {
   id: number;
   title: string;
}

const tab_title: BtnData[] = [
   {
      id: 1,
      title: "Digital Marketing",
   },
   {
      id: 2,
      title: " Marketing Strategy",
   },
   {
      id: 3,
      title: " Modern Trend of Marketing",
   },
]

const Event = () => {

   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   return (
      <div className="td-schedule-area  pt-140 pb-110 bg-position" style={{ backgroundImage: `url(${bg_img.src})` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xxl-7 col-xl-9 col-lg-10">
                  <div className="td-schedule-2-title-wrap text-center mb-20  wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <span className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-30">Event Schedule</span>
                     <h2 className="td-section-title mb-10">Our Events Schedule Plan</h2>
                     <p className="td-section-text">Like previous year this year we are arranging world marketing <br />
                        summit 2025. Its the gathering of all the big</p>
                  </div>
                  <div className="nav td-schedule-tab-btn td-schedule-3-tab-btn justify-content-center mb-50  wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.5s" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                     {tab_title.map((item, index) => (
                        <button key={index} onClick={() => handleTabClick(index)} className={`nav-link p-relative ${activeTab === index ? "active" : ""}`} id="v-pills-home1-tab">
                           <span className="td-counts">Day-0{item.id}</span>
                           {item.title}
                        </button>
                     ))}
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="tp-contact-form-wrapper tp-black-bg9  tab-content" id="v-pills-tabContent">
                  {event_two_data.filter((items) => items.page === "home_3").map((items, index) => (
                     <div key={items.id} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`} id="v-pills-home1" role="tabpanel" aria-labelledby="v-pills-home1-tab">
                        {items.event_details.map((item) => (
                           <div key={item.id} className="td-schedule-3-wrap mb-30">
                              <div className="row align-items-center">
                                 <div className="col-xl-4 col-lg-5">
                                    <div className="td-schedule-3-thumb p-relative">
                                       <Link href="/events-details"><Image className="w-100" src={item.thumb} alt="" /></Link>
                                       <span className="td-schedule-2-date"><i className="flaticon-calendar"></i>{item.date}</span>
                                    </div>
                                 </div>
                                 <div className="col-xl-8 col-lg-7">
                                    <div className="td-schedule-3-content">
                                       <h2 className="td-schedule-3-title"><Link href="/events-details">{item.title}</Link></h2>
                                       <div className="td-schedule-3-destination mb-10">
                                          <span className="mr-25">
                                             <i className="flaticon-gps"></i>
                                             {item.location}
                                          </span>
                                          <span>
                                             <i className="flaticon-time"></i>
                                             {item.time}
                                          </span>
                                       </div>
                                       <p className="mb-25 para">{item.desc}</p>
                                       <div className="td-schedule-3-btn d-flex align-items-center flex-wrap">
                                          <div className="td-schedule-3-user-wrap d-flex align-items-center">
                                             <span className="td-schedule-3-user mr-10">
                                                <Image src={item.author_avatar} alt="" />
                                             </span>
                                             <div>
                                                <h6 className="name">{item.author_name}</h6>
                                                <span className="position">{item.author_designation}</span>
                                             </div>
                                          </div>
                                          <span className="dvdr"></span>
                                          <Link className="td-btn td-btn-3-squre td-left-right text3 mr-25" href="/events-details">
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
                        ))}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Event
