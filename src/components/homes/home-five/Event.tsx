"use client"
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { JSX } from "react";

import avatar_1 from "@/assets/img/schedule/schedule-6/bg.png"
import avatar_2 from "@/assets/img/schedule/schedule-6/bg-2.png"
import avatar_3 from "@/assets/img/schedule/schedule-6/bg-3.png"

interface DataType {
   id: number;
   event_details: {
      id: number;
      date: JSX.Element;
      title: string;
      location: string;
      time: string;
      desc: string;
      author_avatar: StaticImageData;
      author_name: string;
      author_designation: string;
   }[]
}

const event_data: DataType[] = [
   {
      id: 1,
      event_details: [
         {
            id: 1,
            date: (<><h4 className="mb-0 mr-10">19</h4><span>October,<br /> 2025</span></>),
            title: "Fashion forum: trends in 2025",
            location: "54 Street, Newyork City",
            time: "9.00am - 10.00 am",
            desc: "Like previous year this year we are arranging world marketing summit 2024. Its the gathering of all the big",
            author_avatar: avatar_1,
            author_name: "Jerome Bell",
            author_designation: "Sr. Designer",
         },
         {
            id: 2,
            date: (<><h4 className="mb-0 mr-10">19</h4><span>October,<br /> 2025</span></>),
            title: "Fashion forum: trends in 2025",
            location: "54 Street, Newyork City",
            time: "9.00am - 10.00 am",
            desc: "Like previous year this year we are arranging world marketing summit 2024. Its the gathering of all the big",
            author_avatar: avatar_2,
            author_name: "Jerome Bell",
            author_designation: "Sr. Designer",
         },
         {
            id: 3,
            date: (<><h4 className="mb-0 mr-10">19</h4><span>October,<br /> 2025</span></>),
            title: "Fashion forum: trends in 2025",
            location: "54 Street, Newyork City",
            time: "9.00am - 10.00 am",
            desc: "Like previous year this year we are arranging world marketing summit 2024. Its the gathering of all the big",
            author_avatar: avatar_3,
            author_name: "Jerome Bell",
            author_designation: "Sr. Designer",
         },
      ],
   },
   {
      id: 2,
      event_details: [
         {
            id: 1,
            date: (<><h4 className="mb-0 mr-10">19</h4><span>October,<br /> 2025</span></>),
            title: "Fashion forum: trends in 2025",
            location: "54 Street, Newyork City",
            time: "9.00am - 10.00 am",
            desc: "Like previous year this year we are arranging world marketing summit 2024. Its the gathering of all the big",
            author_avatar: avatar_3,
            author_name: "Jerome Bell",
            author_designation: "Sr. Designer",
         },
         {
            id: 2,
            date: (<><h4 className="mb-0 mr-10">19</h4><span>October,<br /> 2025</span></>),
            title: "Fashion forum: trends in 2025",
            location: "54 Street, Newyork City",
            time: "9.00am - 10.00 am",
            desc: "Like previous year this year we are arranging world marketing summit 2024. Its the gathering of all the big",
            author_avatar: avatar_2,
            author_name: "Jerome Bell",
            author_designation: "Sr. Designer",
         },
      ],
   },
   {
      id: 3,
      event_details: [
         {
            id: 1,
            date: (<><h4 className="mb-0 mr-10">19</h4><span>October,<br /> 2025</span></>),
            title: "Fashion forum: trends in 2025",
            location: "54 Street, Newyork City",
            time: "9.00am - 10.00 am",
            desc: "Like previous year this year we are arranging world marketing summit 2024. Its the gathering of all the big",
            author_avatar: avatar_2,
            author_name: "Jerome Bell",
            author_designation: "Sr. Designer",
         },
         {
            id: 2,
            date: (<><h4 className="mb-0 mr-10">19</h4><span>October,<br /> 2025</span></>),
            title: "Fashion forum: trends in 2025",
            location: "54 Street, Newyork City",
            time: "9.00am - 10.00 am",
            desc: "Like previous year this year we are arranging world marketing summit 2024. Its the gathering of all the big",
            author_avatar: avatar_3,
            author_name: "Jerome Bell",
            author_designation: "Sr. Designer",
         },
      ],
   },
]

