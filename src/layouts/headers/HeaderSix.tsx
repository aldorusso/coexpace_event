"use client"
import Image from 'next/image'
import Link from 'next/link'
import NavMenu from './menu/NavMenu'
import UseSticky from '@/hooks/UseSticky'
import { useState } from 'react'
import Sidebar from './menu/Sidebar'
import Searchbar from './menu/Searchbar'
import HeaderCart from './menu/HeaderCart'
import TotalCart from './menu/TotalCart'
import HeaderTopTwo from './menu/HeaderTopTwo'

import logo_1 from "@/assets/img/logo/logo-black.png"

const HeaderSix = () => {

   const { sticky } = UseSticky();
   const [cartOpen, setCartOpen] = useState<boolean>(false);
   const [sidebar, setSidebar] = useState<boolean>(false);
   const [isSearch, setIsSearch] = useState<boolean>(false);

   return (
      <header className="td-header-height">
         <div className="td-header__area z-index-999 td-transparent ">
            <HeaderTopTwo />
            <div id="header-sticky" className={` ${sticky ? "header-sticky" : ""}`}>
               <div className="container">
                  <div className="td-header-6-main">
                     <div className="row align-items-center">
                        <div className="col-xxl-9 col-xl-9 col-6">
                           <div className="tdmenu__wrap d-flex align-items-center">
                              <div className="logo">
                                 <Link href="/"><Image data-width="150" src={logo_1} alt="Logo" /></Link>
                              </div>
                              <nav className="tdmenu__nav tdmenu-2 ml-70 mr-40 d-none d-xl-flex">
                                 <div className="tdmenu__navbar-wrap tdmenu__main-menu">
                                    <NavMenu />
                                 </div>
                              </nav>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-6">
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
                              <div className="td-header-menu-bar lh-1 p-relative ml-20">
                                 <Link className="td-btn td-btn-3-squre td-left-right d-none d-xl-block" href="/contact">
                                    <span className="mr10 td-text d-inline-block mr-5">Buy Ticket</span>
                                    <span className="td-arrow-angle">
                                       <svg className="td-arrow-svg-top-right" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="white" />
                                          <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="white" />
                                       </svg>
                                    </span>
                                 </Link>
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
            </div>
         </div>
         <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
         <Searchbar isSearch={isSearch} setIsSearch={setIsSearch} />
         <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      </header>
   )
}

export default HeaderSix
