"use client"
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Modal } from 'react-responsive-modal';

interface VideoPopupProps {
   isVideoOpen: boolean;
   setIsVideoOpen: (isOpen: boolean) => void;
   videoId?: string;
}

const VideoPopup = ({ isVideoOpen, setIsVideoOpen, videoId = 'FJ_aqNRNZcU' }: VideoPopupProps) => {
   return (
      <Modal open={isVideoOpen} onClose={() => setIsVideoOpen(false)} center classNames={{
         modal: 'videoModal',
      }}>
         <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} />
      </Modal>
   );
};

export default VideoPopup;
