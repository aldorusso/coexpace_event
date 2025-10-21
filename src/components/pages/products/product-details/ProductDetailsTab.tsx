"use client"
import { useState } from "react";
import Specification from "./Specification";
import Review from "./Review";

const tab_title: string[] = ["Product Description", "Specification", "(2) Reviews"]

const ProductDetailsTab = () => {

   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   return (
      <div className="td-product-details-bottom pb-85">
         <div className="container">
            <div className="row">
               <div className="col-xl-12">
                  <div className="td-product-details-tab-nav tp-tab">
                     <nav>
                        <div className="nav nav-tabs p-relative td-product-tab justify-content-sm-start justify-content-center" id="nav-tab" role="tablist">
                           {tab_title.map((tab, index) => (
                              <button key={index} onClick={() => handleTabClick(index)} className={`nav-link ${activeTab === index ? "active" : ""}`}>{tab}</button>
                           ))}
                           <span id="productTabMarker" className="td-product-details-tab-line"></span>
                        </div>
                     </nav>
                     <div className="tab-content pt-30" id="nav-tabContent">
                        <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`} id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab">
                           <div className="td-product-details-desc-wrapper">
                              <p className="mb-0">Rimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the when  unknown rinter took a
                                 galley scrambled. Rimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard mmy text ever since the when an
                                 unknown printer took a  typesetting industry.Rimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the when  unknown rinter took a y scrambled. Rimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard mmy text ever since the when an  took a  typesetting industry.</p>
                           </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="nav-addInfo" role="tabpanel" aria-labelledby="nav-addInfo-tab">
                           <Specification />
                        </div>
                        <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`} id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
                           <Review />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductDetailsTab
