"use client"
import Image from 'next/image'
import Link from 'next/link'
import UseSticky from '@/hooks/UseSticky'
import { useState } from 'react'
import OffCanvas from './menu/OffCanvas'
import Sidebar from './menu/Sidebar'

import logo_1 from "@/assets/img/logo/coexpace-logo.png"
import logo_2 from "@/assets/img/logo/logo-black.png"

interface Speaker {
   name: string;
   id: string;
}

interface HeaderEventProps {
   speakers: Speaker[];
}

const HeaderEvent = ({ speakers }: HeaderEventProps) => {

   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);
   const [sidebar, setSidebar] = useState<boolean>(false);

   const scrollToSpeaker = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
   };

   return (
      <header id="header" className="td-header-height">

         <div id="header-sticky" className={`td-header__area z-index-999 td-transparent header-mobile-spacing ${sticky ? "header-sticky" : ""}`}>
            <div className="container-fluid container-1680">
               <div className="row align-items-center">
                  <div className="col-6">
                     <div className="logo" style={{marginTop: '10px'}}>
                        <Link className="logo-1 logo-sticky-none" href="/"><Image data-width="150" src={logo_1} alt="Logo" style={{maxHeight: '100px', width: 'auto'}} /></Link>
                        <Link className="logo-2 d-none" href="/"><Image data-width="150" src={logo_2} alt="Logo" style={{maxHeight: '50px', width: 'auto'}} /></Link>
                     </div>
                  </div>
                  <div className="col-6">
                     <div className="td-menu-right-action d-flex align-items-center justify-content-end">
                        <div className="td-header-menu-bar lh-1 p-relative ml-15">
                           <button onClick={() => setOffCanvas(true)} className="tdmenu-offcanvas-open-btn menu-tigger d-none d-xl-block">
                              <span></span>
                              <span></span>
                              <span></span>
                           </button>
                           <button onClick={() => setSidebar(true)} className="tdmenu-offcanvas-open-btn mobile-nav-toggler d-block d-xl-none">
                              <span></span>
                              <span></span>
                              <span></span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <OffCanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
         <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </header>
   )
}

export default HeaderEvent
