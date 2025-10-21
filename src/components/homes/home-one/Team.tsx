"use client";
import React, { useState } from "react";
import team_data from "@/data/TeamData"
import Image from "next/image"
import Link from "next/link"

import bg_img from "@/assets/img/team/bg.png"

const Team = () => {

   const [activeToggle, setActiveToggle] = useState<number | null>(null);

   const handleToggle = (id: number) => {
      setActiveToggle(activeToggle === id ? null : id);
   };

   return (
      <div className="td-team-area pt-140 pb-115 p-relative fix">
         <h2 className="td-team-bigtext mb-0">SPEKAERS</h2>
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="td-team-title-wrap text-center mb-50  wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".2s">
                     <span className="td-section-subtitle mb-25">Learn From Spekaers</span>
                     <h2 className="td-section-title">Our Amazing & learned<br />
                        event Speakrs</h2>
                  </div>
               </div>
               {team_data.filter((items) => items.page === "home_1").map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6  wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".9s">
                     <div className="td-team-item mb-25 bg-position p-relative" style={{ backgroundImage: `url(${bg_img.src})` }}>
                        <div className="td-team-content">
                           <h3 className="td-team-member-name mb-0"><Link href="/team-details">{item.title}</Link></h3>
                           <span className="td-team-member-position">{item.designation}</span>
                        </div>
                        <div className="td-team-thumb text-center">
                           <Image src={item.thumb} alt="" />
                        </div>
                        <div className="td-team-social-wrap">
                           <div className="team__social td-team-social td-social-icon-style">
                              <ul className="list-wrap" style={{
                                 display: activeToggle === item.id ? "block" : "none",
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
                              <div className="social-toggle-icon" onClick={() => handleToggle(item.id)}>
                                 <i className={activeToggle === item.id ? "fa-sharp fa-light fa-share-nodes fa-times" : "fa-sharp fa-light fa-share-nodes"}></i>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Team
