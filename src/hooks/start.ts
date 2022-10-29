import { useState } from "react"

export const useStart = () => {
  const [startDatetime, setStartDatetime] = useState<Date | undefined>(undefined);
  const isRunning = startDatetime !== undefined;
  const txt = isRunning ? 'stop when you push here' : 'please push here';

  return {
    isRunning,
    txt,
    startDatetime,
    start: () => {
      setStartDatetime(new Date());
    },
    stop: () => {
      setStartDatetime(undefined);
    }
  }
}