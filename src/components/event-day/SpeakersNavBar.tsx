"use client"

interface Speaker {
   name: string;
   id: string;
}

interface SpeakersNavBarProps {
   speakers: Speaker[];
}

const SpeakersNavBar = ({ speakers }: SpeakersNavBarProps) => {
   const scrollToSpeaker = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
   };

   return (
      <div className="td-speakers-nav-bar-sticky">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <nav className="td-speakers-nav-bar">
                     <ul className="d-flex align-items-center justify-content-center gap-3 flex-wrap mb-0">
                        {speakers.map((speaker, index) => (
                           <li key={index}>
                              <a
                                 href={`#${speaker.id}`}
                                 onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSpeaker(speaker.id);
                                 }}
                                 className="speaker-link"
                              >
                                 {speaker.name}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </nav>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SpeakersNavBar;
