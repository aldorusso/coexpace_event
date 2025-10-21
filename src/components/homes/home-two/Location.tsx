import Link from "next/link"

import bg_img from "@/assets/img/location/bg.jpg"

const Location = () => {
   return (
      <div className="td-location-area bg-position pt-140 pb-90" style={{ backgroundImage: `url(${bg_img.src})` }}>
         <div className="container">
            <div className="row">
               <div className="col-xl-5 col-lg-8">
                  <div className="td-location-2-wrap td-brands-title-wrap mb-45 wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <span className="td-section-subtitle td-section-subtitle-2 mb-20">Location</span>
                     <h2 className="td-section-title">Get direction to the event hall</h2>
                     <p className="td-section-text text-white mb-35">
                        Like previous year this year we are arranging world marketing
                        summit 2025. Its the gathering of all the big
                     </p>
                     <div className="td-location-2-addres d-flex flex-wrap">
                        <div className="mb-15">
                           <span className="mb-10 d-inline-block">Venue</span>
                           <p>New califor Kames<br /> D.bradd ock Hall</p>
                        </div>
                        <div className="td-border d-none d-sm-block"></div>
                        <div className="mb-15">
                           <span className="mb-10 d-inline-block">Address</span>
                           <Link href="https://www.google.com/maps" target="_blank" className="d-block">1356 Broadway, New York<br />
                              NY 10018, USA</Link>
                        </div>
                     </div>
                     <Link className="td-btn-square td-btn-square-xl" href="/events-venue">Get Direction</Link>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-12">
                  <div className="td-location-2-map h-100 ml-90 pb-50">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31078.361591144112!2d-74.0256365664179!3d40.705584751235754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1724572184688!5m2!1sen!2sbd" width="600" height="450" style={{ border: 0 }} loading="lazy"></iframe>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Location
