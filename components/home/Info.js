import Link from "next/link";
import { BackgroundImage } from "react-image-and-background-image-fade";
import { INDEX_Info } from "../../assets/imgs/INDEX";

import styles from "../../styles/views/home/Home.module.css";

const Info = () => {
  return (
    <div id={styles.info}>
      <div
        className={`${styles.info_cnt} AOS_Item`}
        data-aos="fade-right"
        data-aos-delay="800"
        data-aos-duration="700"
      >
        <div className={styles.info_bg_holder}>
          <BackgroundImage
            src={INDEX_Info}
            width="100%"
            height="100%"
            className={styles.info_bg}
          />
        </div>

        <div className={styles.info_text}>
          <div>
            <h2 className="page-transition">
              Blue Abyss <br /> Background.
            </h2>

            <p className="page-transition">
              Learn and understand the background and history of Blue Abyss.
              Also learn our current goals that are yet to be made.
            </p>

            <Link href="/next-projects/blueabyss/info">
              <a className="page-transition">Learn</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
