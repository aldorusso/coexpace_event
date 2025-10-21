import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import category_1 from "@/assets/img/cetagory/thumb.jpg"
import category_2 from "@/assets/img/cetagory/thumb-2.jpg"
import category_3 from "@/assets/img/cetagory/thumb-3.jpg"

interface DataType {
   id: number;
   thumb: StaticImageData;
   title: string;
   sub_title: string;
}

const cat_data: DataType[] = [
   {
      id: 1,
      thumb: category_1,
      title: "Vacation Style",
      sub_title: "Trending Now",
   },
   {
      id: 2,
      thumb: category_2,
      title: "Summer Vibes",
      sub_title: "Trending Now",
   },
   {
      id: 3,
      thumb: category_3,
      title: "Spring Style",
      sub_title: "Trending Now",
   },
];

const Category = () => {
   return (
      <div className="td-cetagory-area p-relative z-index-1 fix pt-140 pb-110">
         <div className="td-hero-4-blur td-team-5-blur"></div>
         <div className="td-hero-4-blur td-hero-4-blur-2 td-team-5-blur-2"></div>
         <div className="container">
            <div className="row">
               {cat_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                     <div className="td-cetagory-item mb-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <div className="td-cetagory-thumb p-relative">
                           <Image src={item.thumb} alt="" />
                           <div className="td-cetagory-content">
                              <div className="d-flex justify-content-between">
                                 <div className="td-cetagory-tittle-wrap mr-10">
                                    <h5 className="td-cetagory-tittle mb-0"><Link href="/product-details">{item.title}</Link></h5>
                                    <span className="td-cetagory-subtittle">{item.sub_title}</span>
                                 </div>
                                 <div className="td-cetagory-btn">
                                    <Link className="td-left-right text" href="/product-details">
                                       <span className="td-arrow-angle">
                                          <svg className="td-arrow-svg-top-right" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="currentColor" />
                                             <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="currentColor" />
                                          </svg>
                                       </span>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Category
