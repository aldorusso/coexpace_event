import { StaticImageData } from "next/image";

import event_1 from "@/assets/img/schedule/schedule-3/schedule.jpg"
import event_2 from "@/assets/img/schedule/schedule-3/schedule-2.jpg"
import event_3 from "@/assets/img/schedule/schedule-3/schedule-3.jpg"
import event_4 from "@/assets/img/schedule/schedule-3/schedule-4.jpg"

import event2_1 from "@/assets/img/schedule/schedule-7/thumb.jpg"
import event2_2 from "@/assets/img/schedule/schedule-7/thumb-2.jpg"
import event2_3 from "@/assets/img/schedule/schedule-7/thumb-7.jpg"

import avatar_1 from "@/assets/img/schedule/schedule-3/user.jpg"
import avatar_2 from "@/assets/img/schedule/schedule-3/user-2.jpg"
import avatar_3 from "@/assets/img/schedule/schedule-3/user-3.jpg"

interface DataType {
   id: number;
   page: string;
   event_details: {
      id: number;
      thumb: StaticImageData;
      date: string;
      title: string;
      location: string;
      time: string;
      desc?: string;
      author_avatar: StaticImageData;
      author_name: string;
      author_designation: string;
   }[]
}

const event_two_data: DataType[] = [
   {
      id: 1,
      page: "home_3",
      event_details: [
         {
            id: 1,
            thumb: event_1,
            date: "jan 10, 2025",
            title: "Innovate 2022 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
            author_avatar: avatar_1,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
         {
            id: 2,
            thumb: event_2,
            date: "jan 10, 2025",
            title: "Innovate 2022 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
            author_avatar: avatar_2,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
         {
            id: 3,
            thumb: event_3,
            date: "jan 10, 2025",
            title: "Innovate 2022 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
            author_avatar: avatar_3,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
      ],
   },
   {
      id: 2,
      page: "home_3",
      event_details: [
         {
            id: 1,
            thumb: event_2,
            date: "jan 10, 2025",
            title: "Innovate 2022 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
            author_avatar: avatar_2,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
         {
            id: 2,
            thumb: event_3,
            date: "jan 10, 2025",
            title: "Innovate 2022 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
            author_avatar: avatar_3,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
      ],
   },
   {
      id: 3,
      page: "home_3",
      event_details: [
         {
            id: 1,
            thumb: event_3,
            date: "jan 10, 2025",
            title: "Innovate 2022 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
            author_avatar: avatar_3,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
         {
            id: 2,
            thumb: event_2,
            date: "jan 10, 2025",
            title: "Innovate 2022 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
            author_avatar: avatar_2,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
      ],
   },

   // home_6
   {
      id: 1,
      page: "home_6",
      event_details: [
         {
            id: 1,
            thumb: event2_1,
            date: "jan 10, 2025",
            title: "Innovate 2025 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            author_avatar: avatar_1,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
         {
            id: 2,
            thumb: event2_2,
            date: "jan 10, 2025",
            title: "Web Components Working With Shadow DOM Technology Event 2025",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            author_avatar: avatar_2,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
         {
            id: 3,
            thumb: event2_3,
            date: "jan 10, 2025",
            title: "Innovate 2025 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            author_avatar: avatar_3,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
      ],
   },
   {
      id: 2,
      page: "home_6",
      event_details: [
         {
            id: 1,
            thumb: event2_1,
            date: "jan 10, 2025",
            title: "Innovate 2025 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            author_avatar: avatar_1,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
         {
            id: 2,
            thumb: event2_2,
            date: "jan 10, 2025",
            title: "Web Components Working With Shadow DOM Technology Event 2025",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            author_avatar: avatar_2,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
      ],
   },
   {
      id: 3,
      page: "home_6",
      event_details: [
         {
            id: 1,
            thumb: event2_1,
            date: "jan 10, 2025",
            title: "Innovate 2025 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            author_avatar: avatar_1,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
         {
            id: 2,
            thumb: event2_3,
            date: "jan 10, 2025",
            title: "Innovate 2025 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            author_avatar: avatar_2,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
      ],
   },

   // inner_event
   {
      id: 1,
      page: "inner_event",
      event_details: [
         {
            id: 1,
            thumb: event_1,
            date: "jan 10, 2025",
            title: "Innovate 2022 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
            author_avatar: avatar_1,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
         {
            id: 2,
            thumb: event_2,
            date: "jan 10, 2025",
            title: "Innovate 2022 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
            author_avatar: avatar_2,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
         {
            id: 3,
            thumb: event_3,
            date: "jan 10, 2025",
            title: "Innovate 2022 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
            author_avatar: avatar_3,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
         {
            id: 4,
            thumb: event_4,
            date: "jan 10, 2025",
            title: "Innovate 2022 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
            author_avatar: avatar_3,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
      ],
   },
   {
      id: 2,
      page: "inner_event",
      event_details: [
         {
            id: 1,
            thumb: event_4,
            date: "jan 10, 2025",
            title: "Innovate 2022 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
            author_avatar: avatar_3,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
         {
            id: 2,
            thumb: event_2,
            date: "jan 10, 2025",
            title: "Innovate 2022 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
            author_avatar: avatar_2,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
         {
            id: 3,
            thumb: event_3,
            date: "jan 10, 2025",
            title: "Innovate 2022 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
            author_avatar: avatar_3,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
      ],
   },
   {
      id: 3,
      page: "inner_event",
      event_details: [
         {
            id: 1,
            thumb: event_3,
            date: "jan 10, 2025",
            title: "Innovate 2022 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
            author_avatar: avatar_3,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
         {
            id: 2,
            thumb: event_2,
            date: "jan 10, 2025",
            title: "Innovate 2022 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
            author_avatar: avatar_2,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
         {
            id: 3,
            thumb: event_4,
            date: "jan 10, 2025",
            title: "Innovate 2022 Your Pathway to Business Transformation Energy Save",
            location: "Apple Upper West Side, Brooklyn",
            time: "19:15 a.m. – 07:15 a.m.",
            desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
            author_avatar: avatar_3,
            author_name: "Parker Roben",
            author_designation: "Author, Cleaner",
         },
      ],
   },
];

export default event_two_data;