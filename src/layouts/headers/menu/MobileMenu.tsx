"use client";
import menu_data from "@/data/MenuData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const MobileMenus = () => {

   const [navTitle, setNavTitle] = useState("");
   const [, setSubNavTitle] = useState<string>("");
   const currentRoute = usePathname();

   const isMenuItemActive = (menuLink: string) => {
      return currentRoute === menuLink;
   };

   const isSubMenuItemActive = (subMenuLink: string) => {
      return currentRoute === subMenuLink;
   };

   // Open or close the parent menu
   const openMobileMenu = (menu: string) => {
      setNavTitle((prev: string) => (prev === menu ? "" : menu));
      setSubNavTitle("");
   };

   return (
      <ul className="navigation">
         {menu_data.map((menu, i) => (
            <React.Fragment key={i}>
               {menu.has_dropdown && (
                  <li className="menu-item-has-children">
                     <Link href={menu.link} onClick={() => openMobileMenu(menu.title)}
                        className={` ${(isMenuItemActive(menu.link) || (menu.sub_menus && menu.sub_menus.some((sub_m) => sub_m.link && isSubMenuItemActive(sub_m.link)))) ? "active" : ""}`}>
                        {menu.title}
                     </Link>
                     <div
                        className={`dropdown-btn ${navTitle === menu.title ? "open" : ""}`}
                        onClick={() => openMobileMenu(menu.title)} >
                        <span className="plus-line"></span>
                     </div>
                     {menu.sub_menus && menu.sub_menus.length > 0 && (
                        <ul className="sub-menu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                           {menu.sub_menus.map((sub, index) => (
                              <li key={index}>
                                 <Link href={sub.link} onClick={() => openMobileMenu(menu.title)}
                                    className={sub.link && isSubMenuItemActive(sub.link) ? "active" : ""}>
                                    {sub.title}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     )}
                  </li>
               )}
               {!menu.has_dropdown && (
                  <li className="menu-item-has-children">
                     <Link onClick={() => openMobileMenu(menu.title)} href={menu.link} className={`${currentRoute === menu.link ? "active" : ""}`}>
                        {menu.title}
                     </Link>
                  </li>
               )}
            </React.Fragment>
         ))}
      </ul>
   );
}

export default MobileMenus;
