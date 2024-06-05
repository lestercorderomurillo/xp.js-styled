import { useEffect, useState } from "react";

/**
 * useDebouncedState Hook allows to defer a state update by a timelapse, to rate limit state updates
 */
export const useDebouncedState = (initialValue, delay = 100) => {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return [debouncedValue, setValue];
};

export default useDebouncedState;
