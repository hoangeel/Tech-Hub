import styles from 'styles/home/our.module.scss'
import Image from 'next/image'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

import casio from "assets/imgs/logoCasio.png"
import hewlett from "assets/imgs/logoHewlet.png"
import fujitsu from "assets/imgs/logoFujitsu.png"
import epson from "assets/imgs/logoEpson.png"
import cisco from "assets/imgs/logoCisco.png"
import dell from "assets/imgs/logoDell.png"
import canon from "assets/imgs/logoCanon.png"
import ac from "assets/imgs/logoAC.png"

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}
export default function OurFeaturedBrands() {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <SamplePrevArrow />,

  };
  return (
    <div className={styles.our}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.titleOur}>Our Featured Brands</h1>
          <div>
            <Slider {...settings} className={styles.slider}>
              <div  className={styles.iconSlider}>
                <Image src={casio} alt="casio"/>
              </div>
              <div  className={styles.iconSlider}>
                <Image src={hewlett} alt="hewlett"/>
              </div>
              <div  className={styles.iconSlider}>
                <Image src={fujitsu} alt="fujitsu"/>
              </div>
              <div  className={styles.iconSlider}>
                <Image src={epson} alt="epson"/>
              </div>
              <div  className={styles.iconSlider}>
                <Image src={cisco} alt="cisco"/>
              </div>
              <div  className={styles.iconSlider}>
                <Image src={dell} alt="dell"/>
              </div>
              <div  className={styles.iconSlider}>
                <Image src={canon} alt="canon"/>
              </div>
              <div  className={styles.iconSlider}>
                <Image src={ac} alt=""/>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}