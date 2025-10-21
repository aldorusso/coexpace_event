import price_data from "@/data/PricingData"
import Link from "next/link"

const Pricing = () => {
   return (
      <div className="td-pricing-area green-bg pt-140 pb-110 fix p-relative z-index-1">
         <span className="td-pricing-4-shape rotate-infinite-2 d-none d-lg-block">
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M48.0024 0L54.1357 25.104L71.9988 6.43321L64.7626 31.2374L89.5716 24.0012L70.896 41.8643L96 48.0024L70.896 54.1357L89.5716 71.9988L64.7626 64.7626L71.9988 89.5716L54.1357 70.896L48.0024 96L41.8643 70.896L24.0012 89.5716L31.2374 64.7626L6.42838 71.9988L25.104 54.1357L0 48.0024L25.104 41.8643L6.42838 24.0012L31.2374 31.2374L24.0012 6.43321L41.8643 25.104L48.0024 0Z" fill="#FC84C2" />
            </svg>
         </span>
         <span className="td-pricing-4-shape-2 rotate-infinite-2 d-none d-lg-block">
            <svg width="134" height="132" viewBox="0 0 134 132" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M133.994 56.2918C133.994 41.2306 121.816 29.0143 106.789 29.0143C102.051 29.0143 97.5914 30.2327 93.7134 32.3714C94.0236 30.7188 94.1981 29.0143 94.1981 27.271C94.1981 12.2097 82.021 0 67 0C51.979 0 39.7954 12.2097 39.7954 27.2775C39.7954 29.0208 39.9634 30.7253 40.2801 32.3778C36.4021 30.2392 31.9423 29.0208 27.2046 29.0208C12.1771 29.0208 0 41.2306 0 56.2918C0 71.3531 11.0913 82.4352 25.1557 83.4851C18.9702 88.4818 15.0146 96.142 15.0146 104.723C15.0146 119.784 27.1917 132 42.2192 132C53.1682 132 62.5984 125.513 66.9095 116.168C71.2271 125.513 80.6572 132 91.5998 132C106.621 132 118.804 119.79 118.804 104.723C118.804 96.142 114.849 88.4947 108.676 83.498C122.825 82.5324 134 70.7245 134 56.2983L133.994 56.2918Z" fill="#97DFEF" />
            </svg>
         </span>
         <span className="td-pricing-4-shape-3 rotate-infinite-2">
            <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M31.7745 107.861C27.5878 67.7562 25.6726 63.1255 0.309801 31.7745C40.415 27.5878 45.0458 25.6725 76.392 0.307753C80.5787 40.413 82.4939 45.0438 107.859 76.39C67.7535 80.5766 63.1227 82.4919 31.7765 107.857L31.7745 107.861Z" fill="#FFDCA4" />
            </svg>
         </span>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xxl-6 col-xl-7 col-lg-8">
                  <div className="td-pricing-4-title-wrap text-center mb-40 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <span className="td-section-subtitle td-section-subtitle-2 mb-30">Tickets Packages</span>
                     <h2 className="td-section-title text-white mb-10">Explore flexible pricing plans</h2>
                     <p className="td-section-text text-white">Like previous year this year we are arranging world marketing
                        summit 2025. Its the gathering of all the big</p>
                  </div>
               </div>
            </div>
            <div className="row gx-30">
               {price_data.filter((items) => items.page === "home_4").map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 mb-30">
                     <div className="td-pricing-4-item wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <div className="td-pricing-4-price mb-30 pb-30">
                           <span className="subtitle mb-25">{item.sub_title}</span>
                           <h2 className="price mb-25"><span>$</span>{item.price}.00</h2>
                           <p className="text mb-25">{item.desc}</p>
                           <Link className="td-btn td-btn-3-squre td-left-right w-100 text-center" href="/contact">
                              <span className="td-text d-inline-block mr-5">Purchase Now</span>
                              <span className="td-arrow-angle">
                                 <svg className="td-arrow-svg-top-right" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="white" />
                                    <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="white" />
                                 </svg>
                              </span>
                           </Link>
                        </div>
                        <div className="td-pricing-2-feature td-pricing-4-feature">
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
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Pricing
