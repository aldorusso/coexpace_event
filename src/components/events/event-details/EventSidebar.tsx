"use client"
import Link from "next/link"
import NiceSelect from "@/ui/NiceSelect";
import { useState } from "react";

const EventSidebar = () => {

   const [quantity, setQuantity] = useState<number>(1);
   const selectHandler = () => { };

   const handleIncrement = () => {
      setQuantity((prev: number) => prev + 1);
   };

   const handleDecrement = () => {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
   };

   return (
      <div className="td-schedule-details-right ml-40 mb-40">
         <div className="td-schedule-details-right-list grey-bg mb-40">
            <h3 className="td-schedule-team-title mb-15">Information</h3>
            <span className="td-schedule-team-border mb-15"></span>
            <div className="td-schedule-details-info-list">
               <ul>
                  <li>
                     <span className="ceta">Category:</span>
                     <span>Marketing</span>
                  </li>
                  <li>
                     <span className="ceta">Date:</span>
                     <span>january 10, 2025</span>
                  </li>
                  <li>
                     <span className="ceta">Time:</span>
                     <span>6:30 pm - 9:00 pm</span>
                  </li>
                  <li>
                     <span className="ceta">Phone:</span>
                     <span><Link href="tel:+1(1234)567-800">+1 (1234)- 567-800</Link></span>
                  </li>
                  <li>
                     <span className="ceta">Location:</span>
                     <span>New York City</span>
                  </li>
                  <li>
                     <span className="ceta">Venue:</span>
                     <span>Cineplax Hall</span>
                  </li>
                  <li>
                     <span className="ceta">E-mail:</span>
                     <span><Link href="mailto:info@gmail.com">info@gmail.com</Link></span>
                  </li>
               </ul>
            </div>
         </div>
         <div className="td-schedule-details-right-list grey-bg">
            <h3 className="td-schedule-team-title mb-15">Registration</h3>
            <span className="td-schedule-team-border mb-15"></span>
            <div className="td-schedule-details-form">
               <form onSubmit={(e) => e.preventDefault()}>
                  <div className="item-select">
                     <NiceSelect
                        className="select item-first"
                        options={[
                           { value: "silver", text: "Silver Pass" },
                           { value: "hotel", text: "Hotel" },
                           { value: "resort", text: "Resort" },
                           { value: "apartments", text: "Apartments" },
                        ]}
                        defaultCurrent={0}
                        onChange={selectHandler}
                        name=""
                        placeholder="" />
                  </div>
                  <div className="td-schedule-details-form-price mt-25">
                     <div className="td-schedule-details-form-quantity d-inline-block">
                        <span className="price">$29.00</span>
                        <span className="subtitle">Unlimited</span>
                     </div>
                     <div className="td-schedule-details-quantity d-inline-block">
                        <span onClick={handleIncrement} className="increment">
                           <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.21924 7H13.3836" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M7.30176 13V1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                        </span>
                        <input
                           className="td-quantity-input"
                           type="text"
                           value={quantity}
                           onChange={(e) => {
                              const val = Number(e.target.value);
                              if (!isNaN(val) && val > 0) setQuantity(val);
                           }}
                        />
                        <span onClick={handleDecrement} className="decrement">
                           <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                        </span>
                     </div>
                  </div>
                  <div className="td-schedule-details-total mb-25">
                     <ul>
                        <li>
                           <span className="quantity">Quantity: </span>
                           <span>{quantity.toString().padStart(2, "0")}</span>
                        </li>
                        <li>
                           <span className="quantity">Total Cost: </span>
                           <span>$58.00</span>
                        </li>
                     </ul>
                  </div>
                  <div className="td-schedule-details-total-btn mb-35">
                     <button type="submit" className="td-btn w-100">Purcshae Now</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default EventSidebar
