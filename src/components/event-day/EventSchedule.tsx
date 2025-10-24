"use client"
import Link from "next/link"

interface ScheduleItem {
  startTime: string;
  endTime: string;
  topic: string;
  speaker: string;
  venue: string;
}

interface EventScheduleProps {
  title: string;
  schedules: ScheduleItem[];
}

const EventSchedule = ({ title, schedules }: EventScheduleProps) => {
  return (
    <div className="td-event-schedule-area pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="td-section-title-wrap text-center mb-60">
              <h2 className="td-section-title wow td-animetion-top" data-wow-duration="1.5s" data-wow-delay="0.3s">
                {title}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="td-event-schedule-list">
              {schedules.map((item, index) => (
                <div
                  key={index}
                  className="td-event-schedule-item wow td-animetion-left"
                  data-wow-duration="1.5s"
                  data-wow-delay={`${0.1 + index * 0.1}s`}
                >
                  <div className="td-schedule-time">
                    <span className="td-time-start">{item.startTime}</span>
                    <span className="td-time-separator">-</span>
                    <span className="td-time-end">{item.endTime}</span>
                  </div>
                  <div className="td-schedule-content">
                    <h4 className="td-schedule-topic">{item.topic}</h4>
                    <div className="td-schedule-meta">
                      <span className="td-schedule-speaker">
                        <i className="fa-solid fa-user"></i> {item.speaker}
                      </span>
                      <span className="td-schedule-venue">
                        <i className="fa-solid fa-location-dot"></i> {item.venue}
                      </span>
                    </div>
                  </div>
                  <div className="td-schedule-register">
                    <Link
                      className="td-btn-schedule"
                      href="#join-movement"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('join-movement')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                    >
                      Register
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventSchedule
