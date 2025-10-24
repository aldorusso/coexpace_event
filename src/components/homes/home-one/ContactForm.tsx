"use client"
import { useState } from "react";

const ContactForm = () => {

   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      acceptPrivacy: false
   });

   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
   const [statusMessage, setStatusMessage] = useState('');

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus('idle');

      try {
         await fetch('https://script.google.com/macros/s/AKfycbycDSPoRHmgdeCwqvZaRMiVqXAyJfmYhWhdtEiY8dlkcyZ3ReI_6fA2zaHshdGPgsUYTA/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               firstName: formData.firstName,
               lastName: formData.lastName,
               email: formData.email,
               phone: formData.phone
            })
         });

         // Con mode: 'no-cors', asumimos que fue exitoso si no hay error
         setSubmitStatus('success');
         setStatusMessage('Thank you! Your registration has been received. We will contact you soon via WhatsApp and email.');

         // Limpiar el formulario
         setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            acceptPrivacy: false
         });

         // Ocultar mensaje después de 5 segundos
         setTimeout(() => {
            setSubmitStatus('idle');
         }, 5000);

      } catch (error) {
         setSubmitStatus('error');
         setStatusMessage('There was an error submitting your registration. Please try again.');
         console.error('Error:', error);

         // Ocultar mensaje después de 5 segundos
         setTimeout(() => {
            setSubmitStatus('idle');
         }, 5000);
      } finally {
         setIsSubmitting(false);
      }
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, checked } = e.target;

      // Validar que el teléfono solo contenga números, espacios, +, - y ()
      if (name === 'phone') {
         const phoneRegex = /^[0-9\+\-\s()]*$/;
         if (!phoneRegex.test(value)) {
            return; // No actualizar si contiene caracteres no válidos
         }
      }

      setFormData({
         ...formData,
         [name]: type === 'checkbox' ? checked : value
      });
   };

   return (
      <div className="td-contact-form-area pt-150 pb-150 bg-position" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="td-contact-form-wrap text-center" id="join-movement">
                     <div className="td-contact-form-title-wrap mb-50 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".2s">
                        <span className="td-section-subtitle mb-20">Stay Connected</span>
                        <h2 className="td-section-title">Join The Movement</h2>
                        <p className="mt-20" style={{fontSize: '16px', lineHeight: '1.8', maxWidth: '700px', margin: '20px auto 0'}}>
                           Register and receive all event information via <strong>WhatsApp</strong> and <strong>email</strong>.
                        </p>
                     </div>

                     <div className="td-contact-form wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".4s">
                        <form onSubmit={handleSubmit}>
                           <div className="row">
                              <div className="col-md-6">
                                 <div className="td-contact-input mb-30">
                                    <input
                                       type="text"
                                       name="firstName"
                                       placeholder="First Name"
                                       value={formData.firstName}
                                       onChange={handleChange}
                                       required
                                       style={{
                                          width: '100%',
                                          padding: '18px 25px',
                                          border: '2px solid #e0e0e0',
                                          borderRadius: '8px',
                                          fontSize: '16px',
                                          transition: 'all 0.3s ease',
                                          backgroundColor: '#fff'
                                       }}
                                       onFocus={(e) => e.target.style.borderColor = 'var(--td-theme-1)'}
                                       onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                    />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="td-contact-input mb-30">
                                    <input
                                       type="text"
                                       name="lastName"
                                       placeholder="Last Name"
                                       value={formData.lastName}
                                       onChange={handleChange}
                                       required
                                       style={{
                                          width: '100%',
                                          padding: '18px 25px',
                                          border: '2px solid #e0e0e0',
                                          borderRadius: '8px',
                                          fontSize: '16px',
                                          transition: 'all 0.3s ease',
                                          backgroundColor: '#fff'
                                       }}
                                       onFocus={(e) => e.target.style.borderColor = 'var(--td-theme-1)'}
                                       onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                    />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="td-contact-input mb-30">
                                    <input
                                       type="email"
                                       name="email"
                                       placeholder="Email Address"
                                       value={formData.email}
                                       onChange={handleChange}
                                       required
                                       pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                                       title="Please enter a valid email address"
                                       style={{
                                          width: '100%',
                                          padding: '18px 25px',
                                          border: '2px solid #e0e0e0',
                                          borderRadius: '8px',
                                          fontSize: '16px',
                                          transition: 'all 0.3s ease',
                                          backgroundColor: '#fff'
                                       }}
                                       onFocus={(e) => e.target.style.borderColor = 'var(--td-theme-1)'}
                                       onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                    />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="td-contact-input mb-30">
                                    <input
                                       type="tel"
                                       name="phone"
                                       placeholder="Phone Number"
                                       value={formData.phone}
                                       onChange={handleChange}
                                       required
                                       pattern="[0-9\+\-\s()]+"
                                       title="Please enter a valid phone number (numbers, +, -, spaces, and parentheses only)"
                                       minLength={7}
                                       style={{
                                          width: '100%',
                                          padding: '18px 25px',
                                          border: '2px solid #e0e0e0',
                                          borderRadius: '8px',
                                          fontSize: '16px',
                                          transition: 'all 0.3s ease',
                                          backgroundColor: '#fff'
                                       }}
                                       onFocus={(e) => e.target.style.borderColor = 'var(--td-theme-1)'}
                                       onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                    />
                                 </div>
                              </div>
                              <div className="col-12">
                                 <div className="td-contact-checkbox mb-30" style={{textAlign: 'left', maxWidth: '600px', margin: '0 auto'}}>
                                    <label style={{display: 'flex', alignItems: 'flex-start', cursor: 'pointer', fontSize: '15px', lineHeight: '1.6'}}>
                                       <input
                                          type="checkbox"
                                          name="acceptPrivacy"
                                          checked={formData.acceptPrivacy}
                                          onChange={handleChange}
                                          required
                                          style={{
                                             width: '20px',
                                             height: '20px',
                                             marginRight: '12px',
                                             marginTop: '2px',
                                             cursor: 'pointer',
                                             flexShrink: 0
                                          }}
                                       />
                                       <span>
                                          I have read and accept the{' '}
                                          <a
                                             href="https://coexpace.org/privacy-policy/?utm_source=event_landing&utm_medium=form&utm_campaign=invisible_emergency"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             style={{color: 'var(--td-theme-1)', textDecoration: 'underline'}}
                                          >
                                             Privacy Policy
                                          </a>
                                       </span>
                                    </label>
                                 </div>
                              </div>
                              {submitStatus !== 'idle' && (
                                 <div className="col-12">
                                    <div
                                       className="alert mt-20 mb-20"
                                       style={{
                                          padding: '15px 20px',
                                          borderRadius: '8px',
                                          textAlign: 'center',
                                          backgroundColor: submitStatus === 'success' ? '#d4edda' : '#f8d7da',
                                          color: submitStatus === 'success' ? '#155724' : '#721c24',
                                          border: `2px solid ${submitStatus === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                                       }}
                                    >
                                       {statusMessage}
                                    </div>
                                 </div>
                              )}
                              <div className="col-12">
                                 <div className="td-contact-btn mt-20">
                                    <button
                                       type="submit"
                                       className="td-btn td-left-right"
                                       disabled={isSubmitting}
                                       style={{
                                          opacity: isSubmitting ? 0.7 : 1,
                                          cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                       }}
                                    >
                                       <span className="mr10 td-text d-inline-block mr-5">
                                          {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                                       </span>
                                       {!isSubmitting && (
                                          <span className="td-arrow-angle">
                                             <svg className="td-arrow-svg-top-right" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="white" />
                                             </svg>
                                          </span>
                                       )}
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactForm
