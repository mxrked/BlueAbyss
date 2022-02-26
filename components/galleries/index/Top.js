import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FadeDown } from "../../../assets/animations/FadeDown";

import styles from "../../../styles/views/galleries/Galleries.module.css";

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
        <div className={styles.top_bg_cnt}>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={FadeDown}
          >
            <h1 className="page-transition">
              Gallery <br /> Aquariums
            </h1>

            <p>Exploring the vast ocean and its depths.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Top;
