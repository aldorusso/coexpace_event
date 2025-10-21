import Link from "next/link"
import Image from "next/image"

import logo from "@/assets/img/logo/coexpace-logo.png"
import bg_img from "@/assets/img/footer/bg.jpg"

const FooterOne = () => {
   return (
      <footer>
         <div className="td-footer-area bg-position pt-130" style={{ backgroundImage: `url(${bg_img.src})` }}>
            <div className="container">
               <div className="row mb-30">
                  <div className="col-lg-3 col-md-5">
                     <div className="td-footer-widget mb-40">
                        <div className="td-footer-logo mb-20">
                           <Link href="/"><Image src={logo} alt="logo" /></Link>
                        </div>
                        <p className="text mb-20" style={{lineHeight: '1.7', color: '#fff'}}>
                           A global initiative activating empathy, moral courage, and coexistence through
                           immersive storytelling, education, and civic action.
                        </p>
                        <Link className="email" href="https://coexpace.org" target="_blank">coexpace.org</Link>
                     </div>
                  </div>
                  <div className="col-lg-5 col-md-7">
                     <div className="td-footer-widget space ml-90 mb-40">
                        <h3 className="td-footer-title mb-20">Our Mission</h3>
                        <div className="row">
                           <div className="col-lg-12">
                              <p style={{lineHeight: '1.8', marginBottom: '20px', color: '#fff'}}>
                                 We create transformative spaces—physical, digital, and emotional—where individuals
                                 and communities are empowered to confront fear, disinformation, and indifference.
                              </p>
                              <p style={{lineHeight: '1.8', color: '#fff'}}>
                                 Through culture, dialogue, and collaboration, we inspire the courage to imagine,
                                 question, and connect across differences.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="td-footer-widget td-footer-subscribe mb-40">
                        <h3 className="td-footer-title mb-20">Our Vision</h3>
                        <p className="text mb-20" style={{lineHeight: '1.8', color: '#fff'}}>
                           We envision a world where people choose understanding over judgment, where dialogue bridges division,
                           and empathy becomes a daily act of courage.
                        </p>
                        <p className="text mb-0" style={{lineHeight: '1.8', color: '#fff'}}>
                           In this world, coexistence isn't just possible—it's essential for our shared future.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="td-footer-bottom pt-40 pb-15">
                        <div className="row align-items-center">
                           <div className="col-md-9">
                              <div className="td-footer-bottom-copyright mb-30">
                                 <p>Copyright © 2025 Coexpace. All rights reserved. | Developed by <Link href="https://eurosynapse.com/es" target="_blank" style={{color: '#c6d306', textDecoration: 'underline'}}>Eurosynapse</Link></p>
                              </div>
                           </div>
                           <div className="col-md-3">
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
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
