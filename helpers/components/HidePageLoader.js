import { useEffect } from "react";

// This will be used to detect if the user has already seen and been through the page loader
const HidePageLoader = () => {
  useEffect(() => {
    if (sessionStorage.getItem("Page Loader Finished")) {
      document.getElementById("pageLoader").style.display = "none";
      document.getElementById("whiteOverlay").style.display = "none";
    }
  }, []);

  return "";
};

export default HidePageLoader;
