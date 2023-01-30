import styles from 'styles/home/header.module.scss'
import Image from 'next/image'
import { InputGroup, Form, Stack, Nav, Dropdown } from 'react-bootstrap';
import { useRouter } from 'next/router'

import Logo from "assets/imgs/item_132930835998121387_img_Logo 1.png"
import Call from "assets/imgs/Vector.png"
import Search from "assets/imgs/ri_search-line.png"
import Reorder from "assets/imgs/Vector (1).png"
import Sign from "assets/imgs/iconoir_user.png"
import Buy from "assets/imgs/Vector (2).png"
export default function Header() {
  const buy = 1;
  const router = useRouter()

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Stack direction="horizontal" className={styles.headerTop}>
          <div className={styles.logo} onClick={() => router.push('/')}><Image src={Logo} alt="" /></div>
          <InputGroup className={styles.call}>
            <div className={styles.callImg}><Image src={Call} alt="" /></div>
            <div className={styles.callContent}>
              <p>Call Us At</p>
              <h5>858-935-4642</h5>
            </div>
          </InputGroup>
          <div className={styles.search}>
            <Form.Control
              placeholder="Search for Products, brands & more"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <div className={styles.img}><Image src={Search} alt="" /></div>
          </div>
          <InputGroup className={styles.reorder}>
            <div className={styles.callImg}><Image src={Reorder} alt="" /></div>
            <div className={styles.callContent}>
              <p>Reorder</p>
              <h5>My Items</h5>
            </div>
          </InputGroup>
          <InputGroup className={styles.sign} onClick={() => router.push('/sign_in')}>
            <div className={styles.callImg}><Image src={Sign} alt="" /></div>
            <div className={styles.callContent}>
              <p>Sign In</p>
              <h5>Account</h5>
            </div>
          </InputGroup>
          <div className={styles.buy}>
            <Image src={Buy} alt="" /> <span className={styles.spanBuy}>{buy}</span>
          </div>

          <div className={styles.menu}>
            <Dropdown className={styles.dropdown}>
              <Dropdown.Toggle id="ab">
                <div className={styles.title}>
                  <hr />
                  <hr />
                  <hr />
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className={styles.content}>
                <Dropdown.Item onClick={() => router.push('/')}>Home</Dropdown.Item>
                <Dropdown.Item onClick={() => router.push('/accessories')}>Accessories</Dropdown.Item>
                <Dropdown.Item onClick={() => router.push('/computer_system')}>Computer System</Dropdown.Item>
                <Dropdown.Item onClick={() => router.push('/gaming_solution')}>Gaming Solution</Dropdown.Item>
                <Dropdown.Item onClick={() => router.push('/monitor')}>Monitor</Dropdown.Item>
                <Dropdown.Item onClick={() => router.push('/printer')}>Printer</Dropdown.Item> 
                <Dropdown.Item onClick={() => router.push('/all_bundles')}>All Bundles</Dropdown.Item> 
                <Dropdown.Item >
                  Reorder My Items
                </Dropdown.Item> 
                <Dropdown.Item >
                  Sign In Account  
                </Dropdown.Item> 
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Stack>
      </div>
      <hr className={styles.hrMid}/>
      <div className={styles.container}>
        <Nav
          className={styles.headerTop + " " + styles.headerBottom}
          activeKey="/"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link onClick={() => router.push('/')}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => router.push('/accessories')}>Accessories</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => router.push('/computer_system')}>Computer System</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => router.push('/gaming_solution')}>Gaming Solution</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => router.push('/monitor')}>Monitor</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => router.push('/printer')}>Printer</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => router.push('/all_bundles')}>All Bundles</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  )
}