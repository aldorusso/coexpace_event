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
  sujo: banner_thumb,
  edith: banner_thumb,
  manuel: banner_thumb,
  jose: banner_thumb,
  vivian: banner_thumb
}

const Day2Content = () => {
  const speakers = [
    {
      id: "sujo-john",
      name: "Sujo John",
      title: "Human Trafficking and Resilience",
      description: "",
      quote: "I walked out of the rubble so others might rise.",
      videoThumbnail: speakerImages.sujo,
      youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1",
      spotifyEmbedUrl: "https://open.spotify.com/embed/episode/YOUR_EPISODE_ID_1",
      date: "Nov 21 - 10:00 AM",
      badge: "9/11 SURVIVOR & ADVOCATE"
    },
    {
      id: "edith-shiro",
      name: "Dr. Edith Shiro",
      title: "Trauma and Transformation: The Path from Pain to Purpose",
      description: "",
      quote: "Healing is not about forgetting, it's about transforming pain into purpose.",
      videoThumbnail: speakerImages.edith,
      youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2",
      spotifyEmbedUrl: "https://open.spotify.com/embed/episode/YOUR_EPISODE_ID_2",
      date: "Nov 21 - 11:00 AM"
    },
    {
      id: "manuel-ortega",
      name: "Manuel Ortega",
      title: "Anxiety and Depression: New Perspectives on Healing the Modern Mind",
      description: "",
      quote: "Understanding anxiety is the first step toward healing.",
      videoThumbnail: speakerImages.manuel,
      youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3",
      spotifyEmbedUrl: "https://open.spotify.com/embed/episode/YOUR_EPISODE_ID_3",
      date: "Nov 21 - 11:45 AM"
    },
    {
      id: "jose-casas",
      name: "José Casas",
      title: "Psychedelic Therapy: Expanding Consciousness for Healing",
      description: "",
      quote: "The mind holds the key to its own healing.",
      videoThumbnail: speakerImages.jose,
      youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_4",
      spotifyEmbedUrl: "https://open.spotify.com/embed/episode/YOUR_EPISODE_ID_4",
      date: "Nov 21 - 12:30 PM"
    },
    {
      id: "vivian-toussieh-day2",
      name: "Vivian Toussieh",
      title: "From Awareness to Action: Building a Conscious Society",
      description: "",
      quote: "Awareness without action is just another form of silence.",
      videoThumbnail: speakerImages.vivian,
      youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_5",
      spotifyEmbedUrl: "https://open.spotify.com/embed/episode/YOUR_EPISODE_ID_5",
      date: "Nov 21 - 01:30 PM"
    }
  ]

  const speakersNav = speakers.map(s => ({ id: s.id, name: s.name }));

  return (
    <>
      <HeaderEvent />
      <EventDayHero
        dayNumber={2}
        dayTitle="Day 2 – From Pain to Purpose"
        subtitle="Trauma, Healing, and Transformation"
        description="Explore paths to healing through trauma recovery, innovative therapies, and building conscious communities."
        videoThumbnail={banner_thumb}
        videoUrl="https://www.youtube.com/watch?v=YOUR_MAIN_VIDEO_DAY2"
      />
      <SpeakersNavBar speakers={speakersNav} />
      <SpeakerSection speakers={speakers} />
      <FooterOne />
      <FloatingSupportButton />
    </>
  )
}

export default Day2Content
