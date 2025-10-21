"use client";
import React, { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

interface DealCounterProps {
   expiryTimestamp: Date;
}

const DealCounter: React.FC<DealCounterProps> = ({ expiryTimestamp }) => {
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   const { seconds, minutes, hours, days } = useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("Timer expired!"),
   });

   if (!mounted) {
      return null;
   }

   return (
      <>
         <li className="list-inline-item days mb-20">
            {days} <span>days</span>
         </li>
         <li className="list-inline-item hours mb-20">
            {hours} <span>hrs</span>
         </li>
         <li className="list-inline-item minutes mb-20">
            {minutes} <span>mins</span>
         </li>
         <li className="list-inline-item seconds mb-20">
            {seconds} <span>secs</span>
         </li>
      </>
   );
};

export default DealCounter;
