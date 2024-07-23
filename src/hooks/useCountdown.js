// useCountdown.js
import { useEffect, useState } from 'react';

const useCountdown = (initialCountdown) => {
  const [countdown, setCountdown] = useState(initialCountdown);

  useEffect(() => {
    // Exit early when we reach 0
    if (countdown <= 0) return;

    // Save intervalId to clear the interval when the
    // component re-renders or unmounts
    const intervalId = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdown]);

  return countdown;
};

export default useCountdown;