import styles from 'styles/home/section.module.scss'
import Image from 'next/image'
import {Card, Button } from 'react-bootstrap';

import All from "assets/imgs/Rectangle 3.png"
import laptop from "assets/imgs/bethemestore2-slider-pic1 2.png"
export default function Section() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Card className={styles.all}>
            <Image src={All} className={styles.imgAll} alt=""/>
            <div className={styles.iconAll}></div>
            <Image src={laptop} className={styles.laptopAll} alt=""/>
            <Card.Body className={styles.cardBody}>
              <h2>Great Deals</h2>
              <h1>All in one place</h1>
              <p>New design, luxurious and elegant.</p>
              <Button>Shop Now</Button>
            </Card.Body>
          </Card>
          <div className={styles.groupCard}>
            <Card className={styles.Gaming}>
              <Card.Body className={styles.cardBody}>
                <h2>Gaming Solutions</h2>
                <Button>Shop Now</Button>
              </Card.Body>
            </Card>
            <Card className={styles.Gaming + (" ") + styles.Shape}>
              <Card.Body className={styles.cardBody}>
                <h2>Shape Your Dream</h2>
                <Button>Shop Now</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}