"use client"
import Image from 'next/image'
import Link from 'next/link'
import NavMenu from './menu/NavMenu'
import UseSticky from '@/hooks/UseSticky'
import { useState } from 'react'
import Sidebar from './menu/Sidebar'
import Searchbar from './menu/Searchbar'
import TotalCart from './menu/TotalCart'
import HeaderCart from './menu/HeaderCart'

import logo_1 from "@/assets/img/logo/logo-black.png"

const HeaderTwo = () => {

   const { sticky } = UseSticky();
   const [sidebar, setSidebar] = useState<boolean>(false);
   const [isSearch, setIsSearch] = useState<boolean>(false);
   const [cartOpen, setCartOpen] = useState<boolean>(false);

   return (
      <header className="td-header-height">
         <div id="header-sticky" className={`td-header__area header-mobile-spacing td-transparent ${sticky ? "header-sticky" : ""}`}>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xl-9 col-6">
                     <div className="tdmenu__wrap d-flex align-items-center justify-content-between">
                        <div className="logo">
                           <Link className="logo-1" href="/"><Image src={logo_1} alt="Logo" /></Link>
                        </div>
                        <nav className="tdmenu__nav tdmenu-2 mr-90 d-none d-xl-flex">
                           <div className="tdmenu__navbar-wrap tdmenu__main-menu">
                              <NavMenu />
                           </div>
                        </nav>
                     </div>
                  </div>
                  <div className="col-xl-3 col-6">
                     <div className="td-menu-right-action td-menu-right-action-2 d-flex align-items-center justify-content-end">
                        <button onClick={() => setIsSearch(true)} className="search-button search-open-btn">
                           <i className="flaticon-search"></i>
                        </button>
                        <div className="td-header-cart p-relative">
                           <button onClick={() => setCartOpen(true)} className="cart-button cartmini-open-btn">
                              <i className="flaticon-shopping-cart"></i>
                              <span className="td-header-cart-count"><TotalCart /></span>
                           </button>
                        </div>
                        <div className="td-header-menu-bar lh-1 p-relative ml-25">
                           <Link className="td-btn-square d-none d-xl-block" href="/contact">Buy Tickets</Link>
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
         <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
         <Searchbar isSearch={isSearch} setIsSearch={setIsSearch} />
         <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      </header>
   )
}

export default HeaderTwo
