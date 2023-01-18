import styles from 'styles/home/browse.module.scss'
import Image from 'next/image'
import {Card, Col, Row } from 'react-bootstrap';
import { useRouter } from 'next/router'


import iconLeft from "assets/imgs/Vector (3).png"
import iconRight from "assets/imgs/Vector (4).png"
import Computer from "assets/imgs/image 2.png"
import gaming from "assets/imgs/image 1.png"
import monitor from "assets/imgs/image 3.png"
import printer from "assets/imgs/image 4.png"
import accessories from "assets/imgs/image 5.png"
import networking from "assets/imgs/image 6.png"

export default function BrowseCategories() {
  const router = useRouter()
  return (
    <div className={styles.browse}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Browse Categories</h1>
          <Row className={styles.groupCard}>
            <Col className={styles.col} xxl={2} md={4} sm={6} >
              <Card className={styles.Card} onClick={() => router.push('/computer_system')}>
                <div className={styles.background}>
                  <Image src={iconLeft} alt="" className={styles.iconLeft}/>
                  <Image src={iconRight} alt="" className={styles.iconRight}/>
                  <Image src={Computer} alt="Computer" className={styles.main}/>
                </div>
                <p className={styles.text}>Computer System</p>
              </Card>
            </Col>
            <Col className={styles.col} xxl={2} md={4} sm={6}>
              <Card className={styles.Card} onClick={() => router.push('/gaming_solution')}>
                <div className={styles.background}>
                  <Image src={iconLeft} alt="" className={styles.iconLeft}/>
                  <Image src={iconRight} alt="" className={styles.iconRight}/>
                  <Image src={gaming} alt="gaming" className={styles.gaming}/>
                </div>
                <p className={styles.text}>Gaming Solution</p>
              </Card>
            </Col>
            <Col className={styles.col} xxl={2} md={4} sm={6}>
              <Card className={styles.Card} onClick={() => router.push('/monitor')}>
                <div className={styles.background}>
                  <Image src={iconLeft} alt="" className={styles.iconLeft}/>
                  <Image src={iconRight} alt="" className={styles.iconRight}/>
                  <Image src={monitor} alt="monitor" className={styles.monitor}/>
                </div>
                <p className={styles.text}>Monitor</p>
              </Card>
            </Col>
            <Col className={styles.col} xxl={2} md={4} sm={6}>
              <Card className={styles.Card} onClick={() => router.push('/printer')}>
                <div className={styles.background}>
                  <Image src={iconLeft} alt="" className={styles.iconLeft}/>
                  <Image src={iconRight} alt="" className={styles.iconRight}/>
                  <Image src={printer} alt="printer" className={styles.printer}/>
                </div>
                <p className={styles.text}>Printer</p>
              </Card>
            </Col>
            <Col className={styles.col} xxl={2} md={4} sm={6}>
              <Card className={styles.Card} onClick={() => router.push('/accessories')}>
                <div className={styles.background}>
                  <Image src={iconLeft} alt="" className={styles.iconLeft}/>
                  <Image src={iconRight} alt="" className={styles.iconRight}/>
                  <Image src={accessories} alt="accessories" className={styles.accessories}/>
                </div>
                <p className={styles.text}>Accessories</p>
              </Card>
            </Col>
            <Col className={styles.col } xxl={2} md={4} sm={6}>
              <Card className={styles.Card + (" ") + styles.networkingCol}>
                <div className={styles.background}>
                  <Image src={iconLeft} alt="" className={styles.iconLeft}/>
                  <Image src={iconRight} alt="" className={styles.iconRight}/>
                  <Image src={networking} alt="networking" className={styles.networking}/>
                </div>
                <p className={styles.text}>Networking</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}