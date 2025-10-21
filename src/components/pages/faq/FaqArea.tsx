"use client"
import { useEffect, useState } from "react";
import faq_data from "@/data/FaqData"

interface DataType {
  id: number;
  page: string
  title: string;
  desc: string;
  showAnswer: boolean;
}

const FaqArea = () => {

  const [faqData, setFaqData] = useState<DataType[]>([]);

  useEffect(() => {
    const filtered = faq_data.filter(item => item.page === "inner_faq");
    const updatedData = filtered.map((item, index) => ({
      ...item,
      showAnswer: index === 0
    }));
    setFaqData(updatedData);
  }, []);

  const toggleAnswer = (faqId: number) => {
    setFaqData((prevFaqData) =>
      prevFaqData.map((faq) => ({
        ...faq,
        showAnswer: faq.id === faqId
      }))
    );
  };

  return (
    <div className="td-faq-area pt-135 pb-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="td-faq-wrapper mr-40 ml-40">
              <div className="text-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                <h2 className="td-faq-title mb-20">Have any questions?<br />  Find answers here!</h2>
                <p className="td-faq-para mb-20">em ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet
                  Quisquawe rutruman imperdieEtiam ultricies nisi vel augue. Curabitur.</p>
              </div>
              <div className="td-faq-wrapper">
                <div className="accordion" id="general_faqaccordion">
                  {faqData.map((item) => (
                    <div key={item.id} className="accordion-item wow fadeInUp">
                      <h2 className="accordion-header" onClick={() => toggleAnswer(item.id)}>
                        <button className={`accordion-button ${item.showAnswer ? "" : "collapsed"} `} type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                          {item.title}
                          <span className="accordion-btn"></span>
                        </button>
                      </h2>
                      <div id="order__collapse_one" className={`accordion-collapse collapse ${item.showAnswer ? "show" : ""}`}>
                        <div className="accordion-body td-faq-details-para">
                          <p>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqArea
