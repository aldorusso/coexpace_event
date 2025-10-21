"use client";
import React from "react";
import { Modal } from "react-responsive-modal";
import ReactPlayer from "react-player";

interface VideoPopupProps {
   isOpen: boolean;
   onClose: () => void;
   videoId: string;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ isOpen, onClose, videoId }) => {
   return (
      <Modal open={isOpen} onClose={onClose} center classNames={{ modal: "video-modal" }} styles={{
         modal: {
            maxWidth: "90vw",
            width: "100%",
            padding: 0,
            margin: 0
         }
      }}>
         <div style={{
            width: "100%",
            maxWidth: "1200px",
            height: "0",
            paddingBottom: "56.25%",
            position: "relative"
         }}>
            <ReactPlayer
               src={`https://www.youtube.com/watch?v=${videoId}`}
               playing
               controls
               muted
               width="100%"
               height="100%"
               style={{ position: "absolute", top: 0, left: 0 }}
               onError={(e) => {
                  console.error("Error playing video:", e);
               }}
            />
         </div>
      </Modal>
   );
};

export default VideoPopup;