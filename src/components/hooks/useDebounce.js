import { useRef } from 'react';

const useDebounce = (fn, delay) => {
  const timeoutRef = useRef(null);
  const debouncedFn = (...args) => {
    console.log(args);
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  };
  return debouncedFn;
};

export default useDebounce;
