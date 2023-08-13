import { RefObject, useEffect, useState } from "react";

export function useInfinityScroll(
  ref?: RefObject<HTMLDivElement>,
  isLoading?: boolean
) {
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      if (window.innerHeight + scrollTop + 200 >= offsetHeight) {
        setTouch(true);
      } else {
        setTouch(false);
      }
    };

    window?.addEventListener("scroll", handleScroll);
    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  return [touch];
}
