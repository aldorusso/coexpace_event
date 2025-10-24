"use client"
import { useState, useEffect } from "react";

const FloatingRegisterButton = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const toggleVisibility = () => {
         // Mostrar el botón después de hacer scroll 300px
         if (window.scrollY > 300) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
      };

      window.addEventListener('scroll', toggleVisibility);

      return () => {
         window.removeEventListener('scroll', toggleVisibility);
      };
   }, []);

   const scrollToForm = () => {
      const formElement = document.getElementById('join-movement');
      if (formElement) {
         formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
   };

   return (
      <button
         onClick={scrollToForm}
         className={`floating-register-btn ${isVisible ? 'visible' : ''}`}
         aria-label="Register Now"
      >
         <span className="btn-text">REGISTER NOW</span>
         <span className="btn-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M10 0L10 18M10 18L3 11M10 18L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
         </span>

         <style jsx>{`
            .floating-register-btn {
               position: fixed;
               bottom: 30px;
               right: 30px;
               background: #c6d306;
               color: #ffffff;
               border: none;
               border-radius: 50px;
               padding: 16px 32px;
               font-size: 16px;
               font-weight: 700;
               letter-spacing: 1px;
               cursor: pointer;
               z-index: 999;
               box-shadow: 0 8px 25px rgba(198, 211, 6, 0.4);
               transition: all 0.3s ease;
               opacity: 0;
               transform: translateY(100px);
               pointer-events: none;
               display: flex;
               align-items: center;
               gap: 12px;
               white-space: nowrap;
            }

            .floating-register-btn.visible {
               opacity: 1;
               transform: translateY(0);
               pointer-events: all;
            }

            .floating-register-btn:hover {
               transform: translateY(-3px);
               box-shadow: 0 12px 35px rgba(198, 211, 6, 0.6);
               background: #b8c305;
            }

            .floating-register-btn:active {
               transform: translateY(-1px);
            }

            .btn-icon {
               display: flex;
               align-items: center;
               animation: bounce 2s infinite;
            }

            @keyframes bounce {
               0%, 20%, 50%, 80%, 100% {
                  transform: translateY(0);
               }
               40% {
                  transform: translateY(-5px);
               }
               60% {
                  transform: translateY(-3px);
               }
            }

            /* Mobile styles */
            @media (max-width: 768px) {
               .floating-register-btn {
                  bottom: 20px;
                  right: 20px;
                  left: 20px;
                  padding: 18px 24px;
                  font-size: 15px;
                  justify-content: center;
                  border-radius: 12px;
                  width: auto;
               }

               .btn-text {
                  flex: 1;
                  text-align: center;
               }
            }

            /* Tablet styles */
            @media (min-width: 769px) and (max-width: 1024px) {
               .floating-register-btn {
                  bottom: 25px;
                  right: 25px;
                  padding: 15px 28px;
                  font-size: 15px;
               }
            }
         `}</style>
      </button>
   );
};

export default FloatingRegisterButton;
