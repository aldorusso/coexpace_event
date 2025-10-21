import { StaticImageData } from "next/image";

import team_1 from "@/assets/img/team/nirdosh-kohra.png"
import team_2 from "@/assets/img/team/member-2.png"
import team_3 from "@/assets/img/team/member-3.png"
import team_4 from "@/assets/img/team/member-4.png"
import team_5 from "@/assets/img/team/member-5.png"
import team_6 from "@/assets/img/team/member-6.png"
import team_7 from "@/assets/img/team/member-7.png"
import team_8 from "@/assets/img/team/member-8.png"
import team_9 from "@/assets/img/team/member-9.png"

import team2_1 from "@/assets/img/team/team-2/team-1.jpg"
import team2_2 from "@/assets/img/team/team-2/team-2.jpg"
import team2_3 from "@/assets/img/team/team-2/team-3.jpg"
import team2_4 from "@/assets/img/team/team-2/team-4.jpg"
import team2_5 from "@/assets/img/team/team-2/team-5.jpg"
import team2_6 from "@/assets/img/team/team-2/team-6.jpg"
import team2_7 from "@/assets/img/team/team-2/team-7.jpg"
import team2_8 from "@/assets/img/team/team-2/team-8.jpg"

import team3_1 from "@/assets/img/team/team-3/team.jpg"
import team3_2 from "@/assets/img/team/team-3/team-2.jpg"
import team3_3 from "@/assets/img/team/team-3/team-3.jpg"
import team3_4 from "@/assets/img/team/team-3/team-4.jpg"
import team3_5 from "@/assets/img/team/team-3/team-5.jpg"
import team3_6 from "@/assets/img/team/team-3/team-6.jpg"
import team3_7 from "@/assets/img/team/team-3/team-7.jpg"
import team3_8 from "@/assets/img/team/team-3/team-8.jpg"

import team5_1 from "@/assets/img/team/team-4/team-1.png"
import team5_2 from "@/assets/img/team/team-4/team-2.png"
import team5_3 from "@/assets/img/team/team-4/team-3.png"
import team5_4 from "@/assets/img/team/team-4/team-4.png"
import team5_5 from "@/assets/img/team/team-4/team-5.png"
import team5_6 from "@/assets/img/team/team-4/team-6.png"
import team5_7 from "@/assets/img/team/team-4/team-7.png"
import team5_8 from "@/assets/img/team/team-4/team-8.png"
import team5_9 from "@/assets/img/team/team-4/team-9.png"

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   title: string;
   designation: string;
}

