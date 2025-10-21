import Link from 'next/link'
import DealCounter from '@/components/common/DealCounter'

import bg_img from "@/assets/img/feature/special-features.jpg"

const Countdown = () => {
   return (
      <div className="td-countdown-area bg-position" style={{ backgroundImage: `url(${bg_img.src})` }}>
         <div className="container">
            <div className="td-countdown-3-wrap p-relative z-index-1">
               <span className="td-countdown-3-shape d-none d-sm-block">
                  <svg width="257" height="83" viewBox="0 0 257 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M257 -45.5C257 25.4686 199.469 83 128.5 83C57.5314 83 0 25.4686 0 -45.5C0 -116.469 57.5314 -174 128.5 -174C199.469 -174 257 -116.469 257 -45.5ZM41.577 -45.5C41.577 2.50624 80.4938 41.423 128.5 41.423C176.506 41.423 215.423 2.50624 215.423 -45.5C215.423 -93.5062 176.506 -132.423 128.5 -132.423C80.4938 -132.423 41.577 -93.5062 41.577 -45.5Z" fill="#FF5EC4" />
                  </svg>
               </span>
               <span className="td-countdown-3-shape-2 d-none d-sm-block">
                  <svg width="257" height="84" viewBox="0 0 257 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M257 128.5C257 199.469 199.469 257 128.5 257C57.5314 257 0 199.469 0 128.5C0 57.5314 57.5314 0 128.5 0C199.469 0 257 57.5314 257 128.5ZM41.577 128.5C41.577 176.506 80.4938 215.423 128.5 215.423C176.506 215.423 215.423 176.506 215.423 128.5C215.423 80.4938 176.506 41.577 128.5 41.577C80.4938 41.577 41.577 80.4938 41.577 128.5Z" fill="#FF5EC4" />
                  </svg>
               </span>
               <div className="row align-items-center">
                  <div className="col-xxl-4 col-xl-3 col-lg-5">
                     <div className="td-countdown-2-title mb-30">
                        <h2 className="title text-white">Hurry Up!</h2>
                        <span className="subtitle text-white">Book Your Seat Now</span>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-5 col-lg-7">
                     <div className="td-hero-countdown mb-10">
                        <ul className="deal-counter ml0-md" id="timer">
                           <DealCounter expiryTimestamp={new Date("2026-11-22T18:28:59")} />
                        </ul>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-5">
                     <div className="td-countdown-2-location-wrap mb-30">
                        <div className="td-countdown-2-location ml-50">
                           <span className="td-countdown-2-location-icon">
                              <svg width="47" height="56" viewBox="0 0 47 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M43.8183 23.4545C43.8183 39.3636 23.3637 53 23.3637 53C23.3637 53 2.90918 39.3636 2.90918 23.4545C2.90918 18.0297 5.06421 12.827 8.90018 8.991C12.7361 5.15503 17.9388 3 23.3637 3C28.7886 3 33.9913 5.15503 37.8273 8.991C41.6632 12.827 43.8183 18.0297 43.8183 23.4545Z" stroke="white" strokeWidth="4.54545" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M23.3637 30.2727C27.1293 30.2727 30.1819 27.2201 30.1819 23.4545C30.1819 19.689 27.1293 16.6364 23.3637 16.6364C19.5981 16.6364 16.5455 19.689 16.5455 23.4545C16.5455 27.2201 19.5981 30.2727 23.3637 30.2727Z" stroke="white" strokeWidth="4.54545" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                           </span>
                           <Link className="td-countdown-3-location" href="https://www.google.com/maps" target="_blank">23rd Avenue, 4th Street,
                              Chicago, Illinois, USA</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Countdown
