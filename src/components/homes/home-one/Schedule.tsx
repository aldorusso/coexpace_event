"use client"
import { useState } from "react";
import schedule_data from "@/data/ScheduleData";
import Link from "next/link";

import bg_img from "@/assets/img/schedule/bg.jpg"

const tab_title: string[] = ["Day 01 - Nov 20, 2025", "Day 02 - Nov 21, 2025"]

const Schedule = () => {

   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   return (
      <div className="td-schedule-area bg-position pt-140 pb-140" style={{ backgroundImage: `url(${bg_img.src})` }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="td-schedule-title-wrap text-center mb-45 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".2s">
                     <span className="td-section-subtitle mb-25">Event Schedule</span>
                     <h2 className="td-section-title">Our Events Schedule Plan</h2>
                     <p className="td-section-text">Like previous year this year we are arranging world marketing <br />
                        summit 2025. Its the gathering of all the big</p>
                  </div>
                  <div className="nav td-schedule-tab-btn justify-content-center mb-30" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                     {tab_title.map((tab, index) => (
                        <button key={index} onClick={() => handleTabClick(index)} className={`nav-link p-relative ${activeTab === index ? "active" : ""}`} id="v-pills-home1-tab">
                           {tab}
                        </button>
                     ))}
                  </div>
                  <div className="tp-contact-form-wrapper tp-black-bg9  tab-content" id="v-pills-tabContent">
                     {schedule_data.map((items, index) => (
                        <div key={items.id} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`} id="v-pills-home1" role="tabpanel" aria-labelledby="v-pills-home1-tab">
                           <div className="td-schedule-bg">
                              {items.schedule_details.map((item) => (
                                 <div key={item.id} className="td-schedule-item">
                                    <div className="row gx-0 align-items-center">
                                       <div className="col-lg-2">
                                          <div className="td-schedule-time first text-center">
                                             <span>{item.time}</span>
                                             <span className="td-border"></span>
                                             <span>{item.time2}</span>
                                          </div>
                                       </div>
                                       <div className="col-lg-10">
                                          <div className="td-schedule-details first">
                                             <div className="row">
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                   <div className="td-schedule-content mb-20">
                                                      <span>Topics</span>
                                                      <p className="m-0">{item.Topics}</p>
                                                   </div>
                                                </div>
                                                <div className="col-lg-2 col-md-6 col-sm-6">
                                                   <div className="td-schedule-content ml-15 mb-20">
                                                      <span>Speaker</span>
                                                      <p className="m-0">{item.speaker}</p>
                                                   </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-6">
                                                   <div className="td-schedule-content ml-35 mb-20">
                                                      <span>Venue</span>
                                                      <p className="m-0">{item.venue}</p>
                                                   </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-6">
                                                   <div className="td-schedule-content text-center mb-20">
                                                      <Link className="td-btn td-left-right" href="#join-movement" onClick={(e) => {
                                                         e.preventDefault();
                                                         document.getElementById('join-movement')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                                      }}>
                                                         <span className="mr10 td-text d-inline-block mr-5">Register</span>
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
                                 </div>
                              ))}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Schedule