const team_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: team_1,
      title: "Vivian Toussieh",
      designation: "Founder of COEXPACE Movement",
   },
   {
      id: 2,
      page: "home_1",
      thumb: team_2,
      title: "Thelma Slezynger",
      designation: "Psychologist & Advocate",
   },
   {
      id: 3,
      page: "home_1",
      thumb: team_3,
      title: "Alejandra Schatzky",
      designation: "Social Entrepreneur & Author",
   },
   {
      id: 4,
      page: "home_1",
      thumb: team_4,
      title: "Vanessa Grunwald",
      designation: "Therapist & Coach",
   },
   {
      id: 5,
      page: "home_1",
      thumb: team_5,
      title: "Dr. Milton Wainberg",
      designation: "Global Leader in Psychiatry",
   },
   {
      id: 6,
      page: "home_1",
      thumb: team_6,
      title: "Dr. Edith Shiro",
      designation: "Clinical Psychologist & Author",
   },
   {
      id: 7,
      page: "home_1",
      thumb: team_7,
      title: "Manuel Ortega",
      designation: "Psychotherapist & Speaker",
   },
   {
      id: 8,
      page: "home_1",
      thumb: team_8,
      title: "José Casas",
      designation: "Transpersonal Therapist & Writer",
   },
   {
      id: 9,
      page: "home_1",
      thumb: team_9,
      title: "Sujo John",
      designation: "Humanitarian Speaker & Founder",
   },

   // home_2
   {
      id: 1,
      page: "home_2",
      thumb: team2_1,
      title: "Devon Lane",
      designation: "Sr. Software Engineer",
   },
   {
      id: 2,
      page: "home_2",
      thumb: team2_2,
      title: "Esther Howard",
      designation: "Marketing Manager",
   },
   {
      id: 3,
      page: "home_2",
      thumb: team2_3,
      title: "Cody Fisher",
      designation: "Sr. Software Engineer",
   },
   {
      id: 4,
      page: "home_2",
      thumb: team2_4,
      title: "Floyd Miles",
      designation: "CEO",
   },
   {
      id: 5,
      page: "home_2",
      thumb: team2_5,
      title: "Jane Cooper",
      designation: "Sr. Software Engineer",
   },
   {
      id: 6,
      page: "home_2",
      thumb: team2_6,
      title: "Kristin Watson",
      designation: "Marketing Manager",
   },
   {
      id: 7,
      page: "home_2",
      thumb: team2_7,
      title: "Theresa Web",
      designation: "Sr. Software Engineer",
   },
   {
      id: 8,
      page: "home_2",
      thumb: team2_8,
      title: "Wade Warren",
      designation: "Manager",
   },

   // home_3
   {
      id: 1,
      page: "home_3",
      thumb: team3_1,
      title: "Esther Howard",
      designation: "Marketing Manager",
   },
   {
      id: 2,
      page: "home_3",
      thumb: team3_2,
      title: "Cody Fisher",
      designation: "Digital Researcher",
   },
   {
      id: 3,
      page: "home_3",
      thumb: team3_3,
      title: "Tony Robbins",
      designation: "Sr. Software Engineer",
   },
   {
      id: 4,
      page: "home_3",
      thumb: team3_4,
      title: "Eric Thomas",
      designation: "Sr. Software Engineer",
   },
   {
      id: 5,
      page: "home_3",
      thumb: team3_5,
      title: "Nick Vujicic",
      designation: "Marketing Manager",
   },
   {
      id: 6,
      page: "home_3",
      thumb: team3_6,
      title: "Les Brown",
      designation: "Marketing Manager",
   },
   {
      id: 7,
      page: "home_3",
      thumb: team3_7,
      title: "Mel Robbins",
      designation: "Digital Researcher",
   },
   {
      id: 8,
      page: "home_3",
      thumb: team3_8,
      title: "Zig Ziglar",
      designation: "Marketing Manager",
   },

   // inner_team
   {
      id: 1,
      page: "inner_team",
      thumb: team5_1,
      title: "Cody Fisher",
      designation: "Sr. Software Engineer",
   },
   {
      id: 2,
      page: "inner_team",
      thumb: team5_2,
      title: "Floyd Miles",
      designation: "Sr. Software Engineer",
   },
   {
      id: 3,
      page: "inner_team",
      thumb: team5_3,
      title: "Esther Howard",
      designation: "Sr. Software Engineer",
   },
   {
      id: 4,
      page: "inner_team",
      thumb: team5_4,
      title: "Devon Lane",
      designation: "Sr. Software Engineer",
   },
   {
      id: 5,
      page: "inner_team",
      thumb: team5_5,
      title: "Cody Fisher",
      designation: "Sr. Software Engineer",
   },
   {
      id: 6,
      page: "inner_team",
      thumb: team5_6,
      title: "Cody Fisher",
      designation: "Sr. Software Engineer",
   },
   {
      id: 7,
      page: "inner_team",
      thumb: team5_7,
      title: "Esther Howard",
      designation: "Sr. Software Engineer",
   },
   {
      id: 8,
      page: "inner_team",
      thumb: team5_8,
      title: "Devon Lane",
      designation: "Sr. Software Engineer",
   },
   {
      id: 9,
      page: "inner_team",
      thumb: team5_9,
      title: "Floyd Miles",
      designation: "Sr. Software Engineer",
   },
];

export default team_data;