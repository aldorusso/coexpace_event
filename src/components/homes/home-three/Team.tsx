import team_data from "@/data/TeamData"
import Image from "next/image"
import Link from "next/link"

const Team = () => {
   return (
      <div className="td-team-area pt-140 pb-120 fix p-relative">
         <h2 className="td-team-3-bigtitle td-team-bigtext">
            SPEKAERS
         </h2>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xxl-5 col-xl-6 col-lg-7">
                  <div className="td-schedule-2-title-wrap text-center mb-40 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <span className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-25">Learn From Spekaers</span>
                     <h2 className="td-section-title">Our Amazing & learned event Speakrs</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {team_data.filter((items) => items.page === "home_3").map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.9s">
                     <div className="td-team-3-wrap mb-30 text-center">
                        <div className="td-team-3-thumb">
                           <Image className="w-100" src={item.thumb} alt="" />
                        </div>
                        <div className="td-team-3-content">
                           <h3 className="td-title"><Link href="/team-details">{item.title}</Link></h3>
                           <span className="td-position">{item.designation}</span>
                           <div className="td-team-3-social">
                              <span><Link href="#"><i className="fa-brands fa-facebook"></i></Link></span>
                              <span>
                                 <Link href="#">
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M13.8679 1.60596H16.4382L10.8229 8.02398L17.4289 16.7575H12.2564L8.20515 11.4607L3.56956 16.7575H0.997689L7.00391 9.89267L0.666687 1.60596H5.97049L9.6325 6.44745L13.8679 1.60596ZM12.9658 15.219H14.3901L5.1966 3.06361H3.66824L12.9658 15.219Z" fill="currentColor" />
                                    </svg>
                                 </Link>
                              </span>
                              <span><Link href="#"><i className="fa-brands fa-linkedin"></i></Link></span>
                              <span><Link href="#"><i className="fa-brands fa-instagram"></i></Link></span>
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
