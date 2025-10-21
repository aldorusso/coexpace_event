"use client"
import Image from "next/image"
import ScheduleTeam from "./ScheduleTeam"
import EventSidebar from "./EventSidebar"

import event_1 from "@/assets/img/schedule/schedule-details/thumb.jpg"

const EventDetailsArea = () => {
   return (
      <div className="td-schedule-details-area pt-140 pb-140">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="td-schedule-details-left mb-40">
                     <div className="td-schedule-details-thumb mb-25">
                        <Image className="w-100 wow td-animetion-top" data-wow-duration="1.5s" data-wow-delay="0.3s" src={event_1} alt="" />
                     </div>
                     <div className="td-schedule-details-content">
                        <h2 className="td-schedule-details-title mb-25">Aimply dummy text of the printing and typeset
                           ting irem Ipsum has been theardtrullam</h2>
                        <p>Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum
                           my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                           specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                           essentially unchanged. It was popularised.</p>
                        <p className="mb-35">Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum
                           my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                           specimen book. It has survived not only five centuries, but also the leap.</p>
                        <h2 className="td-schedule-details-title-2 mb-20">Digital Working Events Information</h2>
                        <p className="mb-20">Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum
                           my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                           specimen book. It has survived not only five centuries, but also the leap.</p>
                     </div>
                     <div className="td-schedule-details-list mb-45">
                        <ul>
                           <li>
                              <span className="mr-15">
                                 <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 11.9943V13.0063C23.9986 15.3784 23.2305 17.6864 21.8103 19.5863C20.39 21.4862 18.3936 22.876 16.1189 23.5486C13.8442 24.2211 11.413 24.1404 9.18791 23.3183C6.96285 22.4963 5.06312 20.977 3.77206 18.9871C2.48099 16.9971 1.86777 14.6432 2.02384 12.2762C2.17992 9.90931 3.09693 7.65625 4.63811 5.85307C6.17929 4.0499 8.26206 2.79322 10.5758 2.27046C12.8895 1.7477 15.3103 1.98687 17.477 2.9523M24 4.2063L13 15.2173L9.7 11.9173" stroke="#5033FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                              </span>
                              <span>Aenean eu leo quam ornare curabitur blandit th
                                 e tempus pellentesque odio</span>
                           </li>
                           <li>
                              <span className="mr-15">
                                 <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 11.9943V13.0063C23.9986 15.3784 23.2305 17.6864 21.8103 19.5863C20.39 21.4862 18.3936 22.876 16.1189 23.5486C13.8442 24.2211 11.413 24.1404 9.18791 23.3183C6.96285 22.4963 5.06312 20.977 3.77206 18.9871C2.48099 16.9971 1.86777 14.6432 2.02384 12.2762C2.17992 9.90931 3.09693 7.65625 4.63811 5.85307C6.17929 4.0499 8.26206 2.79322 10.5758 2.27046C12.8895 1.7477 15.3103 1.98687 17.477 2.9523M24 4.2063L13 15.2173L9.7 11.9173" stroke="#5033FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                              </span>
                              <span>Aenean eu leo quam ornare curabitur blandit th
                                 e tempus pellentesque odio</span>
                           </li>
                           <li>
                              <span className="mr-15">
                                 <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 11.9943V13.0063C23.9986 15.3784 23.2305 17.6864 21.8103 19.5863C20.39 21.4862 18.3936 22.876 16.1189 23.5486C13.8442 24.2211 11.413 24.1404 9.18791 23.3183C6.96285 22.4963 5.06312 20.977 3.77206 18.9871C2.48099 16.9971 1.86777 14.6432 2.02384 12.2762C2.17992 9.90931 3.09693 7.65625 4.63811 5.85307C6.17929 4.0499 8.26206 2.79322 10.5758 2.27046C12.8895 1.7477 15.3103 1.98687 17.477 2.9523M24 4.2063L13 15.2173L9.7 11.9173" stroke="#5033FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                              </span>
                              <span>Aenean eu leo quam ornare curabitur blandit th
                                 e tempus pellentesque odio</span>
                           </li>
                           <li>
                              <span className="mr-15">
                                 <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 11.9943V13.0063C23.9986 15.3784 23.2305 17.6864 21.8103 19.5863C20.39 21.4862 18.3936 22.876 16.1189 23.5486C13.8442 24.2211 11.413 24.1404 9.18791 23.3183C6.96285 22.4963 5.06312 20.977 3.77206 18.9871C2.48099 16.9971 1.86777 14.6432 2.02384 12.2762C2.17992 9.90931 3.09693 7.65625 4.63811 5.85307C6.17929 4.0499 8.26206 2.79322 10.5758 2.27046C12.8895 1.7477 15.3103 1.98687 17.477 2.9523M24 4.2063L13 15.2173L9.7 11.9173" stroke="#5033FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                              </span>
                              <span>Aenean eu leo quam ornare curabitur blandit th
                                 e tempus pellentesque odio</span>
                           </li>
                        </ul>
                     </div>
                     <ScheduleTeam />
                  </div>
               </div>
               <div className="col-lg-4">
                  <EventSidebar />
               </div>
            </div>
         </div>
      </div>
   )
}

export default EventDetailsArea
