import * as React from "react";
import InfoDesktop from "./info-responsive/info-desktop";
import InfoTablet from "./info-responsive/info-tablet";
import InfoMobile from "./info-responsive/info-mobile";

const InfoBar = () => {
  const [isInfoDesktop, setIsInfoDesktop] = React.useState(true);
  const [isInfoTablet, setIsInfoTablet] = React.useState(false);
  const [isInfoMobile, setIsInfoMobile] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1127) {
        setIsInfoDesktop(true);
      } else {
        setIsInfoDesktop(false);
      }

      if (window.innerWidth < 1127 && window.innerWidth > 670) {
        setIsInfoTablet(true);
      } else {
        setIsInfoTablet(false);
      }

      if (window.innerWidth < 670) {
        setIsInfoMobile(true);
      } else {
        setIsInfoMobile(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {isInfoDesktop && <InfoDesktop />}
      {isInfoTablet && <InfoTablet />}
      {isInfoMobile && <InfoMobile />}
    </>
  );
};

export default InfoBar;
