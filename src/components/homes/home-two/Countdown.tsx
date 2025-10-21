import DealCounter from "@/components/common/DealCounter"

const Countdown = () => {
   return (
      <div className="td-countdown-area pt-50">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-3 col-lg-5 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".2s">
                  <div className="td-countdown-2-title mb-40">
                     <h2 className="title">Hurry Up!</h2>
                     <span className="subtitle">Book Your Seat Now</span>
                  </div>
               </div>
               <div className="col-xl-5 col-lg-7 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".4s">
                  <div className="td-hero-countdown td-countdown-2-wrap mb-20">
                     <ul className="deal-counter ml0-md" id="timer">
                        <DealCounter expiryTimestamp={new Date("2026-11-22T18:28:59")} />
                     </ul>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-5 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".6s">
                  <div className="td-countdown-2-location-wrap text-end mb-40">
                     <div className="td-countdown-2-location text-start p-relative">
                        <span className="td-countdown-2-location-icon">
                           <svg width="50" height="60" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M47.5 25C47.5 42.5 25 57.5 25 57.5C25 57.5 2.5 42.5 2.5 25C2.5 19.0326 4.87053 13.3097 9.0901 9.0901C13.3097 4.87053 19.0326 2.5 25 2.5C30.9674 2.5 36.6903 4.87053 40.9099 9.0901C45.1295 13.3097 47.5 19.0326 47.5 25Z" stroke="#3A1EE7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M25 32.5C29.1421 32.5 32.5 29.1421 32.5 25C32.5 20.8579 29.1421 17.5 25 17.5C20.8579 17.5 17.5 20.8579 17.5 25C17.5 29.1421 20.8579 32.5 25 32.5Z" stroke="#3A1EE7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                        </span>
                        <h5 className="title">Los Angeles City</h5>
                        <span className="subtitle">20-21th of jan, 2025</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Countdown
