interface DataType {
   id: number;
   page: string;
   sub_title: string;
   desc?: string;
   price: number;
   lists: string[];
}

const price_data: DataType[] = [
   {
      id: 1,
      page: "home_2",
      sub_title: "Silver Pass",
      price: 19,
      lists: ["Access to mobile app", "Access to 1000+ talk", "Access to exhibition floor", "Email 24/7 awsupport", "Access to 1000+ talk", "exhibition floor area",],
   },
   {
      id: 2,
      page: "home_2",
      sub_title: "Golden Pass",
      price: 29,
      lists: ["Access to mobile app", "Access to 1000+ talk", "Access to exhibition floor", "Email 24/7 awsupport", "Access to 1000+ talk", "exhibition floor area",],
   },
   {
      id: 3,
      page: "home_2",
      sub_title: "Platinum Pass",
      price: 49,
      lists: ["Access to mobile app", "Access to 1000+ talk", "Access to exhibition floor", "Email 24/7 awsupport", "Access to 1000+ talk", "exhibition floor area",],
   },

   // home_4
   {
      id: 1,
      page: "home_4",
      sub_title: "Silver",
      desc: "when an unknown printer took galley of type and scrambled",
      price: 19,
      lists: ["Access to mobile app", "Access to 1000+ talk", "Access to exhibition floor", "Email 24/7 awsupport", "Access to 1000+ talk", "exhibition floor area",],
   },
   {
      id: 2,
      page: "home_4",
      sub_title: "Golden",
      desc: "when an unknown printer took galley of type and scrambled",
      price: 29,
      lists: ["Access to mobile app", "Access to 1000+ talk", "Access to exhibition floor", "Email 24/7 awsupport", "Access to 1000+ talk", "exhibition floor area",],
   },
   {
      id: 3,
      page: "home_4",
      sub_title: "Platinum",
      desc: "when an unknown printer took galley of type and scrambled",
      price: 49,
      lists: ["Access to mobile app", "Access to 1000+ talk", "Access to exhibition floor", "Email 24/7 awsupport", "Access to 1000+ talk", "exhibition floor area",],
   },
];

export default price_data;