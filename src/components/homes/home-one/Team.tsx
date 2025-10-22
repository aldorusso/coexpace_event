"use client";
import React from "react";
import team_data from "@/data/TeamData"
import Image from "next/image"

import bg_img from "@/assets/img/team/bg.png"

const Team = () => {

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
                  <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6  wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".9s">
                     <div className="td-team-item mb-25 bg-position p-relative" style={{ backgroundImage: `url(${bg_img.src})` }}>
                        <div className="td-team-content">
                           <h3 className="td-team-member-name mb-0">{item.title}</h3>
                           <span className="td-team-member-position">{item.designation}</span>
                        </div>
                        <div className="td-team-thumb text-center">
                           <Image src={item.thumb} alt="" />
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
