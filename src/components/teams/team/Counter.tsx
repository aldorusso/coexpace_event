import Count from "@/components/common/Count";

import bg_img from "@/assets/img/feature/special-features.jpg"

interface DataType {
   id: number;
   icon: string;
   count: number;
   title: string;
}

const counter_data: DataType[] = [
   {
      id: 1,
      icon: "flaticon-speaker",
      count: 65,
      title: "Skilled Speakers",
   },
   {
      id: 2,
      icon: "flaticon-teamwork",
      count: 16,
      title: "Live Workshop"
   },
   {
      id: 3,
      icon: "flaticon-fastfood",
      count: 10,
      title: "Snacks & Facilities"
   },
   {
      id: 4,
      icon: "flaticon-deal",
      count: 15,
      title: "Popular Snacks",
   },
];

const Counter = () => {
   return (
      <div className="td-counter-area td-counter-4-wrap pt-140 pb-115 bg-position" style={{ backgroundImage: `url(${bg_img.src})` }}>
         <div className="container">
            <div className="row">
               {counter_data.map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                     <div className="td-counter-2-wrap ml-30 mb-30">
                        <span className="td-counter-2-icon mr-20">
                           {<i className={item.icon}></i>}
                        </span>
                        <div className="td-counter-2-content">
                           <h2 className="td-counter-2-title count"><Count number={item.count} />+</h2>
                           <span className="td-counter-2-subtitle">{item.title}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Counter
