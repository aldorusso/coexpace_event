
const BlogForm = () => {
   return (
      <form onSubmit={(e) => e.preventDefault()}>
         <div className="td-contact-form-box">
            <div className="row">
               <div className="col-md-6 mb-20">
                  <input className="td-input" name="name" type="text" placeholder="Name *" />
               </div>
               <div className="col-md-6 mb-20">
                  <input className="td-input" name="email" type="email" placeholder="Email *" />
               </div>
               <div className="col-12 mb-20">
                  <input className="td-input" name="website" type="text" placeholder=" Website" />
               </div>
               <div className="col-md-12 mb-20">
                  <textarea className="td-input message" name="message" cols={30} rows={10} placeholder="Comment *"></textarea>
               </div>
               <div className="col-12">
                  <div className="td-checkbox mb-20 d-flex">
                     <input type="checkbox" id="checkbox" />
                     <label htmlFor="checkbox">Save my name, email, and website in this browser for the next time I comment.</label>
                  </div>
               </div>
               <div className="col-12">
                  <button type="submit" className="td-btn">Submit Comment</button>
               </div>
            </div>
         </div>
      </form>
   )
}

export default BlogForm
