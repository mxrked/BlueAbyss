import Link from "next/link";
import { Component } from "react";
import { BackgroundImage } from "react-image-and-background-image-fade";
import {
  GALLERIES_Aquatic,
  GALLERIES_Cephalopod,
  GALLERIES_Crustacean,
  GALLERIES_Mammal,
} from "../../../assets/imgs/GALLERIES";

import styles from "../../../styles/views/galleries/Galleries.module.css";

class Galleries extends Component {
  constructor(props) {
    super(props);

    this.createGallery = this.createGallery.bind(this);
  }

  createGallery(props) {
    return (
      <div
        className={`${styles.gallery} AOS_Item`}
        data-aos={props.AOS}
        data-aos-delay="800"
        data-aos-duration="700"
      >
        <BackgroundImage
          src={props.gallery_BG}
          width="100%"
          height="100%"
          className={`${styles.gallery_bg} page-transition`}
        />

        <Link href={props.gallery_HREF}>
          <a className="page-transition">
            <div>
              <span>{props.gallery_SPAN}</span>
            </div>
          </a>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div id={styles.galleries}>
        <div className={styles.galleries_cnt}>
          <this.createGallery
            AOS="fade-left"
            gallery_BG={GALLERIES_Aquatic}
            gallery_HREF="/next-projects/blueabyss/galleries/aquatic/"
            gallery_SPAN="Aquatic"
          />
          <this.createGallery
            AOS="fade-right"
            gallery_BG={GALLERIES_Cephalopod}
            gallery_HREF="/next-projects/blueabyss/galleries/cephalopod/"
            gallery_SPAN="Cephalopod"
          />
          <this.createGallery
            AOS="fade-left"
            gallery_BG={GALLERIES_Crustacean}
            gallery_HREF="/next-projects/blueabyss/galleries/crustacean/"
            gallery_SPAN="Crustacean"
          />
          <this.createGallery
            AOS="fade-right"
            gallery_BG={GALLERIES_Mammal}
            gallery_HREF="/next-projects/blueabyss/galleries/mammal/"
            gallery_SPAN="Mammal"
          />
        </div>
      </div>
    );
  }
}

export default Galleries;
