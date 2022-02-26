import "../styles/global/resets/Resets.css";
import "../styles/global/overrides/Overrides.css";

import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  //? Show what the website was made with.
  useEffect(() => {
    if (document.getElementById("__next")) {
      console.log(
        "Blue Abyss🐟 was made with NextJS, BootStrap, SaSS, HTML5 and etc."
      );
    }
  }, []);

  return (
    <div className="app-wrap">
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
