import { useEffect } from "react";

const WhiteNav = () => {
  //? Making the Nav on this page different from other pages.
  useEffect(() => {
    const NAV = document.querySelector("nav");
    NAV.style.position = "absolute";
    NAV.style.width = "100%";
    NAV.style.zIndex = 200;
    document.querySelectorAll(".menu_toggler_span").forEach((s) => {
      s.style.backgroundColor = "white";
    });
    document.querySelectorAll(".logo_cnt").forEach((cnt) => {
      cnt.style.color = "white";
    });
    document.querySelector(".logo_img").src =
      "http://basicallyeasy.com/NextJSCDNS/blueabyss/logos/white-logo.png";
    document.getElementById("searchToggler").style.backgroundColor =
      "ghostwhite";
    document.getElementById("searchToggler").style.color = "black";
    document.querySelector(".info_link a").style.color = "white";
  }, []);

  return "";
};

export default WhiteNav;
