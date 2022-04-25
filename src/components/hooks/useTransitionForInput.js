import { useEffect, useRef } from 'react';

const useTransitionForInput = (active, setSearch) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (active) {
      inputRef.current.style.width = '150px';
    } else {
      inputRef.current.style.width = '0px';
      setSearch({});
    }
  }, [active, setSearch]);

  return inputRef;
};

export default useTransitionForInput;
