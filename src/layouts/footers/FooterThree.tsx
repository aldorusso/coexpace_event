import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/img/logo/logo-white.png"
import bg_img from "@/assets/img/footer/bg.jpg"

const FooterThree = () => {
   return (
      <footer>
         <div className="td-footer-area bg-position pt-80" style={{ backgroundImage: `url(${bg_img.src})` }}>
            <div className="td-footer-4-top pb-20">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="td-footer-logo mb-30">
                           <Link href="/"><Image src={logo} alt="logo" /></Link>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="td-footer-bottom-social text-right mb-30">
                           <span><Link href="#"><i className="fa-brands fa-linkedin"></i></Link></span>
                           <span><Link href="#"><i className="fa-brands fa-instagram"></i></Link></span>
                           <span>
                              <Link href="#">
                                 <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.3783 0.111328H19.3942L12.8054 7.64181L20.5565 17.8891H14.4875L9.73399 11.6742L4.2949 17.8891H1.27723L8.32453 9.83441L0.888855 0.111328H7.11199L11.4087 5.79201L16.3783 0.111328ZM15.3199 16.084H16.991L6.20396 1.82164H4.41068L15.3199 16.084Z" fill="currentColor" />
                                 </svg>
                              </Link>
                           </span>
                           <span><Link href="#"><i className="fa-brands fa-whatsapp"></i></Link></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="td-footer-main pt-65 pb-45">
               <div className="container">
                  <div className="row mb-30">
                     <div className="col-lg-3 col-md-5">
                        <div className="td-footer-widget td-footer-4-widget mb-40">
                           <h3 className="td-footer-title mb-20">Address</h3>
                           <p className="text mb-10">Middlest 2 East 42nd Streearketplace
                              New York, NY 10017</p>
                           <Link className="number mb-10 d-inline-block" href="tel:+123(55)90067990">+123(55) 90067990</Link>
                           <Link className="email" href="mailto:info@gmail.com">info@gmail.com</Link>
                        </div>
                     </div>
                     <div className="col-lg-5 col-md-7">
                        <div className="td-footer-widget td-footer-4-widget space ml-90 mb-40">
                           <h3 className="td-footer-title mb-20">Quick links</h3>
                           <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6">
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
                              <div className="col-lg-6 col-md-6 col-sm-6">
                                 <div className="td-footer-links">
                                    <ul>
                                       <li><Link href="#">News</Link></li>
                                       <li><Link href="#">Get Tickets</Link></li>
                                       <li><Link href="#">Benefits</Link></li>
                                       <li><Link href="#">Contact Us</Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6">
                        <div className="td-footer-widget td-footer-4-widget mb-40">
                           <h3 className="td-footer-title mb-20">Get Subscribed Today!</h3>
                           <p className="text mb-25">Stay informed with Eventee by subscribing <br />
                              to our newsletter.</p>
                           <div className="td-footer-form td-footer-4-form p-relative">
                              <input type="text" placeholder="E-mail Address" />
                              <button type="submit" className="td-footer-form-btn">
                                 <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.03931 8.9707H19.0393M19.0393 8.9707L12.0393 1.9707M19.0393 8.9707L12.0393 15.9707" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                              </button>
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

export default FooterThree
