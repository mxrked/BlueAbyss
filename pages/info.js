//! Libraries
import Head from "next/head";
import { motion } from "framer-motion";
import { useEffect } from "react";

//import { PageFade } from "../assets/animations/PageFade";

//! Components
import OnAllPages from "../helpers/components/OnAllPages";
import WhiteNav from "../helpers/components/WhiteNav";
import Footer from "../components/footer/Footer";

import Top from "../components/info/Top";
import Background from "../components/info/Background";
import Future from "../components/info/Future";
import Goals from "../components/info/Goals";

import styles from "../styles/views/info/Info.module.css";

export default function Info() {
  // Removes page jump hash on before reload
  useEffect(() => {
    window.addEventListener("load", () => {
      history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Blue Abyss - Our Background</title>

        {/* //* SEO
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta
          property="og:url"
          content="http://basicallyeasy.com/next-projects/blueabyss/info/"
        />
         */}
        <meta name="robots" content="noindex"></meta>

        <link
          rel="canonical"
          href="http://basicallyeasy.com/next-projects/blueabyss/info/"
        />

        {/*
         */}
        <link
          rel="shortcut icon"
          href="http://basicallyeasy.com/NextJSCDNS/blueabyss/icons/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="http://basicallyeasy.com/NextJSCDNS/blueabyss/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="http://basicallyeasy.com/NextJSCDNS/blueabyss/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="http://basicallyeasy.com/NextJSCDNS/blueabyss/icons/favicon-16x16.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Staatliches&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <OnAllPages />
      <WhiteNav />

      <motion.div
        id={styles.infoBody}
        // variants={PageFade}
        // initial="hidden"
        // animate="enter"
        // exit="exit"
        // transition={{ type: "linear" }}
      >
        <Top />
        <Background />
        <Future />
        <Goals />
      </motion.div>

      <Footer />
    </div>
  );
}
