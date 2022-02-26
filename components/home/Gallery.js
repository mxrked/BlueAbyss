import Link from "next/link";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { INDEX_Galleries } from "../../assets/imgs/INDEX";

import styles from "../../styles/views/home/Home.module.css";

const Gallery = () => {
  return (
    <div id={styles.gallery}>
      <div className={`${styles.gallery_box} container-fluid`}>
        <div className={`${styles.gallery_row} row`}>
          <div
            className={`${styles.gallery_side} col-lg-6 col-md-6 col-sm-4 col-xs-12 AOS_Item`}
            id={styles.galleryL}
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="700"
          >
            <BackgroundImage
              src={INDEX_Galleries}
              width="100%"
              height="100%"
              className={`${styles.gallery_bg}`}
            />
          </div>
          <div
            className={`${styles.gallery_side} col-lg-6 col-md-6 col-sm-8 col-xs-12 AOS_Item`}
            id={styles.galleryR}
            data-aos="fade-left"
            data-aos-delay="800"
            data-aos-duration="700"
          >
            <div className={`${styles.gallery_text}`}>
              <h2 className="page-transition">
                Gallery <br /> Aquariums.
              </h2>

              <p className="page-transition">
                Get a good look at the different things that live in the sea
                with our gallery aquariums.
              </p>

              <Link href="/next-projects/blueabyss/galleries/">
                <a className="page-transition">Explore</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
