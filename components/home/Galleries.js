import { Component } from "react";
import Link from "next/link";

import { BackgroundImage } from "react-image-and-background-image-fade";
import {
  INDEX_Aquatic,
  INDEX_Cephalopod,
  INDEX_Crustacean,
  INDEX_Mammal,
} from "../../assets/imgs/INDEX";

import styles from "../../styles/views/home/Home.module.css";

class Galleries extends Component {
  constructor(props) {
    super(props);

    this.createGallery = this.createGallery.bind(this);
  }

  createGallery(props) {
    return (
      <Link href={props.galleriesLINK}>
        <div className={styles.galleries_cnt}>
          <BackgroundImage
            src={props.galleriesBG}
            width="100%"
            height="100%"
            className={`${styles.galleries_bg} page-transition`}
          ></BackgroundImage>
          <div className="page-transition">
            <span>{props.galleriesSPAN}</span>
          </div>
        </div>
      </Link>
    );
  }

  render() {
    return (
      <div id={styles.galleries}>
        <div
          className={`${styles.galleries_box} container-fluid AOS_Item`}
          data-aos="fade-down"
          data-aos-delay="800"
          data-aos-duration="700"
        >
          <div className={`${styles.galleries_row} row`}>
            <div
              className={`${styles.galleries_side} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <this.createGallery
                galleriesLINK="/next-projects/blueabyss/galleries/aquatic"
                galleriesBG={INDEX_Aquatic}
                galleriesSPAN="Aquatic"
              />
            </div>
            <div
              className={`${styles.galleries_side} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <this.createGallery
                galleriesLINK="/next-projects/blueabyss/galleries/cephalopod"
                galleriesBG={INDEX_Cephalopod}
                galleriesSPAN="Cephalopod"
              />
            </div>
            <div
              className={`${styles.galleries_side} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <this.createGallery
                galleriesLINK="/next-projects/blueabyss/galleries/crustacean"
                galleriesBG={INDEX_Crustacean}
                galleriesSPAN="Crustacean"
              />
            </div>
            <div
              className={`${styles.galleries_side} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <this.createGallery
                galleriesLINK="/next-projects/blueabyss/galleries/mammal"
                galleriesBG={INDEX_Mammal}
                galleriesSPAN="Mammal"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Galleries;
