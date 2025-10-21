"use client"

const ReviewForm = () => {
   return (
      <form onSubmit={(e) => e.preventDefault()}>
         <div className="td-product-details-review-form-rating d-flex align-items-center mb-20">
            <p>Your Rating :</p>
            <div className="td-product-details-review-form-rating-icon d-flex align-items-center">
               <span><i className="fas fa-star"></i></span>
               <span><i className="fas fa-star"></i></span>
               <span><i className="fas fa-star"></i></span>
               <span><i className="fas fa-star"></i></span>
               <span><i className="fas fa-star"></i></span>
            </div>
         </div>
         <div className="td-contact-form-box grey-bg">
            <div className="row">
               <div className="col-md-6 mb-15">
                  <input className="td-input" name="name" type="text" placeholder="Your Name" />
               </div>
               <div className="col-md-6 mb-15">
                  <input className="td-input" name="email" type="email" placeholder="Your Email" />
               </div>
               <div className="col-md-12 mb-10">
                  <textarea className="td-input message" name="message" cols={30} rows={10} placeholder="Write your review here..."></textarea>
               </div>
               <div className="col-12">
                  <button type="submit" className="td-btn">Submit Your Message</button>
               </div>
            </div>
         </div>
      </form>
   )
}

export default ReviewForm
