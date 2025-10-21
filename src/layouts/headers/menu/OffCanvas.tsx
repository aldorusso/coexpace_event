import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/img/logo/logo-black.png"

interface MobileSidebarProps {
   offCanvas: boolean;
   setOffCanvas: (offCanvas: boolean) => void;
}

const OffCanvas = ({ offCanvas, setOffCanvas }: MobileSidebarProps) => {

   return (
      <>
         <div className={`offCanvas__info ${offCanvas ? "active" : ""}`}>
            <div className="offCanvas__close-icon menu-close">
               <button onClick={() => setOffCanvas(false)}><i className="fa-sharp fa-regular fa-xmark"></i></button>
            </div>
            <div className="offCanvas__logo mb-30">
               <Link href="/"><Image src={logo} alt="Logo" width={200} height={125} style={{ width: 'auto', height: 'auto', maxWidth: '200px' }} /></Link>
            </div>
            <div className="offCanvas__side-info mb-30">
               <div className="contact-list mb-30">
                  <h4>About Coexpace</h4>
                  <p>A global initiative activating empathy, moral courage, and coexistence through immersive storytelling, education, and civic action.</p>
               </div>
               <div className="contact-list mb-30">
                  <h4>Contact</h4>
                  <Link href="mailto:contact@coexpace.org">contact@coexpace.org</Link>
               </div>
               <div className="contact-list mb-30">
                  <h4>Website</h4>
                  <Link href="https://coexpace.org" target="_blank">www.coexpace.org</Link>
               </div>
            </div>
            <div className="offCanvas__social-icon mt-30">
               <Link href="https://www.facebook.com/coexpace" target="_blank"><i className="fab fa-facebook-f"></i></Link>
               <Link href="https://twitter.com/coexpace" target="_blank"><i className="fab fa-twitter"></i></Link>
               <Link href="https://www.linkedin.com/company/coexpace" target="_blank"><i className="fab fa-linkedin"></i></Link>
               <Link href="https://www.instagram.com/coexpace" target="_blank"><i className="fab fa-instagram"></i></Link>
            </div>
         </div>
         <div onClick={() => setOffCanvas(false)} className={`offCanvas__overly ${offCanvas ? "active" : ""}`}></div>
      </>
   )
}

export default OffCanvas
