import { useEffect } from "react";

// This will be used to clear out the session storage of the menu and search togglers that prevent the user from scrolling.
const ClearOverflowSS = () => {
  useEffect(() => {
    if (sessionStorage.getItem("Menu Toggled")) {
      sessionStorage.removeItem("Menu Toggled");

      setTimeout(() => {
        document.body.style.overflowY = "auto";
      }, 10);
    }

    if (sessionStorage.getItem("Search Toggled")) {
      sessionStorage.removeItem("Search Toggled");

      setTimeout(() => {
        document.body.style.overflowY = "auto";
      }, 10);
    }
  }, []);

  return "";
};

export default ClearOverflowSS;
