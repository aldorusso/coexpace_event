import Image from 'next/image'
import Link from 'next/link'

import error_img from "@/assets/img/error/error.png"

const ErrorArea = () => {
   return (
      <div className="td-error-area pt-180 pb-200">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-9">
                  <div className="td-error-wrap">
                     <div className="td-error-thumb">
                        <Image src={error_img} alt="" />
                     </div>
                     <div className="td-error-content text-center">
                        <h2 className="td-error-title mb-20">Error Page!</h2>
                        <p className="mb-30">Sorry! This Page is Not Available!</p>
                        <Link className="td-btn" href="/">Submit Your Message</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ErrorArea
