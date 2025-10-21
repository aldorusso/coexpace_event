"use client";
import Link from "next/link";
import Image from "next/image";
import UseCartInfo from "@/hooks/UseCartInfo";
import { useDispatch, useSelector } from "react-redux";
import { CartProduct, remove_cart_product } from "@/redux/features/cartSlice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

interface CartData {
   cartOpen: boolean;
   setCartOpen: (cartOpen: boolean) => void;
}

const HeaderCart = ({ cartOpen, setCartOpen }: CartData) => {

   const [mounted, setMounted] = useState(false);

   const productItem = useSelector((state: RootState) => state.cart.cart);

   const dispatch = useDispatch();
   const { total } = UseCartInfo();

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) return null;

   return (<>

      <div className={`cartmini__area ${cartOpen ? "cartmini-opened" : ""}`}>
         <div className="cartmini__wrapper d-flex justify-content-between flex-column">
            {productItem.length === 0 ? (
               <div className="mb-30">
                  <div className="empty_bag text-center">
                     <p className="py-3">Your Bag is Empty</p>
                     <Link
                        href={"/product"}
                        className="td-btn td-left-right wow  td-animetion-top"
                     >
                        Go To Product
                     </Link>
                  </div>
                  <div className="cartmini__close">
                     <button onClick={() => setCartOpen(false)} type="button" className="cartmini__close-btn cartmini-close-btn"><i className="fal fa-times"></i></button>
                  </div>
               </div>
            ) : (
               <>
                  <div className="cartmini__top-wrapper ">
                     <div className="cartmini__top p-relative">
                        <div className="cartmini__title">
                           <h4>Your cart</h4>
                        </div>
                        <div className="cartmini__close">
                           <button onClick={() => setCartOpen(false)} type="button" className="cartmini__close-btn cartmini-close-btn"><i className="fal fa-times"></i></button>
                        </div>
                     </div>
                     <div className="cartmini__widget">
                        {productItem.map((item: CartProduct) => (
                           <div key={item.id} className="cartmini__widget-item">
                              <div className="cartmini__thumb">
                                 <Link href="/checkout">
                                    <Image src={item.thumb} alt="" />
                                 </Link>
                              </div>
                              <div className="cartmini__content">
                                 <h5><Link href="/checkout">{item.title}</Link></h5>
                                 <div className="cartmini__price-wrapper">
                                    <span className="cartmini__price">${item.price}.00</span>
                                 </div>
                              </div>
                              <button onClick={() => dispatch(remove_cart_product(item))} className="cartmini__del"><i className="fal fa-times"></i></button>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="cartmini__checkout">
                     <div className="cartmini__checkout-title mb-30">
                        <h4>Subtotal:</h4>
                        <span>${total.toFixed(2)}</span>
                     </div>
                     <div className="cartmini__checkout-btn">
                        <Link href="/cart" className="cartmini-btn mb-10 w-100"> <span></span> view cart</Link>
                        <Link href="/checkout" className="cartmini-btn-border w-100"> <span></span> checkout</Link>
                     </div>
                  </div>
               </>
            )}
         </div>
      </div>
      <div onClick={() => setCartOpen(false)} className={`body-overlay ${cartOpen ? "openeds" : ""}`}></div>
   </>
   );
};

export default HeaderCart;
