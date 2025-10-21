
interface DataType {
   id: number;
   schedule_details: {
      id: number;
      time: string;
      time2: string;
      Topics: string;
      speaker: string;
      venue: string;
   }[]
}

const schedule_data: DataType[] = [
   {
      id: 1,
      schedule_details: [
         {
            id: 1,
            time: "09:00 am",
            time2: "10:00 am",
            Topics: "Women in business conference",
            speaker: "Ashton Porter",
            venue: "Manhattan Club nyc",
         },
         {
            id: 2,
            time: "10:00 am",
            time2: "11:00 am",
            Topics: "Women in business conference",
            speaker: "Ashton Porter",
            venue: "Manhattan Club nyc",
         },
         {
            id: 3,
            time: "11:00 am",
            time2: "12:00 pm",
            Topics: "Women in business conference",
            speaker: "Ashton Porter",
            venue: "Manhattan Club nyc",
         },
         {
            id: 4,
            time: "12:00 pm",
            time2: "01:00 pm",
            Topics: "Women in business conference",
            speaker: "Ashton Porter",
            venue: "Manhattan Club nyc",
         },
      ],
   },
   {
      id: 2,
      schedule_details: [
         {
            id: 1,
            time: "9:00 am",
            time2: "10:00 am",
            Topics: "Women in business conference",
            speaker: "Ashton Porter",
            venue: "Manhattan Club nyc",
         },
         {
            id: 2,
            time: "10:00 am",
            time2: "11:00 am",
            Topics: "Women in business conference",
            speaker: "Ashton Porter",
            venue: "Manhattan Club nyc",
         },
      ],
   },
   {
      id: 3,
      schedule_details: [
         {
            id: 1,
            time: "9:00 am",
            time2: "10:00 am",
            Topics: "Women in business conference",
            speaker: "Ashton Porter",
            venue: "Manhattan Club nyc",
         },
         {
            id: 2,
            time: "10:00 am",
            time2: "11:00 am",
            Topics: "Women in business conference",
            speaker: "Ashton Porter",
            venue: "Manhattan Club nyc",
         },
         {
            id: 3,
            time: "11:00 am",
            time2: "12:00 pm",
            Topics: "Women in business conference",
            speaker: "Ashton Porter",
            venue: "Manhattan Club nyc",
         },
      ],
   },
   {
      id: 4,
      schedule_details: [
         {
            id: 1,
            time: "10:00 am",
            time2: "11:00 am",
            Topics: "Women in business conference",
            speaker: "Ashton Porter",
            venue: "Manhattan Club nyc",
         },
      ],
   },
];

export default schedule_data;