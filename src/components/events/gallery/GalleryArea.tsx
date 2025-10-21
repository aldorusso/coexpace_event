"use client"
import Image, { StaticImageData } from "next/image"
import ImagePopup from "@/modals/ImagePopup"
import { useState } from "react"

import gallery_1 from "@/assets/img/gallery/thumb.jpg"
import gallery_2 from "@/assets/img/gallery/thumb-2.jpg"
import gallery_3 from "@/assets/img/gallery/thumb-3.jpg"
import gallery_4 from "@/assets/img/gallery/thumb-4.jpg"
import gallery_5 from "@/assets/img/gallery/thumb-5.jpg"
import gallery_6 from "@/assets/img/gallery/thumb-6.jpg"
import gallery_7 from "@/assets/img/gallery/thumb-7.jpg"
import gallery_8 from "@/assets/img/gallery/thumb-8.jpg"
import gallery_9 from "@/assets/img/gallery/thumb-9.jpg"

const gallery_data: StaticImageData[] = [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5, gallery_6, gallery_7, gallery_8, gallery_9];

const GalleryArea = () => {

   const [photoIndex, setPhotoIndex] = useState<number>(0);
   const [isOpen, setIsOpen] = useState(false);

   const handleImagePopup = (i: number) => {
      setPhotoIndex(i);
      setIsOpen(true);
   };

   const slides = gallery_data.map((img) => ({
      src: img.src,
   }));

   return (
      <>
         <div className="td-gallery-area pt-140 pb-125">
            <div className="container">
               <div className="row">
                  {gallery_data.map((img, i) => (
                     <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                        <div className="td-gallery-wrap mb-25">
                           <a onClick={() => handleImagePopup(i)} style={{ cursor: "pointer" }} className="popup-image">
                              <div className="td-gallery-thumb p-relative">
                                 <Image className="w-100" src={img} alt="thumb" />
                                 <div className="td-gallery-icon p-absulute">
                                    <span><i className="flaticon-up-right-arrow"></i></span>
                                 </div>
                              </div>
                           </a>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         {isOpen && (
            <ImagePopup
               images={slides}
               isOpen={isOpen}
               setIsOpen={setIsOpen}
               photoIndex={photoIndex}
            />
         )}
      </>
   )
}

export default GalleryArea
