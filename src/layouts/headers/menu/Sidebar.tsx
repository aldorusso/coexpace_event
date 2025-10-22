import Image from "next/image"
import Link from "next/link"
import MobileMenus from "./MobileMenu";

import logo from "@/assets/img/logo/logo-black.png"

interface MobileSidebarProps {
   sidebar: boolean;
   setSidebar: (sidebar: boolean) => void;
}

const Sidebar = ({ sidebar, setSidebar }: MobileSidebarProps) => {

   return (
      <div className={`${sidebar ? "mobile-menu-visible" : ""}`}>
         <div className="tdmobile__menu">
            <nav className="tdmobile__menu-box">
               <div onClick={() => setSidebar(false)} className="close-btn"><i className="fa-solid fa-xmark"></i></div>
               <div className="nav-logo">
                  <Link href="/"><Image src={logo} alt="logo" /></Link>
               </div>
               <div className="tdmobile__menu-outer">
                  <MobileMenus />
               </div>
            </nav>
         </div>
         <div onClick={() => setSidebar(false)} className="tdmobile__menu-backdrop"></div>
      </div>
   )
}

export default Sidebar
