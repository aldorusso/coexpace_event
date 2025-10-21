import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import brand_1 from "@/assets/img/brands/brands.png"
import brand_2 from "@/assets/img/brands/brands-2.png"
import brand_3 from "@/assets/img/brands/brands-3.png"
import brand_4 from "@/assets/img/brands/brands-4.png"
import brand_5 from "@/assets/img/brands/brands-5.png"
import brand_6 from "@/assets/img/brands/brands-6.png"
import brand_7 from "@/assets/img/brands/brands-7.png"
import brand_8 from "@/assets/img/brands/brands-8.png"

const brands: StaticImageData[] = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_7, brand_8]

const Brand = () => {
   return (
      <div className="td-brands-area td-brands-2-wrap pt-140 pb-115">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="td-schedule-2-title-wrap text-center mb-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <span className="td-section-subtitle td-section-subtitle-2 mb-30">Sponsors</span>
                     <h2 className="td-section-title mb-10">Offcial Sponsors & Partners</h2>
                     <p className="td-section-text">Like previous year this year re arranging world<br />
                        marketing ummit Its the gathering</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {brands.map((brand, i) => (
                  <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
                     <div className="td-brands-item mb-25">
                        <Link href="#"><Image src={brand} alt="" /></Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Brand
