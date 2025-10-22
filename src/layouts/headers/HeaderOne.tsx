"use client"
import Image from 'next/image'
import Link from 'next/link'
import NavMenu from './menu/NavMenu'
import UseSticky from '@/hooks/UseSticky'
import { useState } from 'react'
import OffCanvas from './menu/OffCanvas'
import Sidebar from './menu/Sidebar'

import logo_1 from "@/assets/img/logo/coexpace-logo.png"
import logo_2 from "@/assets/img/logo/logo-black.png"

const HeaderOne = () => {

   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);
   const [sidebar, setSidebar] = useState<boolean>(false);

   return (
      <header id="header" className="td-header-height">

         <div id="header-sticky" className={`td-header__area z-index-999 td-transparent  header-mobile-spacing ${sticky ? "header-sticky" : ""}`}>
            <div className="container-fluid container-1680">
               <div className="row align-items-center">
                  <div className="col-xxl-9 col-xl-10 col-lg-10 col-6">
                     <div className="tdmenu__wrap d-flex align-items-center justify-content-between">
                        <div className="logo" style={{marginTop: '10px'}}>
                           <Link className="logo-1 logo-sticky-none" href="/"><Image data-width="150" src={logo_1} alt="Logo" style={{maxHeight: '100px', width: 'auto'}} /></Link>
                           <Link className="logo-2 d-none" href="/"><Image data-width="150" src={logo_2} alt="Logo" style={{maxHeight: '50px', width: 'auto'}} /></Link>
                        </div>
                        <nav className="tdmenu__nav ml-50 mr-50 d-none d-xl-flex">
                           <div className="tdmenu__navbar-wrap tdmenu__main-menu">
                              <NavMenu />
                           </div>
                        </nav>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-xl-2 col-lg-2 col-6">
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

export default HeaderOne
