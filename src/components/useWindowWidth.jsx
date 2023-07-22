import { useLayoutEffect, useState } from "react";

//Use: const width = useWindowWidth()
//if (width > 768) return

export function useWindowWidth() {
  const [width, setWidth] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setWidth([window.innerWidth]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return width;
}