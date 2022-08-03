import { useEffect, useRef, useState } from "react";

const useTimer = (accepted) => {
  const initRef = useRef();
  const actualRef = useRef();
  const minutesRef = useRef();
  const secondsRef = useRef();
  const totalRef = useRef();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [activeTimer, setActiveTimer] = useState(false);
  const activateTimer = (date) => {
    initRef.current = date;
    setActiveTimer(true);
  };
  useEffect(() => {
    const timer =
      activeTimer &&
      setInterval(() => {
        actualRef.current = Date.now();
        totalRef.current = initRef.current - actualRef.current;
        secondsRef.current = Math.floor((totalRef.current / 1000) % 60);
        minutesRef.current = Math.floor((totalRef.current / 1000 / 60) % 60);
        setMinutes(minutesRef.current);
        setSeconds(secondsRef.current);
        if (minutesRef.current <= 0) clearInterval(timer);
      }, 1000);
    return () => clearInterval(timer);
  }, [activeTimer]);

  useEffect(() => {
    activateTimer(Date.now() + 30 * 60 * 1000);
  }, [accepted]);
  return [minutes, seconds];
};
export default useTimer;
