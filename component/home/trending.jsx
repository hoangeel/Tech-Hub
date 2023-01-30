import styles from 'styles/home/trending.module.scss'
import Image from 'next/image'
import {Card, Button, InputGroup } from 'react-bootstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { Component } from "react";

import iconStar from "assets/imgs/Vector (5).png"
import Dell1 from "assets/imgs/large_1.png"
import Dell2 from "assets/imgs/large_2.png"
import Dell3 from "assets/imgs/large_3.png"
import Dell4 from "assets/imgs/large_4.png"

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
export default function TrendingProducts() {
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
    <div className={styles.trending}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Trending Products  (6 Items)</h1>
          <div>
            <Slider {...settings} className={styles.slider}>
              <div  className={styles.iconSlider}>
                <Card className={styles.card}>
                  <Card.Body className={styles.cardBody}>
                    <div className={styles.img}><Image src={Dell1} alt=""/></div>
                    <h1>Dell Optical Mouse-MS116-Black</h1>
                    <InputGroup>
                      <p>$19.00</p>
                      <Image src={iconStar} alt=""/>
                      <Image src={iconStar} alt=""/>
                      <Image src={iconStar} alt=""/>
                      <Image src={iconStar} alt=""/>
                      <Image src={iconStar} alt="" className={styles.imgEnd}/>
                    </InputGroup>
                    <Button>Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div  className={styles.iconSlider}>
                <Card className={styles.card}>
                  <Card.Body className={styles.cardBody}>
                    <div className={styles.img}><Image src={Dell2} alt=""/></div>
                    <h1>Dell Optical Mouse-MS116-Black</h1>
                    <InputGroup>
                      <p>$19.00</p>
                      <Image src={iconStar} alt=""/>
                      <Image src={iconStar} alt=""/>
                      <Image src={iconStar} alt=""/>
                      <Image src={iconStar} alt=""/>
                      <Image src={iconStar} alt="" className={styles.imgEnd}/>
                    </InputGroup>
                    <Button>Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div  className={styles.iconSlider}>
                <Card className={styles.card}>
                  <Card.Body className={styles.cardBody}>
                    <div className={styles.img}><Image src={Dell3} alt=""/></div>
                    <h1>Dell Optical Mouse-MS116-Black</h1>
                    <InputGroup>
                      <p>$19.00</p>
                      <Image src={iconStar} alt=""/>
                      <Image src={iconStar} alt=""/>
                      <Image src={iconStar} alt=""/>
                      <Image src={iconStar} alt=""/>
                      <Image src={iconStar} alt="" className={styles.imgEnd}/>
                    </InputGroup>
                    <Button>Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div  className={styles.iconSlider}>
                <Card className={styles.card}>
                  <Card.Body className={styles.cardBody}>
                    <div className={styles.img}><Image src={Dell4} alt=""/></div>
                    <h1>Dell Optical Mouse-MS116-Black</h1>
                    <InputGroup>
                      <p>$19.00</p>
                      <Image src={iconStar} alt=""/>
                      <Image src={iconStar} alt=""/>
                      <Image src={iconStar} alt=""/>
                      <Image src={iconStar} alt=""/>
                      <Image src={iconStar} alt="" className={styles.imgEnd}/>
                    </InputGroup>
                    <Button>Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}