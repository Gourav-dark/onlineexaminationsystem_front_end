import { useState, useEffect } from "react";

const Timer = ({ targetTime }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [minutesLeft, setMinutesLeft] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000*5); // Update time every second (1000 milliseconds)

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (targetTime) {
      const diffInMinutes = Math.floor((targetTime - currentTime) / (1000 * 60));
      setMinutesLeft(diffInMinutes);
    }
  }, [currentTime, targetTime]);

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
        Time:{formatTime(currentTime)}
        &nbsp;&nbsp;  
        Minutes Left:{minutesLeft}
    </>
  );
};

export default Timer;
