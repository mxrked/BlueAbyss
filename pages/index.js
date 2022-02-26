//! Libraries
import Head from "next/head";
import { motion } from "framer-motion";

//import { PageFade } from "../assets/animations/PageFade";

//! Components
import OnAllPages from "../helpers/components/OnAllPages";
import Footer from "../components/footer/Footer";
import WhiteNav from "../helpers/components/WhiteNav";

import Top from "../components/home/Top";
import Gallery from "../components/home/Gallery";
import Galleries from "../components/home/Galleries";
import Info from "../components/home/Info";
import Goals from "../components/home/Goals";
import Feedback from "../components/home/Feedback";

import styles from "../styles/views/home/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blue Abyss - Oceanlife Exploration</title>

        <meta
          name="description"
          content="Blue Abyss is for those who want to explore and discover the beauty of the sea. Explore and visit our gallery aquarium with the following: Aquatic, Cephalopods, Crustaceans, Mammals."
        />
        <meta
          name="keywords"
          content="Blue Abyss, blue, abyss, ocean, sea, discover the beauty of the sea, ocean life, gallery aquarium, aquatic, cephalopod, crustacean, mammal"
        />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Blue Abyss - Oceanlife Exploration"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta
          property="og:url"
          content="http://basicallyeasy.com/next-projects/blueabyss/"
        />

        <link
          rel="canonical"
          href="http://basicallyeasy.com/next-projects/blueabyss/"
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
        id={styles.homeBody}
        // variants={PageFade}
        // initial="hidden"
        // animate="enter"
        // exit="exit"
        // transition={{ type: "linear" }}
      >
        <Top />
        <Gallery />
        <Galleries />
        <Info />
        <Goals />
        <Feedback />
      </motion.div>

      <Footer />
    </div>
  );
}
