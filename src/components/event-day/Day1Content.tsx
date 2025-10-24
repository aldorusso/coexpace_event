"use client"
import EventDayHero from "./EventDayHero"
import SpeakersNavBar from "./SpeakersNavBar"
import SpeakerSection from "./SpeakerSection"
import HeaderEvent from "@/layouts/headers/HeaderEvent"
import FooterOne from "@/layouts/footers/FooterOne"
import FloatingSupportButton from "@/components/common/FloatingSupportButton"
import banner_thumb from "@/assets/img/hero/thumb.png"

// Placeholder images - Replace with actual speaker images
const speakerImages = {
  vivian: banner_thumb,
  thelma: banner_thumb,
  alejandra: banner_thumb,
  vanessa: banner_thumb,
  milton: banner_thumb
}

const Day1Content = () => {
  const speakers = [
    {
      id: "vivian-toussieh",
      name: "Vivian Toussieh",
      title: "The Invisible Emergency: Why Mental Health Needs a Global Awakening",
      description: "",
      quote: "Mental health is not a destination, it's a journey we all share.",
      videoThumbnail: speakerImages.vivian,
      youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1",
      spotifyEmbedUrl: "https://open.spotify.com/embed/episode/YOUR_EPISODE_ID_1",
      date: "Nov 20 - 10:00 AM"
    },
    {
      id: "thelma-slezynger",
      name: "Thelma Slezynger",
      title: "Suicide Awareness: Breaking the Silence",
      description: "",
      quote: "Breaking the silence can save a life.",
      videoThumbnail: speakerImages.thelma,
      youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2",
      spotifyEmbedUrl: "https://open.spotify.com/embed/episode/YOUR_EPISODE_ID_2",
      date: "Nov 20 - 10:30 AM"
    },
    {
      id: "alejandra-schatzky",
      name: "Alejandra Schatzky",
      title: "Bullying and Social Violence: Healing Our Schools and Communities",
      description: "",
      quote: "Every act of courage creates a ripple of change.",
      videoThumbnail: speakerImages.alejandra,
      youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3",
      spotifyEmbedUrl: "https://open.spotify.com/embed/episode/YOUR_EPISODE_ID_3",
      date: "Nov 20 - 11:15 AM"
    },
    {
      id: "vanessa-grunwald",
      name: "Vanessa Grunwald",
      title: "Childhood Bonds: How Early Connections Shape Our Mental Health",
      description: "",
      quote: "The bonds we form in childhood echo throughout our lives.",
      videoThumbnail: speakerImages.vanessa,
      youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_4",
      spotifyEmbedUrl: "https://open.spotify.com/embed/episode/YOUR_EPISODE_ID_4",
      date: "Nov 20 - 12:00 PM"
    },
    {
      id: "milton-wainberg",
      name: "Dr. Milton Wainberg",
      title: "Re-envisioning Global Mental Health: The New Frontiers",
      description: "",
      quote: "The future of mental health lies in global collaboration.",
      videoThumbnail: speakerImages.milton,
      youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_5",
      spotifyEmbedUrl: "https://open.spotify.com/embed/episode/YOUR_EPISODE_ID_5",
      date: "Nov 20 - 01:30 PM"
    }
  ]

  const speakersNav = speakers.map(s => ({ id: s.id, name: s.name }));

  return (
    <>
      <HeaderEvent speakers={speakersNav} />
      <EventDayHero
        dayNumber={1}
        dayTitle="Day 1 – The Invisible Emergency"
        subtitle="Why Mental Health Needs a Global Awakening"
        description="Join us for a transformative day exploring mental health awareness, suicide prevention, and the foundations of emotional wellbeing."
        videoThumbnail={banner_thumb}
        videoUrl="https://www.youtube.com/watch?v=YOUR_MAIN_VIDEO"
      />
      <SpeakersNavBar speakers={speakersNav} />
      <SpeakerSection speakers={speakers} />
      <FooterOne />
      <FloatingSupportButton />
    </>
  )
}

export default Day1Content
