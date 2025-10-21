
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
            time: "10:00 AM",
            time2: "10:30 AM",
            Topics: "The Invisible Emergency: Why Mental Health Needs a Global Awakening",
            speaker: "Vivian Toussieh",
            venue: "COEXPACE Platform",
         },
         {
            id: 2,
            time: "10:30 AM",
            time2: "11:15 AM",
            Topics: "Suicide Awareness: Breaking the Silence",
            speaker: "Thelma Slezynger",
            venue: "COEXPACE Platform",
         },
         {
            id: 3,
            time: "11:15 AM",
            time2: "12:00 PM",
            Topics: "Bullying and Social Violence: Healing Our Schools and Communities",
            speaker: "Alejandra Schatzky",
            venue: "COEXPACE Platform",
         },
         {
            id: 4,
            time: "12:00 PM",
            time2: "01:30 PM",
            Topics: "Childhood Bonds: How Early Connections Shape Our Mental Health",
            speaker: "Vanessa Grunwald",
            venue: "COEXPACE Platform",
         },
         {
            id: 5,
            time: "01:30 PM",
            time2: "02:15 PM",
            Topics: "Re-envisioning Global Mental Health: The New Frontiers",
            speaker: "Dr. Milton Wainberg",
            venue: "COEXPACE Platform",
         },
         {
            id: 6,
            time: "02:15 PM",
            time2: "03:00 PM",
            Topics: "Collective Breath: Returning to the Present Moment",
            speaker: "Vivian Toussieh",
            venue: "COEXPACE Platform",
         },
      ],
   },
   {
      id: 2,
      schedule_details: [
         {
            id: 1,
            time: "10:00 AM",
            time2: "11:00 AM",
            Topics: "Human Trafficking and Resilience",
            speaker: "Sujo John",
            venue: "COEXPACE Platform",
         },
         {
            id: 2,
            time: "11:00 AM",
            time2: "11:45 AM",
            Topics: "Trauma and Transformation: The Path from Pain to Purpose",
            speaker: "Dr. Edith Shiro",
            venue: "COEXPACE Platform",
         },
         {
            id: 3,
            time: "11:45 AM",
            time2: "12:30 PM",
            Topics: "Anxiety and Depression: New Perspectives on Healing the Modern Mind",
            speaker: "Manuel Ortega",
            venue: "COEXPACE Platform",
         },
         {
            id: 4,
            time: "12:30 PM",
            time2: "01:30 PM",
            Topics: "Psychedelic Therapy: Expanding Consciousness for Healing",
            speaker: "José Casas",
            venue: "COEXPACE Platform",
         },
         {
            id: 5,
            time: "01:30 PM",
            time2: "02:30 PM",
            Topics: "From Awareness to Action: Building a Conscious Society",
            speaker: "Vivian Toussieh",
            venue: "COEXPACE Platform",
         },
      ],
   },
];

export default schedule_data;
