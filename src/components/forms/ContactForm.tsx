'use client'
import React, { useActionState, useEffect } from 'react'
import { handleContactFormAction } from '@/app/action/sendContactEmail'
import { toast } from "react-toastify";

const ContactForm = () => {

   const [state, formAction] = useActionState(handleContactFormAction, { success: false })

   useEffect(() => {
      if (state.success) {
         toast.success("✅ Message sent successfully!");
      }
      if (state.error) {
         toast.error(`❌ Error: ${state.error}`);
      }
   }, [state.success, state.error]);

   return (
      <form id="contact-form" action={formAction}>
         <div className="td-contact-form-box">
            <h3 className="td-postbox-form-title mb-15">Send Us Message</h3>
            <div className="row">
               <div className="col-lg-4 col-md-6 mb-20">
                  <input className="td-input" name="user_name" type="text" placeholder="Name" />
               </div>
               <div className="col-lg-4 col-md-6 mb-20">
                  <input className="td-input" name="user_email" type="email" placeholder="Email" />
               </div>
               <div className="col-lg-4 col-12 mb-20">
                  <input className="td-input" name="user_phone" type="text" placeholder="Phone" />
               </div>
               <div className="col-12 mb-20">
                  <input className="td-input" name="website" type="text" placeholder="Website" />
               </div>
               <div className="col-md-12 mb-15">
                  <textarea className="td-input message" name="message" cols={30} rows={10} placeholder="Comment"></textarea>
               </div>
               <div className="col-12">
                  <button type="submit" className="td-btn">Submit Your Message</button>
               </div>
               <p className="ajax-response pt-20"></p>
            </div>
         </div>
      </form>
   )
}

export default ContactForm
