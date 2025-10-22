"use client"
import { Modal } from 'react-responsive-modal';

interface VideoPopupProps {
   isVideoOpen: boolean;
   setIsVideoOpen: (isOpen: boolean) => void;
   videoId?: string;
}

const VideoPopup = ({ isVideoOpen, setIsVideoOpen, videoId = 'FJ_aqNRNZcU' }: VideoPopupProps) => {
   return (
      <Modal
         open={isVideoOpen}
         onClose={() => setIsVideoOpen(false)}
         center
         classNames={{
            modal: 'videoModal',
         }}
         styles={{
            modal: {
               maxWidth: '90vw',
               width: '900px',
               padding: 0,
               background: '#000',
            }
         }}
      >
         <div style={{ position: 'relative', paddingTop: '56.25%', width: '100%' }}>
            <iframe
               style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
               }}
               src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
               title="YouTube video player"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowFullScreen
            />
         </div>
      </Modal>
   );
};

export default VideoPopup;
