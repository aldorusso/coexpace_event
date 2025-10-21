import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/img/logo/logo-white-2.png"
import bg_img from "@/assets/img/footer/bg.jpg"

const FooterFour = () => {
   return (
      <footer>
         <div className="td-footer-area bg-position pt-110" style={{ backgroundImage: `url(${bg_img.src})` }}>
            <div className="td-footer-main pt-65 pb-80">
               <div className="container">
                  <div className="row mb-30">
                     <div className="col-xl-5 col-lg-6 col-md-6">
                        <div className="td-footer-5-widget mb-40">
                           <div className="logo mb-30">
                              <Link href="/"><Image data-width="265" src={logo} alt="Logo" /></Link>
                           </div>
                           <h4>We create truly <br /> Amazing Fashion events</h4>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-6 col-md-5">
                        <div className="td-footer-widget td-footer-5-widget ml-60 mb-40">
                           <h3 className="td-footer-title mb-20">Address</h3>
                           <p className="text mb-10">Middlest 2 East 42nd Streearket
                              placeNew York, NY 10017</p>
                           <Link className="number mb-10 d-inline-block" href="tel:+123(55)90067990">+123(55) 90067990</Link>
                           <Link className="email" href="mailto:info@gmail.com">info@gmail.com</Link>
                        </div>
                     </div>
                     <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6">
                        <div className="td-footer-widget td-footer-5-widget ml-50 mb-40">
                           <h3 className="td-footer-title mb-20">Quick links</h3>
                           <div className="td-footer-links">
                              <ul>
                                 <li><Link href="#">About this Event</Link></li>
                                 <li><Link href="#">Venue</Link></li>
                                 <li><Link href="#">Speakers</Link></li>
                                 <li><Link href="#">Agenda</Link></li>
                                 <li><Link href="#">Sponsors</Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6">
                        <div className="td-footer-widget td-footer-5-widget ml-50 mb-40">
                           <h3 className="td-footer-title mb-20">Find Us On</h3>
                           <div className="td-footer-links">
                              <ul>
                                 <li><Link href="#">Facebook</Link></li>
                                 <li><Link href="#">Twitter</Link></li>
                                 <li><Link href="#">Instagram</Link></li>
                                 <li><Link href="#">Behance</Link></li>
                                 <li><Link href="#">Dribbble</Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="td-footer-bottom-copyright td-footer-4-copyright text-center">
               <p className="mb-0">Copyright © 2025 evente.com All rights reserved.</p>
            </div>
         </div>
      </footer>
   )
}

export default FooterFour
