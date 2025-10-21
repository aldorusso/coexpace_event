

import bg_img from "@/assets/img/feature/feature.jpg"

interface DataType {
   id: number;
   icon: string;
   title: string;
   desc: string;
}

const feature_data: DataType[] = [
   {
      id: 1,
      icon: "flaticon-speaker",
      title: "Experienced Speaker",
      desc: "anunknown printer took galley type and scrambled type specimen book survived."
   },
   {
      id: 2,
      icon: "flaticon-teamwork-2",
      title: "Live Workshop Program",
      desc: "anunknown printer took galley type and scrambled type specimen book survived."
   },
   {
      id: 3,
      icon: "flaticon-request",
      title: "Exciting Q&A Sessions",
      desc: "anunknown printer took galley type and scrambled type specimen book survived."
   },
   {
      id: 4,
      icon: "flaticon-surprise",
      title: "Exiting Giveaways Program",
      desc: "anunknown printer took galley type and scrambled type specimen book survived."
   },
];

const Feature = () => {
   return (
      <div className="td-feature-area pt-140 pb-115 bg-position" style={{ backgroundImage: `url(${bg_img.src})` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="td-feature-4-wrap text-center mb-50 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <span className="td-section-subtitle td-section-subtitle-2 mb-25">Event Information</span>
                     <h2 className="td-section-title text-white mb-15">Why you should Join Our Event</h2>
                     <p className="text-white">Like previous year this year we are arranging world marketing <br />
                        summit 2025. Its the gathering of all the big</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {feature_data.map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <div className="td-feature-3-wrap mr-60 mb-30">
                        <span className="td-feature-3-icon d-inline-block mb-20"><i className={item.icon}></i></span>
                        <h3 className="td-feature-3-title mb-15">{item.title}</h3>
                        <p className="td-feature-3-text">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Feature
