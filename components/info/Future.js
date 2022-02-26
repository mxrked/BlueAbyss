import { BackgroundImage } from "react-image-and-background-image-fade";

import { INFO_Future } from "../../assets/imgs/INFO";

import styles from "../../styles/views/info/Info.module.css";

const Future = () => {
  return (
    <div id={styles.future}>
      <div
        className={`${styles.future_bg_holder} AOS_Item`}
        data-aos="fade-down"
        data-aos-delay="800"
        data-aos-duration="700"
      >
        <BackgroundImage
          src={INFO_Future}
          width="100%"
          height="100%"
          className={styles.future_bg}
        />
      </div>

      <div
        className={`${styles.future_text_holder} AOS_Item`}
        data-aos="fade-right"
        data-aos-delay="800"
        data-aos-duration="700"
      >
        <div>
          <h2 className="page-transition">Future And Goals.</h2>

          <p className="page-transition">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Future;
