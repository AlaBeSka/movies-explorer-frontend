import React, { useEffect } from "react";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import Portfolio from "./Portfolio/Portfolio";
import AboutMe from "./AboutMe/AboutMe";
import { scroller } from "react-scroll";

function Main() {
  useEffect(() => {
    const handleScrollToAboutMe = () => {
      scroller.scrollTo("about-me", {
        smooth: true,
        duration: 500,
        offset: 0,
      });
    };

    const promoButton = document.getElementById("promo-button");
    if (promoButton) {
      promoButton.addEventListener("click", handleScrollToAboutMe);
    }

    return () => {
      if (promoButton) {
        promoButton.removeEventListener("click", handleScrollToAboutMe);
      }
    };
  }, []);

  return (
    <main className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe id="about-me" />
      <Portfolio />
    </main>
  );
}

export default Main;
