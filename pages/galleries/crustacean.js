//! Libraries
import Head from "next/head";
import { useEffect } from "react";
import { motion } from "framer-motion";

//! Components
import OnAllPages from "../../helpers/components/OnAllPages";
import Footer from "../../components/footer/Footer";
import WhiteNav from "../../helpers/components/WhiteNav";

import Top from "../../components/galleries/crustacean/Top";
import Togglers from "../../components/galleries/crustacean/Togglers";
import Modals from "../../components/galleries/crustacean/Modals";

import styles from "../../styles/views/galleries/Galleries.module.css";

export default function Crustacean() {
  useEffect(() => {}, []);

  return (
    <div>
      <Head>
        <title>Blue Abyss - Galleries | Crustacean</title>

        {/* //* SEO 
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta
          property="og:url"
          content="http://basicallyeasy.com/next-projects/blueabyss/galleries/crustacean/"
        />
         */}
        <meta name="robots" content="noindex"></meta>

        <link
          rel="canonical"
          href="http://basicallyeasy.com/next-projects/blueabyss/galleries/crustacean/"
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
        id={styles.crustaceanBody}
        //variants={PageFade}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        <Top />
        <Togglers />
        <Modals />
      </motion.div>

      <Footer />
    </div>
  );
}
