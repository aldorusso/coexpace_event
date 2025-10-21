"use client"
import { useState } from "react"
import faqBg from "@/assets/img/faq-bg.jpg"

interface FaqItem {
   id: number;
   question: string;
   answer: string;
}

const faqs: FaqItem[] = [
   {
      id: 1,
      question: "What is The Invisible Emergency?",
      answer: "The Invisible Emergency is a global mental health summit bringing together experts, survivors, and community leaders to address the unseen crisis of mental health. It's a free 2-day virtual summit from November 20-21, 2025."
   },
   {
      id: 2,
      question: "Who should attend this summit?",
      answer: "This summit is for anyone interested in mental health advocacy, healthcare professionals, educators, community leaders, survivors, and individuals seeking to understand and support mental health initiatives globally."
   },
   {
      id: 3,
      question: "Is there a cost to participate?",
      answer: "No, registration is completely free. We believe mental health resources should be accessible to everyone. However, donations are welcome to help us continue offering free programs and expand our reach to underserved communities."
   },
   {
      id: 4,
      question: "How can I support Coexpace's mission?",
      answer: "You can support our mission by attending the summit, sharing it with your network, volunteering, or making a donation. Your support helps keep the summit free, brings empathy programs to schools, and creates lasting tools for inclusive change."
   }
];

const Brand = () => {
   const [activeId, setActiveId] = useState<number>(1);

   return (
      <div className="td-brands-area blue-bg pt-110 pb-115" style={{ backgroundImage: `url(${faqBg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="td-brands-title-wrap text-center mb-60 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".2s">
                     <span className="td-section-subtitle mb-20">FAQ</span>
                     <h2 className="td-section-title">Frequently Asked Questions</h2>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="td-faq-wrap">
                     {faqs.map((faq) => (
                        <div key={faq.id} className="td-faq-item mb-30 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".2s">
                           <div
                              className={`td-faq-question ${activeId === faq.id ? 'active' : ''}`}
                              onClick={() => setActiveId(activeId === faq.id ? 0 : faq.id)}
                              style={{
                                 padding: '20px 30px',
                                 background: activeId === faq.id ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                                 borderRadius: '10px',
                                 cursor: 'pointer',
                                 transition: 'all 0.3s ease',
                                 marginBottom: activeId === faq.id ? '15px' : '0'
                              }}
                           >
                              <h4 style={{ margin: 0, color: '#fff', fontSize: '18px', fontWeight: '600' }}>
                                 {faq.question}
                                 <span style={{ float: 'right' }}>{activeId === faq.id ? '−' : '+'}</span>
                              </h4>
                           </div>
                           {activeId === faq.id && (
                              <div
                                 className="td-faq-answer"
                                 style={{
                                    padding: '0 30px 20px',
                                    color: '#fff',
                                    lineHeight: '1.8',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '0 0 10px 10px',
                                    marginTop: '-15px'
                                 }}
                              >
                                 <p style={{ margin: 0 }}>{faq.answer}</p>
                              </div>
                           )}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Brand
