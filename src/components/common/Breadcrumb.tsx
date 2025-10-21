import Link from 'next/link'

import bg_img from "@/assets/img/breadcrumb/breadcrumb.jpg"

interface DataType {
   title: string;
   sub_title: string;
}

const Breadcrumb = ({ title, sub_title }: DataType) => {
   return (
      <div className="td-breadcrumb-area td-breadcrumb-spacing bg-position" style={{ backgroundImage: `url(${bg_img.src})` }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="td-breadcrumb-title-wrap">
                     <h2 className="td-breadcrumb-title mb-10 wow td-animetion-left" data-wow-duration="1.5s" data-wow-delay="0.2s">{title}</h2>
                     <div className="td-breadcrumb-list wow td-animetion-right" data-wow-duration="1.5s" data-wow-delay="0.2s">
                        <ul>
                           <li><Link href="/">Home</Link></li>
                           <li><i className="fa-sharp fa-solid fa-angle-right fa-fw"></i></li>
                           <li className="pages">{sub_title}</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Breadcrumb
