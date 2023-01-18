import styles from 'styles/home/our.module.scss'
import Image from 'next/image'
import {Card, Button } from 'react-bootstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

import casio from "assets/imgs/item_132996896728982854_Img_5.png"
import hewlett from "assets/imgs/item_132996897032386765_Img_10.png"
import fujitsu from "assets/imgs/item_132996896977768209_Img_9.png"
import epson from "assets/imgs/item_132996896918309065_Img_8.png"
import cisco from "assets/imgs/item_132996896792645197_Img_6.png"
import dell from "assets/imgs/item_132996896854443049_Img_7.png"
import canon from "assets/imgs/item_132996896669922324_Img_4.png"
import ac from "assets/imgs/item_132996896565882187_Img_2 1.png"

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