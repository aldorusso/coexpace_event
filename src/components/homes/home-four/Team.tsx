import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { JSX } from "react"

import team_1 from "@/assets/img/team/team-5/thumb.png"
import team_2 from "@/assets/img/team/team-5/thumb-2.png"
import team_3 from "@/assets/img/team/team-5/thumb-3.png"
import team_4 from "@/assets/img/team/team-5/thumb-4.png"
import team_5 from "@/assets/img/team/team-5/thumb-5.png"

interface DataType {
   id: number;
   shape: JSX.Element;
   thumb: StaticImageData;
   title: string;
   designation: string;
}

const team_data: DataType[] = [
   {
      id: 1,
      shape: (<><svg width="238" height="238" viewBox="0 0 238 238" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M210.695 118.999C219.214 105.616 226.145 92.0142 230.94 78.7134C253.185 16.8942 221.118 -15.1865 159.287 7.05907C145.973 11.8534 132.372 18.7709 119.003 27.3047C105.634 18.7846 92.0184 11.8534 78.718 7.05907C16.887 -15.1865 -15.1928 16.8942 7.0658 78.7134C11.86 92.0279 18.7773 105.63 27.3109 118.999C18.791 132.382 11.86 145.984 7.0658 159.285C-15.1791 221.104 16.887 253.185 78.718 230.939C92.0321 226.145 105.634 219.228 119.003 210.694C132.372 219.214 145.987 226.145 159.287 230.939C221.105 253.185 253.185 221.118 230.94 159.285C226.145 145.971 219.228 132.369 210.695 118.999Z" fill="#F2F7F7" />
      </svg></>),
      thumb: team_1,
      title: "Devon Lane",
      designation: "Sr. Software Engineer",
   },
   {
      id: 2,
      shape: (<><svg width="255" height="255" viewBox="0 0 255 255" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M254.256 90.6946H218.113C217.451 90.6946 217.126 89.8966 217.586 89.4367L243.137 63.8853C243.421 63.6012 243.421 63.1278 243.137 62.8437L192.156 11.8491C191.872 11.5651 191.399 11.5651 191.115 11.8491L165.563 37.4005C165.103 37.8604 164.305 37.5358 164.305 36.873V0.743953C164.305 0.33816 163.967 0 163.561 0H91.4521C91.0463 0 90.7081 0.33816 90.7081 0.743953V36.873C90.7081 37.5358 89.9101 37.8604 89.4502 37.4005L63.8853 11.8491C63.6012 11.5651 63.1278 11.5651 62.8437 11.8491L11.8491 62.8437C11.5651 63.1278 11.5651 63.6012 11.8491 63.8853L37.4005 89.4367C37.8604 89.8966 37.5358 90.6946 36.873 90.6946H0.743953C0.33816 90.6946 0 91.0192 0 91.4386V163.548C0 163.954 0.324634 164.292 0.743953 164.292H36.873C37.5358 164.292 37.8604 165.09 37.4005 165.55L11.8491 191.101C11.5651 191.385 11.5651 191.859 11.8491 192.143L62.8437 243.137C63.1278 243.421 63.6012 243.421 63.8853 243.137L89.4367 217.586C89.8966 217.126 90.6946 217.451 90.6946 218.113V254.256C90.6946 254.662 91.0192 255 91.4386 255H163.548C163.954 255 164.292 254.675 164.292 254.256V218.113C164.292 217.451 165.09 217.126 165.55 217.586L191.101 243.137C191.385 243.421 191.859 243.421 192.143 243.137L243.137 192.143C243.421 191.859 243.421 191.385 243.137 191.101L217.586 165.55C217.126 165.09 217.451 164.292 218.113 164.292H254.256C254.662 164.292 255 163.967 255 163.548V91.4386C255 91.0328 254.675 90.6946 254.256 90.6946Z" fill="#F2F7F7" />
      </svg></>),
      thumb: team_2,
      title: "Esther Howard",
      designation: "Sr. Software Engineer",
   },
   {
      id: 3,
      shape: (<><svg width="242" height="163" viewBox="0 0 242 163" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M242 0L168.797 29.7886V0L95.594 29.7886V0L0 38.9039L0 163L73.203 113.348V163L146.417 113.348V163L242 98.1741L213.674 61.6851L242 0Z" fill="#F2F7F7" />
      </svg></>),
      thumb: team_3,
      title: "Robert Fox",
      designation: "Sr. Software Engineer",
   },
   {
      id: 4,
      shape: (<><svg width="240" height="259" viewBox="0 0 240 259" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M223.956 97.124C250.479 72.3691 244.119 40.158 204.861 18.9664C157.986 -6.32215 81.9979 -6.32215 35.1391 18.9664C-4.11926 40.158 -10.4791 72.3691 16.0438 97.124C-5.34412 117.091 -5.34412 141.909 16.0438 161.876C-10.4791 186.631 -4.11926 218.842 35.1391 240.034C81.9979 265.322 157.986 265.322 204.861 240.034C244.119 218.842 250.479 186.631 223.956 161.876C245.344 141.909 245.344 117.091 223.956 97.124Z" fill="#F2F7F7" />
      </svg></>),
      thumb: team_4,
      title: "Leslie Alexander",
      designation: "Sr. Software Engineer",
   },
   {
      id: 5,
      shape: (<><svg width="239" height="238" viewBox="0 0 239 238" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M238.137 237.571C126.654 204.529 112.203 204.53 0.707113 237.566C33.7534 126.08 33.7537 111.63 0.7124 0.145998C112.196 33.1873 126.647 33.187 238.132 0.140711C205.086 111.626 205.085 126.077 238.127 237.56L238.137 237.571Z" fill="#F2F7F7" />
      </svg></>),
      thumb: team_5,
      title: "Jane Cooper",
      designation: "Sr. Software Engineer",
   },
]

const Team = () => {
   return (
      <div className="td-team-area grey-bg-4 pt-130 p-relative z-index-1 fix pb-100">
         <div className="td-hero-4-blur td-team-5-blur"></div>
         <div className="td-hero-4-blur td-hero-4-blur-2 td-team-5-blur-2"></div>
         <div className="container-fluid container-1700">
            <div className="row justify-content-center">
               <div className="col-lg-7 col-md-10">
                  <div className="td-team-tittle-wrap text-center mb-30">
                     <span className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-20 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">Learn From Spekaers</span>
                     <h2 className="td-section-title mb-15 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">Conference speakers</h2>
                     <p className="td-section-text wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.5s">Like previous year this year we are arranging world marketing <br />
                        summit 2024. Its the gathering of all the big</p>
                  </div>
               </div>
            </div>
            <div className="row row-cols-1 row-cols-xxl-5 row-cols-xl-3 row-cols-lg-3 row-cols-md-2">
               {team_data.map((item) => (
                  <div key={item.id} className="col">
                     <div className="td-team-5-wrap p-relative z-index-1 mb-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <span className="td-team-5-shape">
                          {item.shape}
                        </span>
                        <div className="td-team-5-thumb">
                           <Image src={item.thumb} alt="" />
                           <div className="td-team-3-social td-team-5-social">
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
                           <div className="td-team-5-content">
                              <h5><Link href="/team-details">{item.title}</Link></h5>
                              <span>{item.designation}</span>
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
