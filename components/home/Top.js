import Link from "next/link";
import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FadeDown } from "../../assets/animations/FadeDown";

import styles from "../../styles/views/home/Home.module.css";

const Top = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id={styles.top}>
      <div className={styles.top_bg}>
        <div className={`${styles.top_bg_cnt} page-transition`}>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={FadeDown}
          >
            <h1 className="page-transition">
              SWIM WITH
              <br /> THE FISHES.
            </h1>

            <p className="page-transition">
              Explore and get familiar with the different ocean life.
            </p>

            <Link href="/next-projects/blueabyss/galleries/">
              <a className="page-transition">Explore</a>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Top;
