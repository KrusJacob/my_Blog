"use string";
import { useEffect, useState } from "react";

const useDebounce = (str: string, delay = 400) => {
  const [debounce, setDebounce] = useState<string>(str);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounce(str);
    }, delay);

    return () => clearTimeout(timeout);
  }, [str]);

  return debounce;
};

export default useDebounce;
