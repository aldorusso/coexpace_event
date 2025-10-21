"use client"
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import event_1 from "@/assets/img/schedule/schedule-5/thumb.jpg"
import event_2 from "@/assets/img/schedule/schedule-5/thumb-2.jpg"
import event_3 from "@/assets/img/schedule/schedule-5/thumb-3.jpg"
import event_4 from "@/assets/img/schedule/schedule-5/thumb-4.jpg"

interface DataType {
   id: number;
   event_details: {
      id: number;
      thumb: StaticImageData;
      title: string;
      location: string;
      time: string;
      author_name: string;
      author_designation: string;
   }[]
}

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

const event_data: DataType[] = [
   {
      id: 1,
      event_details: [
         {
            id: 1,
            title: "International Education AI summit",
            location: "54 Street, Newyork City",
            time: "9.00am - 10.00 am",
            author_name: "Jerome Bell",
            author_designation: "Esther Howard",
            thumb: event_1,
         },
         {
            id: 2,
            title: "What I Wish Someone Told Me When I Was",
            location: "54 Street, Newyork City",
            time: "9.00am - 10.00 am",
            author_name: "Jerome Bell",
            author_designation: "Esther Howard",
            thumb: event_2,
         },
         {
            id: 3,
            title: "Elevate Business User Experience 2025",
            location: "54 Street, Newyork City",
            time: "9.00am - 10.00 am",
            author_name: "Jerome Bell",
            author_designation: "Esther Howard",
            thumb: event_3,
         },
         {
            id: 4,
            title: "Design Patterns For AI Interfaces",
            location: "54 Street, Newyork City",
            time: "9.00am - 10.00 am",
            author_name: "Jerome Bell",
            author_designation: "Esther Howard",
            thumb: event_4,
         },
      ],
   },
   {
      id: 2,
      event_details: [
         {
            id: 1,
            title: "International Education AI summit",
            location: "54 Street, Newyork City",
            time: "9.00am - 10.00 am",
            author_name: "Jerome Bell",
            author_designation: "Esther Howard",
            thumb: event_1,
         },
         {
            id: 2,
            title: "What I Wish Someone Told Me When I Was",
            location: "54 Street, Newyork City",
            time: "9.00am - 10.00 am",
            author_name: "Jerome Bell",
            author_designation: "Esther Howard",
            thumb: event_2,
         },
         {
            id: 3,
            title: "Design Patterns For AI Interfaces",
            location: "54 Street, Newyork City",
            time: "9.00am - 10.00 am",
            author_name: "Jerome Bell",
            author_designation: "Esther Howard",
            thumb: event_4,
         },
      ],
   },
   {
      id: 3,
      event_details: [
         {
            id: 1,
            title: "International Education AI summit",
            location: "54 Street, Newyork City",
            time: "9.00am - 10.00 am",
            author_name: "Jerome Bell",
            author_designation: "Esther Howard",
            thumb: event_1,
         },
         {
            id: 2,
            title: "What I Wish Someone Told Me When I Was",
            location: "54 Street, Newyork City",
            time: "9.00am - 10.00 am",
            author_name: "Jerome Bell",
            author_designation: "Esther Howard",
            thumb: event_2,
         },
         {
            id: 3,
            title: "Elevate Business User Experience 2025",
            location: "54 Street, Newyork City",
            time: "9.00am - 10.00 am",
            author_name: "Jerome Bell",
            author_designation: "Esther Howard",
            thumb: event_3,
         },
      ],
   },
]

const Event = () => {

   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   return (
      <div className="td-schedule-area grey-bg-4 pt-130 p-relative z-index-1 fix pb-100">
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
                  <div className="nav td-schedule-4-tab-btn justify-content-center mb-50  wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.5s" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                     {tab_title.map((item, index) => (
                        <button key={index} onClick={() => handleTabClick(index)} className={`nav-link p-relative ${activeTab === index ? "active" : ""}`} id="v-pills-home1-tab">
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
                           {items.event_details.map((item) => (
                              <div key={item.id} className="col-lg-6 col-md-6">
                                 <div className="td-schedule-4-wrap mb-30">
                                    <div className="row gx-30">
                                       <div className="col-xl-5 mb-30">
                                          <div className="td-schedule-4-thumb">
                                             <Link href="/events-details"><Image className="w-100" src={item.thumb} alt="" /></Link>
                                          </div>
                                       </div>
                                       <div className="col-xl-7 mb-30">
                                          <div className="td-schedule-4-content">
                                             <h2 className="td-schedule-4-title"><Link href="/events-details">{item.title}</Link></h2>
                                             <div className="td-schedule-4-destination mb-10">
                                                <span>
                                                   <i className="flaticon-gps"></i>
                                                   {item.location}
                                                </span>
                                                <span>
                                                   <i className="flaticon-account"></i>
                                                   {item.author_name}
                                                </span>
                                                <span>
                                                   <i className="flaticon-time"></i>
                                                   {item.time}
                                                </span>
                                             </div>
                                             <Link className="td-btn td-btn-3-squre td-left-right text" href="/events-details">
                                                <span className="td-text d-inline-block mr-5">Get your Ticket</span>
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
                           ))}
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
