import styles from 'styles/home/taking.module.scss'
import Image from 'next/image'
import {Card, Row, Col } from 'react-bootstrap';

import Shipping from "assets/imgs/Vector (6).png"
import Returns from "assets/imgs/Group.png"
import Support from "assets/imgs/Group (1).png"
import Payment from "assets/imgs/Group (2).png"
export default function Taking() {
  return (
    <div className={styles.taking}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Row>
            <Col xl={6}>
              <h1>Taking the pain out of finding the right technology</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book.
              </p>
            </Col>
            <Col xl={6}>
              <Row>
                <Col sm={6}>
                  <Card className={styles.card}>
                    <Image src={Shipping} alt=""/>
                    <h2>Free Shipping</h2>
                    <h3>On all orders over $75.00</h3>
                  </Card>
                </Col>
                <Col sm={6}>
                  <Card className={styles.card}>
                    <Image src={Returns} alt=""/>
                    <h2>Free Returns</h2>
                    <h3>Returns are free within 9 days</h3>
                  </Card>
                </Col>
                <Col sm={6}>
                  <Card className={styles.card}>
                    <Image src={Support} alt=""/>
                    <h2>Support 24/7</h2>
                    <h3>Contact us 24 hours a day</h3>
                  </Card>
                </Col>
                <Col sm={6}>
                  <Card className={styles.card}>
                    <Image src={Payment} alt=""/>
                    <h2>100% Payment Secure</h2>
                    <h3>Your payment are safe with us</h3>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}