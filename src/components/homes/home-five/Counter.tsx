import Count from "@/components/common/Count";
import { JSX } from "react";

interface DataType {
   id: number;
   icon: JSX.Element;
   count: number;
   title: string;
}

const counter_data: DataType[] = [
   {
      id: 1,
      icon: (<><i className="flaticon-speaker"></i></>),
      count: 65,
      title: "Skilled Speakers",
   },
   {
      id: 2,
      icon: (<><i className="flaticon-teamwork"></i></>),
      count: 16,
      title: "Live Workshop"
   },
   {
      id: 3,
      icon: (<><i className="flaticon-fastfood"></i></>),
      count: 10,
      title: "Snacks & Facilities"
   },
   {
      id: 4,
      icon: (<><i className="flaticon-deal"></i></>),
      count: 15,
      title: "Popular Snacks",
   },
];

const Counter = () => {
   return (
      <div className="td-counter-area pt-70 pb-115">
         <div className="container">
            <div className="row">
               {counter_data.map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                     <div className="td-counter-2-wrap td-counter-5-wrap mb-30">
                        <span className="td-counter-2-icon mr-20">
                           {item.icon}
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
