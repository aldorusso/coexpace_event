"use client"
import Image from "next/image"

interface Speaker {
  id: string;
  name: string;
  title: string;
  description: string;
  quote: string;
  videoThumbnail: any;
  youtubeUrl: string;
  spotifyEmbedUrl: string;
  date: string;
  badge?: string;
}

interface SpeakerSectionProps {
  speakers: Speaker[];
}

const SpeakerSection = ({ speakers }: SpeakerSectionProps) => {
  return (
    <div className="td-event-speakers-area pt-120 pb-120">
      <div className="container">
        {speakers.map((speaker, index) => (
          <div key={index} id={speaker.id} className="row align-items-center mb-80">
            <div className="col-xl-6 col-lg-6">
              <div className="td-event-speaker-video mb-30 wow td-animetion-left" data-wow-duration="1.5s" data-wow-delay="0.3s">
                <a href={speaker.youtubeUrl} target="_blank" rel="noopener noreferrer" className="td-video-link">
                  <Image src={speaker.videoThumbnail} alt={speaker.name} className="w-100" />
                  <div className="td-video-play-btn">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.9"/>
                      <path d="M32 26L54 40L32 54V26Z" fill="#1b0166"/>
                    </svg>
                  </div>
                  {speaker.badge && (
                    <div className="td-speaker-badge">{speaker.badge}</div>
                  )}
                  <div className="td-speaker-date">{speaker.date}</div>
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="td-event-speaker-content mb-30 wow td-animetion-right" data-wow-duration="1.5s" data-wow-delay="0.3s">
                <h3 className="td-speaker-name mb-20">{speaker.name}</h3>
                <h4 className="td-speaker-title mb-20">{speaker.title}</h4>
                <p className="td-speaker-quote mb-30">"{speaker.quote}"</p>
                <div className="td-speaker-spotify">
                  <iframe
                    src={speaker.spotifyEmbedUrl}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpeakerSection
