import * as React from "react";
import InfoDesktop from "./info-responsive/info-desktop";
import InfoTablet from "./info-responsive/info-tablet";
import InfoMobile from "./info-responsive/info-mobile";

const InfoBar = () => {
  return (
    <>
      <InfoDesktop />
      <InfoTablet />
    </>
  );
};

export default InfoBar;
