"use client"
import { useState, useEffect } from "react";

const FloatingSupportButton = () => {
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

   return (
      <a
         href="https://www.google.es"
         target="_blank"
         rel="noopener noreferrer"
         className={`floating-support-btn ${isVisible ? 'visible' : ''}`}
         aria-label="Support Coexpace"
      >
         <span className="btn-text">SUPPORT COEXPACE</span>
         <span className="btn-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
         </span>

         <style jsx>{`
            .floating-support-btn {
               position: fixed;
               bottom: 30px;
               right: 30px;
               background: #5033ff;
               color: #ffffff;
               border: none;
               border-radius: 50px;
               padding: 16px 32px;
               font-size: 16px;
               font-weight: 700;
               letter-spacing: 1px;
               cursor: pointer;
               z-index: 999;
               box-shadow: 0 8px 25px rgba(80, 51, 255, 0.4);
               transition: all 0.3s ease;
               opacity: 0;
               transform: translateY(100px);
               pointer-events: none;
               display: flex;
               align-items: center;
               gap: 12px;
               white-space: nowrap;
               text-decoration: none;
            }

            .floating-support-btn.visible {
               opacity: 1;
               transform: translateY(0);
               pointer-events: all;
            }

            .floating-support-btn:hover {
               transform: translateY(-3px);
               box-shadow: 0 12px 35px rgba(80, 51, 255, 0.6);
               background: #c6d306;
               color: #ffffff;
            }

            .floating-support-btn:active {
               transform: translateY(-1px);
            }

            .btn-icon {
               display: flex;
               align-items: center;
               animation: heartbeat 2s infinite;
            }

            @keyframes heartbeat {
               0%, 100% {
                  transform: scale(1);
               }
               10%, 30% {
                  transform: scale(1.1);
               }
               20%, 40% {
                  transform: scale(1);
               }
            }

            /* Mobile styles */
            @media (max-width: 768px) {
               .floating-support-btn {
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
               .floating-support-btn {
                  bottom: 25px;
                  right: 25px;
                  padding: 15px 28px;
                  font-size: 15px;
               }
            }
         `}</style>
      </a>
   );
};

export default FloatingSupportButton;
