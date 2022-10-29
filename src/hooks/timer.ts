import { useEffect, useState } from "react"

export const useTimer = (startDatetime: Date | undefined) => {
  const [diff, setDiff] = useState<number>(0);
  useEffect(() => {
    const func = setInterval(() => {
      setDiff(new Date().getTime() - (startDatetime ?? new Date()).getTime());
    }, 100);
    return () => clearInterval(func);
  }, []);

  return diff;
}
