"use client"
import Link from "next/link";
import bg_img from "@/assets/img/about/bg.jpg"

interface DataType {
   id: number;
   title: string;
   desc: string;
   price: string;
}

const ticket_data: DataType[] = [
   {
      id: 1,
      title: "Free Registration",
      desc: "Join us for this transformative global webinar addressing the unseen crisis of mental health. Open to educators, mental health professionals, students, and changemakers worldwide.",
      price: "FREE"
   },
];

const Ticket = () => {
   return (
      <div className="td-tickets-area bg-position pt-140 pb-140" style={{ backgroundImage: `url(${bg_img.src})` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="td-tickets-title-wrap text-center mb-40 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".2s">
                     <span className="td-section-subtitle mb-25">Event Registration</span>
                     <h2 className="td-section-title">Join The Invisible Emergency</h2>
                     <p className="td-section-text">This global webinar is free and open to all who wish to be part of<br />
                        the conversation on mental health and collective healing.</p>
                  </div>
               </div>
               <div className="col-xl-10">
                  {ticket_data.map((item) => (
                     <div key={item.id} className="td-tickets-item wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".2s">
                        <div className="row gx-0 align-items-center">
                           <div className="col-lg-9">
                              <div className="td-tickets-details">
                                 <span>{item.title}</span>
                                 <p>{item.desc}</p>
                              </div>
                           </div>
                           <div className="col-lg-3">
                              <div className="td-tickets-time text-center">
                                 <span className="price mb-25">{item.price}</span>
                                 <Link className="td-btn td-left-right" href="#join-movement" onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('join-movement')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                 }}>
                                    <span className="mr10 td-text d-inline-block mr-5">Register Now</span>
                                    <span className="td-arrow-angle">
                                       <svg className="td-arrow-svg-top-right" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="white" />
                                          <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="white" />
                                       </svg>
                                    </span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Ticket
