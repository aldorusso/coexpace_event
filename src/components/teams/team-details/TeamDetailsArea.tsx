"use client";
import React, { useState } from "react";
import Image from "next/image"
import Link from "next/link"

import team_thumb from "@/assets/img/team/details/thumb.png"
import bg_img from "@/assets/img/team/bg.png"

const TeamDetailsArea = () => {

   const [activeToggle, setActiveToggle] = useState<boolean>(false);

   const handleToggle = () => {
      setActiveToggle((prev) => !prev);
   };

   return (
      <div className="td-team-area pt-130 pb-30 p-relative fix">
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-md-8">
                  <div className="td-team-item mb-25 bg-position pt-40 p-relative mb-40" style={{ backgroundImage: `url(${bg_img.src})` }}>
                     <div className="td-team-thumb text-center">
                        <Image src={team_thumb} alt="" />
                     </div>
                     <div className="td-team-social-wrap">
                        <div className="team__social td-team-social td-social-icon-style">
                           <ul className="list-wrap" style={{
                              display: activeToggle ? "block" : "none",
                              transition: "all 0.3s ease",
                           }}>
                              <li><Link href="#"><i className="fa-brands fa-facebook"></i><span></span></Link></li>
                              <li>
                                 <Link href="#">
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M13.8678 1.42407H16.4381L10.8227 7.8421L17.4288 16.5756H12.2563L8.20503 11.2788L3.56944 16.5756H0.997567L7.00378 9.71078L0.666565 1.42407H5.97037L9.63238 6.26556L13.8678 1.42407ZM12.9657 15.0371H14.39L5.19648 2.88173H3.66812L12.9657 15.0371Z" fill="currentColor" />
                                    </svg>
                                    <span></span>
                                 </Link>
                              </li>
                              <li><Link href="#"><i className="fa-brands fa-linkedin"></i><span></span></Link></li>
                              <li><Link href="#"><i className="fa-brands fa-instagram"></i><span></span></Link></li>
                           </ul>
                           <div className="social-toggle-icon" onClick={handleToggle}>
                              <i
                                 className={
                                    activeToggle
                                       ? "fa-sharp fa-light fa-share-nodes fa-times"
                                       : "fa-sharp fa-light fa-share-nodes"
                                 }
                              ></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-8">
                  <div className="td-team-details-content ml-50">
                     <h2 className="td-schedule-team-title mb-5">Esther Howard</h2>
                     <span className="td-team-details-subtitle d-block mb-15">Sr. Software Engineer</span>
                     <span className="td-schedule-team-border mb-15"></span>
                     <p>Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
                        Rever since the an unknown printer took a galley of type and scramAimply dummy terinting and
                        typesetting industry. Lorem Ipsum has been</p>
                     <p className="mb-40">Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
                        standard dumtext ever since the an unknown printer took a galley of type and scrambled it to
                        makepassages, and Lorem  dummy text of the printing and typesetting industry. Lorem Iipsum
                        dolor sit amet, consectetur adipiscing.</p>
                     <div className="td-team-details-info mr-170">
                        <ul>
                           <li>
                              <div className="td-team-details-info-item">
                                 <span className="icon"><i className="flaticon-mail"></i></span>
                                 <div>
                                    <span className="name">Email</span>
                                    <Link className="links" href="mailto:info@gmail.com">info@gmail.com</Link>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <div className="td-team-details-info-item">
                                 <span className="icon"><i className="flaticon-phone"></i></span>
                                 <div>
                                    <span className="name">Phone Number</span>
                                    <Link className="links" href="tel:+12345670995">+123 456 70995</Link>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <div className="td-team-details-info-item">
                                 <span className="icon"><i className="flaticon-gps"></i></span>
                                 <div>
                                    <span className="name">Address</span>
                                    <Link className="links" href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z" target="_blank">231, Utah Downtown Mall, USA</Link>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <div className="td-team-details-info-item">
                                 <span className="icon"><i className="fa-sharp fa-regular fa-shield"></i></span>
                                 <div>
                                    <span className="name">Experience</span>
                                    <span className="links">05 Year</span>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default TeamDetailsArea
