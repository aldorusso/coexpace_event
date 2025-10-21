import event_data from "@/data/EventData"
import Image from "next/image"
import Link from "next/link"

import bg_img from "@/assets/img/about/bg.jpg"

const Event = () => {
   return (
      <div className="td-schedule-2-area pt-140 pb-140 bg-position" style={{ backgroundImage: `url(${bg_img.src})` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="td-schedule-2-title-wrap text-center mb-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <span className="td-section-subtitle td-section-subtitle-2 mb-30">Event Schedule</span>
                     <h2 className="td-section-title mb-10">Our Events Schedule Plan</h2>
                     <p className="td-section-text">Like previous year this year we are arranging world marketing
                        summit 2025. Its the gathering of all the big</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {event_data.map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
                     <div className="td-schedule-2-item mb-30">
                        <div className="td-schedule-2-thumb p-relative">
                           <Link href="/events-details"><Image className="w-100" src={item.thumb} alt="" /></Link>
                           <span className="td-schedule-2-date"><i className="flaticon-calendar"></i>{item.date}</span>
                        </div>
                        <div className="td-schedule-2-content">
                           <h5 className="td-schedule-2-title mb-15"><Link href="/events-details">{item.title}</Link></h5>
                           <div className="td-schedule-2-destination mb-15">
                              <span><i className="flaticon-gps"></i>{item.country}</span>
                              <span><i className="flaticon-account"></i>{item.user}</span>
                              <span><i className="flaticon-time"></i>{item.time}</span>
                           </div>
                           <Link className="td-btn-square" href="/events-details">Details</Link>
                        </div>
                     </div>
                  </div>
               ))}
               <div className="col-12">
                  <div className="text-center mt-40">
                     <Link className="td-btn-square" href="/events">See All Events</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Event