interface BtnData {
   id: number;
   title: string;
}

const tab_title: BtnData[] = [
   {
      id: 1,
      title: "17 Oct, 2025",
   },
   {
      id: 2,
      title: "20 Oct, 2025",
   },
   {
      id: 3,
      title: "25 Oct, 2025",
   },
]

const Event = () => {

   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   return (
      <div className="td-schedule-area grey-bg-4 pt-130 p-relative z-index-1 fix pb-130">
         <div className="td-hero-4-blur td-team-5-blur"></div>
         <div className="td-hero-4-blur td-hero-4-blur-2 td-team-5-blur-2"></div>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xxl-7 col-xl-9 col-lg-10">
                  <div className="td-schedule-4-title-wrap text-center mb-30  wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <span className="td-section-subtitle td-section-subtitle-2 mb-20">Event Schedule</span>
                     <h2 className="td-section-title mb-10">Our Events Schedule Plan</h2>
                     <p className="td-section-text">Like previous year this year we are arranging world marketing <br />
                        summit 2025. Its the gathering of all the big</p>
                  </div>
                  <div className="nav td-schedule-5-tab-btn justify-content-center mb-30  wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.5s" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                     {tab_title.map((item, index) => (
                        <button key={index} onClick={() => handleTabClick(index)} className={`nav-link p-relative mb-10 ${activeTab === index ? "active" : ""}`} id="v-pills-home1-tab">
                           <span className="td-counts">Day-0{item.id}</span>
                           <span className="d-block">{item.title}</span>
                        </button>
                     ))}
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="tp-contact-form-wrapper tab-content" id="v-pills-tabContent">

                  {event_data.map((items, index) => (
                     <div key={items.id} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`} id="v-pills-home1" role="tabpanel" aria-labelledby="v-pills-home1-tab">
                        <div className="row">
                           <div className="col-lg-12">
                              {items.event_details.map((item) => (
                                 <div key={item.id} className="td-schedule-5-wrap">
                                    <div className="row gx-30 align-items-center">
                                       <div className="col-xl-4 col-lg-5">
                                          <div className="td-schedule-5-left-content d-flex align-items-center">
                                             <div className="td-schedule-5-thumb mb-20 mr-30">
                                                <Link href="/events-details"><Image src={item.author_avatar} alt="" /></Link>
                                             </div>
                                             <div className="td-schedule-5-date-wrap mb-20 w-100">
                                                <div className="td-schedule-5-date d-flex mb-15">
                                                   {item.date}
                                                </div>
                                                <div className="td-schedule-5-left-border mb-15"></div>
                                                <div className="td-schedule-5-name">
                                                   <h4 className="mb-0">{item.author_name}</h4>
                                                   <span>{item.author_designation}</span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-xl-5 col-lg-7">
                                          <div className="td-schedule-4-content td-schedule-5-content mb-30">
                                             <h2 className="td-schedule-4-title"><Link href="/events-details">{item.title}</Link></h2>
                                             <p>{item.desc}</p>
                                             <div className="td-schedule-4-destination mb-10">
                                                <span>
                                                   <i className="flaticon-gps"></i>
                                                   {item.location}
                                                </span>
                                                <span>
                                                   <i className="flaticon-time"></i>
                                                   {item.time}
                                                </span>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-xl-3 col-lg-12">
                                          <div className="td-schedule-5-btn text-xl-end">
                                             <Link className="td-btn td-btn-green td-btn-3-squre td-left-right text" href="/events-details">
                                                <span className="td-text d-inline-block mr-5">Buy Ticket</span>
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
                              ))}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Event
