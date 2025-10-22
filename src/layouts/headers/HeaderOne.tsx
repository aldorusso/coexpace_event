"use client"
import Image from 'next/image'
import Link from 'next/link'
import UseSticky from '@/hooks/UseSticky'

import logo_1 from "@/assets/img/logo/coexpace-logo.png"
import logo_2 from "@/assets/img/logo/logo-black.png"

const HeaderOne = () => {

   const { sticky } = UseSticky();

   return (
      <header id="header" className="td-header-height">

         <div id="header-sticky" className={`td-header__area z-index-999 td-transparent  header-mobile-spacing ${sticky ? "header-sticky" : ""}`}>
            <div className="container-fluid container-1680">
               <div className="row align-items-center">
                  <div className="col-12">
                     <div className="tdmenu__wrap d-flex align-items-center justify-content-center">
                        <div className="logo" style={{marginTop: '10px'}}>
                           <Link className="logo-1 logo-sticky-none" href="/"><Image data-width="150" src={logo_1} alt="Logo" style={{maxHeight: '100px', width: 'auto'}} /></Link>
                           <Link className="logo-2 d-none" href="/"><Image data-width="150" src={logo_2} alt="Logo" style={{maxHeight: '50px', width: 'auto'}} /></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}

export default HeaderOne
