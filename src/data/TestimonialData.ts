import { StaticImageData } from "next/image";

import avatar from "@/assets/img/testimonial/avatar.png"
import avatar_1 from "@/assets/img/testimonial/tes-4/avatar.jpg"
import avatar_2 from "@/assets/img/testimonial/tes-4/avatar-2.jpg"
import avatar_3 from "@/assets/img/testimonial/tes-4/avatar-3.jpg"

interface DataType {
   id: number;
   page: string;
   desc: string;
   user: StaticImageData;
   user_name: string;
   designation: string;
}

const testi_data: DataType[] = [
   {
      id: 1,
      page: "home_3",
      desc: "“when an unknown printer took a galley offer type and scrambled make type specimen bookIt has survived not only five centuries but also the leap into electronic. ”",
      user: avatar,
      user_name: "Jane Cooper",
      designation: "CEO, Marketer Pro"
   },
   {
      id: 2,
      page: "home_3",
      desc: "“when an unknown printer took a galley offer type and scrambled make type specimen bookIt has survived not only five centuries but also the leap into electronic. ”",
      user: avatar,
      user_name: "Jane Cooper",
      designation: "CEO, Marketer Pro"
   },
   {
      id: 3,
      page: "home_3",
      desc: "“when an unknown printer took a galley offer type and scrambled make type specimen bookIt has survived not only five centuries but also the leap into electronic. ”",
      user: avatar,
      user_name: "Jane Cooper",
      designation: "CEO, Marketer Pro"
   },

   // home_4
   {
      id: 1,
      page: "home_4",
      desc: "“ Great Quality Products With areaw Good Packaging unknown printer toweok year galley of type and scrambled itter area make pecimive centuries”",
      user: avatar_1,
      user_name: "Leslie Alexander",
      designation: "Sr.Designer"
   },
   {
      id: 2,
      page: "home_4",
      desc: "“ Great Quality Products With areaw Good Packaging unknown printer toweok year galley of type and scrambled itter area make pecimive centuries”",
      user: avatar_2,
      user_name: "Jenny Wilson",
      designation: "Sr.Designer"
   },
   {
      id: 3,
      page: "home_4",
      desc: "“ Great Quality Products With areaw Good Packaging unknown printer toweok year galley of type and scrambled itter area make pecimive centuries”",
      user: avatar_3,
      user_name: "Bessie Cooper",
      designation: "Sr.Designer"
   },
   {
      id: 4,
      page: "home_4",
      desc: "“ Great Quality Products With areaw Good Packaging unknown printer toweok year galley of type and scrambled itter area make pecimive centuries”",
      user: avatar_2,
      user_name: "Jenny Wilson",
      designation: "Sr.Designer"
   },
];

export default testi_data;