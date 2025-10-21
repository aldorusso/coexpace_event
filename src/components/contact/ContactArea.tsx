import Link from "next/link"

const ContactArea = () => {
   return (
      <div className="td-contact-area pt-140 pb-10">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="td-contact-map pb-40">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31078.361591144112!2d-74.0256365664179!3d40.705584751235754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1724572184688!5m2!1sen!2sbd" width="600" height="450" style={{ border: 0 }} loading="lazy"></iframe>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="td-contact-info grey-bg mb-40">
                     <h3 className="td-contact-info-title mb-15">Contact details</h3>
                     <p className="mb-30">Lorem ipsum dolor sit amet consectetur adipiscing eleitut iquam
                        purus sit amet luctus venenatis lectus magna fringilla urna por
                        us non enim praesent elementum facilisise.</p>
                     <div className="td-contact-info-list">
                        <ul>
                           <li>
                              <span className="icons"><i className="flaticon-gps"></i></span>
                              <div className="address">
                                 <span>Address</span>
                                 <Link href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z" target="_blank">231, Utah Downtown Mall, USA</Link>
                              </div>
                           </li>
                           <li>
                              <span className="icons"><i className="flaticon-phone"></i></span>
                              <div className="address">
                                 <span>Phone</span>
                                 <Link href="tel:+12345670995">+123 456 70995</Link>
                              </div>
                           </li>
                           <li>
                              <span className="icons"><i className="flaticon-mail"></i></span>
                              <div className="address">
                                 <span>E-mail</span>
                                 <Link href="mailto:info@gmail.com">info@gmail.com</Link>
                              </div>
                           </li>
                        </ul>
                     </div>
                     <div className="td-contact-info-social">
                        <Link href="#"><i className="fa-brands fa-facebook"></i></Link>
                        <Link href="#"><i className="fa-brands fa-linkedin"></i></Link>
                        <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                        <Link href="#">
                           <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.3783 0.111328H19.3942L12.8054 7.64181L20.5565 17.8891H14.4875L9.73399 11.6742L4.2949 17.8891H1.27723L8.32453 9.83441L0.888855 0.111328H7.11199L11.4087 5.79201L16.3783 0.111328ZM15.3199 16.084H16.991L6.20396 1.82164H4.41068L15.3199 16.084Z" fill="currentColor" />
                           </svg>
                        </Link>
                        <Link href="#"><i className="fa-brands fa-whatsapp"></i></Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactArea
