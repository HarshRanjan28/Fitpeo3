import { useEffect, useState } from "react";

const useMeasurement = () => {
  const mobileBreakpoint = 480;
  const tabletBreakpoint = 768;
  const [deviceView, setDeviceView] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });
  useEffect(() => {
    const checkDevice = () => {
      const isMobile = window.matchMedia(
        `(max-width: ${mobileBreakpoint}px)`
      ).matches;
      const isTablet =
        window.matchMedia(`(max-width: ${tabletBreakpoint}px)`).matches &&
        !isMobile;
      const isDesktop = !isMobile && !isTablet;

      setDeviceView({
        isMobile,
        isTablet,
        isDesktop,
      });
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);
    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  return deviceView;
};

export default useMeasurement;
