"use client"
import Image, { StaticImageData } from "next/image"
import bg_img from "@/assets/img/hero/bg.jpg"

interface EventDayHeroProps {
  dayNumber: number;
  dayTitle: string;
  subtitle: string;
  description: string;
  videoThumbnail: StaticImageData;
  videoUrl: string;
}

const EventDayHero = ({
  dayNumber,
  dayTitle,
  subtitle,
  description,
  videoThumbnail
}: EventDayHeroProps) => {
  return (
    <div className="td-event-day-hero td-hero-spacing bg-position p-relative fix" style={{ backgroundImage: `url(${bg_img.src})` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="td-event-day-content mb-30">
              <h2 className="td-event-day-title mb-20 wow td-animetion-left" data-wow-duration="1.5s" data-wow-delay="0.1s">
                The Moral Courage<br/>
                <span className="td-event-day-title-yellow">Virtual Summit 2025</span>
              </h2>
              <h3 className="td-event-day-subtitle mb-15 wow td-animetion-left" data-wow-duration="1.5s" data-wow-delay="0.3s">
                {dayTitle}
              </h3>
              <p className="td-event-day-desc mb-20 wow td-animetion-left" data-wow-duration="1.5s" data-wow-delay="0.5s">
                {subtitle}
              </p>
              <p className="td-event-day-text wow td-animetion-left" data-wow-duration="1.5s" data-wow-delay="0.7s">
                {description}
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="td-event-day-video mb-30 wow td-animetion-right" data-wow-duration="1.5s" data-wow-delay="0.5s">
              <div className="td-event-day-badge">DAY {dayNumber}</div>
              <Image src={videoThumbnail} alt={`Day ${dayNumber} Video`} className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDayHero
