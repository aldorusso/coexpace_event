import Link from "next/link";

import bg_img from "@/assets/img/pricing/bg.png"
import price_data from "@/data/PricingData";

const Price = () => {
   return (
      <div className="td-pricing-area grey-bg pt-140 pb-110 fix">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="td-schedule-2-title-wrap text-center mb-40 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <span className="td-section-subtitle td-section-subtitle-2 mb-30">Tickets Packages</span>
                     <h2 className="td-section-title mb-10">Explore flexible pricing plans</h2>
                     <p className="td-section-text">Like previous year this year we are arranging world marketing
                        summit 2025. Its the gathering of all the big</p>
                  </div>
               </div>
            </div>
            <div className="row gx-30">
               {price_data.filter((items) => items.page === "home_2").map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 mb-30 wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <div className="td-pricing-2-item bg-position" style={{ backgroundImage: `url(${bg_img.src})` }}>
                        <div className="td-pricing-2-price text-center mb-30">
                           <span className="subtitle mb-5">{item.sub_title}</span>
                           <span className="price">${item.price}.00</span>
                        </div>
                        <div className="td-pricing-2-feature mb-35">
                           <ul>
                              {item.lists.map((list, i) => (
                                 <li key={i}>
                                    <span>
                                       <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M20 10.1771V11.0051C19.9989 12.9459 19.3704 14.8344 18.2084 16.3888C17.0463 17.9432 15.413 19.0804 13.5518 19.6307C11.6907 20.1809 9.70153 20.1149 7.88102 19.4423C6.06051 18.7697 4.50619 17.5266 3.44986 15.8985C2.39354 14.2704 1.89181 12.3444 2.01951 10.4078C2.14721 8.47126 2.89749 6.62784 4.15845 5.15252C5.41942 3.67719 7.1235 2.649 9.01657 2.22128C10.9096 1.79357 12.8902 1.98925 14.663 2.77915M20 3.80515L11 12.8141L8.3 10.1141" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                       </svg>
                                    </span>
                                    <span>{list}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <Link className="td-btn-square" href="/contact">Purchase Tickets</Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Price
