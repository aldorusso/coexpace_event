"use client"
import bg_img from "@/assets/img/cta/cta-bg.png"

const Cta = () => {
   return (
      <div className="td-cta-area">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="td-cta-2-wrap bg-position" style={{ backgroundImage: `url(${bg_img.src})` }}>
                     <div className="row align-items-end">
                        <div className="col-lg-5">
                           <div className="td-cta-2-content mb-20">
                              <span className="td-cta-2-subtitle d-inline-block mb-5">Don’t Miss Our Future Updates!</span>
                              <h2 className="td-cta-2-title">Get Subscribed Today!</h2>
                           </div>
                        </div>
                        <div className="col-lg-7">
                           <div className="td-cta-2-form mb-25">
                              <form onSubmit={(e) => e.preventDefault()} className="p-relative">
                                 <input className="td-input" type="text" placeholder="Your E-mail Address" />
                                 <button className="cta-btn" type="submit">Subscribe</button>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cta
