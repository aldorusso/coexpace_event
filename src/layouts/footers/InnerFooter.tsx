"use client"
import Image, { StaticImageData } from "next/image"
import ImagePopup from "@/modals/ImagePopup"
import Link from "next/link"
import { useState } from "react"

import bg_img from "@/assets/img/footer/bg.jpg"
import logo from "@/assets/img/logo/logo-white.png"
import instagram_img1 from "@/assets/img/footer/insta/insta-1.jpg"
import instagram_img2 from "@/assets/img/footer/insta/insta-2.jpg"
import instagram_img3 from "@/assets/img/footer/insta/insta-3.jpg"
import instagram_img4 from "@/assets/img/footer/insta/insta-4.jpg"
import instagram_img5 from "@/assets/img/footer/insta/insta-5.jpg"
import instagram_img6 from "@/assets/img/footer/insta/insta-6.jpg"

const image_data: StaticImageData[] = [instagram_img1, instagram_img2, instagram_img3, instagram_img4, instagram_img5, instagram_img6];

const InnerFooter = () => {

   const [photoIndex, setPhotoIndex] = useState<number>(0);
   const [isOpen, setIsOpen] = useState(false);

   const handleImagePopup = (i: number) => {
      setPhotoIndex(i);
      setIsOpen(true);
   };

   const slides = image_data.map((img) => ({
      src: img.src,
   }));

   return (
      <footer>
         <div className="td-footer-area pt-155 bg-position" style={{ backgroundImage: `url(${bg_img.src})` }}>
            <div className="container">
               <div className="row mb-15">
                  <div className="col-xl-3 col-lg-3 col-md-5">
                     <div className="td-footer-widget mb-40">
                        <div className="td-footer-logo mb-20">
                           <Link href="/"><Image src={logo} alt="logo" /></Link>
                        </div>
                        <p className="text mb-10">Middlest 2 East 42nd Streearketplace
                           New York, NY 10017</p>
                        <Link className="number mb-10 d-inline-block" href="tel:+123(55)90067990">+123(55) 90067990</Link>
                        <Link className="email" href="mailto:info@gmail.com">info@gmail.com</Link>
                     </div>
                  </div>
                  <div className="col-xl-5 col-lg-4 col-md-7">
                     <div className="td-footer-widget space ml-90 mb-40">
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
                  <div className="col-xl-4 col-lg-5 col-md-6">
                     <div className="td-footer-2-widget space ml-90 mb-40">
                        <h3 className="td-footer-title mb-25">Instagram</h3>
                        <div className="row row-cols-3 gx-10">
                           {image_data.map((image, index) => (
                              <div key={index} className="td-instagram-link col mb-10">
                                 <a onClick={() => handleImagePopup(index)} style={{ cursor: "pointer" }} className="popup-image">
                                    <Image className="w-100" src={image} alt="footer1" />
                                    <i className="fa-sharp fa-solid fa-plus"></i></a>
                              </div>
                           ))}

                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="td-footer-bottom pt-40 pb-15">
                        <div className="row align-items-center">
                           <div className="col-md-9">
                              <div className="td-footer-bottom-copyright mb-30">
                                 <p>Copyright © 2025 evente.com. All rights reserved.</p>
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
         {isOpen && (
            <ImagePopup
               images={slides}
               isOpen={isOpen}
               setIsOpen={setIsOpen}
               photoIndex={photoIndex}
            />
         )}
      </footer>
   )
}

export default InnerFooter
