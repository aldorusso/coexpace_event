import Image from "next/image"
import Link from "next/link"

import thumb from "@/assets/img/venue/thumb.jpg"

const EventsVenueArea = () => {
   return (
      <div className="td-venue-area pt-140 pb-110">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 mb-30">
                  <div className="td-venue-thumb">
                     <Image className="w-100 wow td-animetion-left" data-wow-duration="1.5s" data-wow-delay="0.2s" src={thumb} alt="" />
                  </div>
               </div>
               <div className="col-lg-6 mb-30">
                  <div className="td-venue-content-wrap wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.2s">
                     <span className="td-venue-subtitle mb-10 d-block">Conference Hall</span>
                     <h2 className="td-venue-title mb-20">Lilywhite House, 782 High
                        Road, London, N17 0BX</h2>
                     <p className="td-venue-text mb-30">Lorem ipsum dolor sit amet consectetur adipiscing eleitut
                        aliquam purus sit amet luctus venenatis lectus magna
                        fringilla urna porttitor rhoncus is dolor purus non enim
                        praesent elementum facilisise.</p>
                     <div>
                        <div className="td-venue-info mb-25">
                           <span className="td-venue-info-icon">
                              <i className="flaticon-gps"></i>
                           </span>
                           <div>
                              <span className="subtitle">Address</span>
                              <Link className="links" href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z" target="_blank">231, Utah Downtown Mall, USA</Link>
                           </div>
                        </div>
                        <div className="td-venue-info mb-25">
                           <span className="td-venue-info-icon">
                              <i className="flaticon-phone"></i>
                           </span>
                           <div>
                              <span className="subtitle">Phone</span>
                              <a className="links" href="tel:+12345670995">+123 456 70995</a>
                           </div>
                        </div>
                        <div className="td-venue-info">
                           <span className="td-venue-info-icon">
                              <i className="flaticon-mail"></i>
                           </span>
                           <div>
                              <span className="subtitle">E-mail</span>
                              <Link className="links" href="mailto:info@gmail.com">info@gmail.com</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default EventsVenueArea
