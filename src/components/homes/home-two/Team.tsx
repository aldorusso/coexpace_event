import team_data from "@/data/TeamData"
import Image from "next/image"
import Link from "next/link"

import shape from "@/assets/img/team/team-2/shape.png"
import bg_img from "@/assets/img/team/team-2/bg.jpg"

const Team = () => {
   return (
      <div className="td-team-area bg-position pt-140 pb-135" style={{ backgroundImage: `url(${bg_img.src})` }}>
         <div className="container">
            <div className="row align-items-center mb-20">
               <div className="col-lg-6">
                  <div className="td-brands-title-wrap mb-25 wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <span className="td-section-subtitle td-section-subtitle-2 mb-30 mb-20">Learn From Spekaers</span>
                     <h2 className="td-section-title">Our Amazing & learned <br />event Speakrs</h2>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="td-team-2-title-text mb-35 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <p>Like previous year this year we are arranging world marketing
                        summit 2025. Its the gathering of all the big</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {team_data.filter((items) => items.page === "home_2").map((item) => (
                  <div key={item.id} className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.9s">
                     <div className="td-team-2-iteam p-relative mb-30">
                        <svg className="bg-svg" width="319" height="370" viewBox="0 0 319 370" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <mask id="path-1-inside-1_1700_1636" fill="white">
                              <path fillRule="evenodd" clipRule="evenodd" d="M23 0H254.818C259.543 0 264.116 1.6729 267.725 4.72218L311.907 42.0476C316.405 45.8477 319 51.4369 319 57.3254V347C319 359.703 308.703 370 296 370H60.5252C55.8145 370 51.2549 368.337 47.6501 365.305L7.12483 331.212C2.60769 327.412 0 321.811 0 315.908V23C0 10.2975 10.2975 0 23 0Z" />
                           </mask>
                           <path fillRule="evenodd" clipRule="evenodd" d="M23 0H254.818C259.543 0 264.116 1.6729 267.725 4.72218L311.907 42.0476C316.405 45.8477 319 51.4369 319 57.3254V347C319 359.703 308.703 370 296 370H60.5252C55.8145 370 51.2549 368.337 47.6501 365.305L7.12483 331.212C2.60769 327.412 0 321.811 0 315.908V23C0 10.2975 10.2975 0 23 0Z" fill="white" />
                           <path d="M7.12483 331.212L7.76858 330.447L7.12483 331.212ZM47.6501 365.305L47.0063 366.07L47.6501 365.305ZM267.725 4.72218L267.08 5.48608L267.725 4.72218ZM254.818 -1H23V1H254.818V-1ZM312.552 41.2837L268.37 3.95829L267.08 5.48608L311.262 42.8115L312.552 41.2837ZM320 347V57.3254H318V347H320ZM296 371C309.255 371 320 360.255 320 347H318C318 359.15 308.15 369 296 369V371ZM60.5252 371H296V369H60.5252V371ZM6.48107 331.977L47.0063 366.07L48.2938 364.539L7.76858 330.447L6.48107 331.977ZM-1 23V315.908H1V23H-1ZM23 -1C9.74517 -1 -1 9.74517 -1 23H1C1 10.8497 10.8497 1 23 1V-1ZM7.76858 330.447C3.47731 326.837 1 321.515 1 315.908H-1C-1 322.106 1.73808 327.987 6.48107 331.977L7.76858 330.447ZM311.262 42.8115C315.535 46.4216 318 51.7314 318 57.3254H320C320 51.1425 317.275 45.2738 312.552 41.2837L311.262 42.8115ZM60.5252 369C56.05 369 51.7184 367.42 48.2938 364.539L47.0063 366.07C50.7914 369.254 55.5789 371 60.5252 371V369ZM254.818 1C259.307 1 263.651 2.58925 267.08 5.48608L268.37 3.95829C264.581 0.756543 259.779 -1 254.818 -1V1Z" fill="#AEAEAE" mask="url(#path-1-inside-1_100_1636)" />
                        </svg>
                        <Image className="team-gradiant-bg" src={shape} alt="" />
                        <div className="td-team-2-thumb fix mb-25">
                           <Image className="w-100" src={item.thumb} alt="" />
                        </div>
                        <div className="td-team-2-content ml-30">
                           <h2 className="td-team-2-title"><Link href="/team-details">{item.title}</Link></h2>
                           <span className="td-team-2-position">{item.designation}</span>
                        </div>
                        <div className="td-team-2-social">
                           <Link href="#"><i className="fa-brands fa-facebook"></i><span></span></Link>
                           <Link href="#">
                              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M13.8678 1.42407H16.4381L10.8227 7.8421L17.4288 16.5756H12.2563L8.20503 11.2788L3.56944 16.5756H0.997567L7.00378 9.71078L0.666565 1.42407H5.97037L9.63238 6.26556L13.8678 1.42407ZM12.9657 15.0371H14.39L5.19648 2.88173H3.66812L12.9657 15.0371Z" fill="currentColor" />
                              </svg>
                              <span></span>
                           </Link>
                           <Link href="#"><i className="fa-brands fa-linkedin"></i><span></span></Link>
                           <Link href="#"><i className="fa-brands fa-instagram"></i><span></span></Link>
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
