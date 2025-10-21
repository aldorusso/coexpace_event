import Image from "next/image"
import Link from "next/link"

import shape_1 from "@/assets/img/hero/hero-2/bg-shape.png"
import hero from "@/assets/img/hero/hero-2/zero.png"
import bg_img from "@/assets/img/hero/hero-2/bg.jpg"

const Banner = () => {
   return (
      <>
         <Image className="td-hero-2-bg-shape" src={shape_1} alt="" />
         <div className="td-hero-area td-hero-2-spacing fix">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="td-hero-2-wrap p-relative">
                        <div className="td-hero-2-thumb bg-position" style={{ backgroundImage: `url(${bg_img.src})` }}>
                           <h2 className="td-hero-2-title wow td-animetion-left" data-wow-duration="1.5s" data-wow-delay="0.3s">Designer <br />Conference <br />
                              2<Image src={hero} alt="" />25</h2>
                        </div>
                        <div className="td-hero-social d-flex align-items-center">
                           <span>Follow Us On:</span>
                           <span><Link href="#"><i className="fa-brands fa-whatsapp"></i></Link></span>
                           <span><Link href="#"><i className="fa-brands fa-linkedin"></i></Link></span>
                           <span><Link href="#"><i className="fa-brands fa-instagram"></i></Link></span>
                           <span>
                              <Link href="#">
                                 <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.8679 1.60596H16.4382L10.8229 8.02398L17.4289 16.7575H12.2564L8.20515 11.4607L3.56956 16.7575H0.997689L7.00391 9.89267L0.666687 1.60596H5.97049L9.6325 6.44745L13.8679 1.60596ZM12.9658 15.219H14.3901L5.1966 3.06361H3.66824L12.9658 15.219Z" fill="currentColor" />
                                 </svg>
                              </Link>
                           </span>
                           <span><Link href="#"><i className="fa-brands fa-facebook"></i></Link></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Banner
