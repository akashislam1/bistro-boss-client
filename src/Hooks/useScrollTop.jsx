import { useEffect } from "react";

export const useScrollTop = (pathname) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
