import React from "react"
import Link from "next/link"
import styles from './footer.module.css'
import { Col, Container, Row } from "react-bootstrap";
import { PageStaicJson } from "../../static/StaticJson";
import Image from "next/image";


export default function Footer() {

  const Footer = PageStaicJson('footer');

  return (
    <>
      <footer className={styles.siteFooter}>
        <Container className={styles.ContNewsletter}>
          <Row className="align-items-center">
            <Col xs={12} md={7}>
              <h4>{Footer.Newsletter.SpecialOff}</h4>
            </Col>
            <Col xs={12} md={5}>
              <div className={`input-group  d-flex align-items-center ${styles.SubsNewsletter}`}>
                <div className={`flex-grow-1 d-flex align-items-center ${styles.SubsNewsFlex}`}>
                  <span className={`d-inline-flex ${styles.SubsNewsAddon}`}>
                    <Image src="/images/user-ico.png" alt="user-icon" width={21}
                      height={21} />
                  </span>
                  <input type="text" className={`form-control ${styles.Subsgt}`} placeholder={Footer.Newsletter.Placeholder} />
                </div>
                <div className={styles.SubsNewsAppend}>
                  <button className={`btn btn-secondary ${styles.Btn}`} type="button">{Footer.Newsletter.BtnText}</button>
                </div>
              </div>

            </Col>
          </Row>
        </Container>
        <Container className={styles.ContInfoLinks}>
          <div className={styles.whilePlan}>
            <Row>
              <Col xs={12} xl={5}>
                <div className={styles.desCription}>
                  <Link href={Footer.HomeEng}>
                    <a className={styles.desCriptionLogo}>
                      <Image src="/images/travoflies-logo.png" alt="travoflies-logo" width={165}
                        height={32} />
                    </a>
                  </Link>
                  <br></br>
                  <p>{Footer.Info}</p>
                </div>
              </Col>

              <Col xs={12} xl={7} className="mt-4 mt-xl-0">
                <Row>
                  <Col xs={6} md={6} lg={3} className={`${styles.ColFooter} ${styles.ColFooterRg}`}>
                    <div className={styles.Quicklink}>
                      <p>{Footer.QuickLinks.heading}</p>
                      {Footer?.QuickLinks?.LinksUrl?.length > 0 &&
                        <ul>
                          {
                            Footer?.QuickLinks?.LinksUrl.map((item, index) => {
                              return (
                                <li key={index}><Link href={item.url}><a>{item.title}</a></Link></li>
                              )
                            })
                          }
                        </ul>
                      }
                    </div>
                  </Col>
                  <Col xs={6} md={6} lg={3} className={`${styles.ColFooter} ${styles.ColFooterLf}`}>
                    <div className={styles.Quicklink}>
                      <p>{Footer.OurServices.heading}</p>
                      {Footer?.OurServices?.LinksUrl?.length > 0 &&
                        <ul>
                          {
                            Footer?.OurServices?.LinksUrl.map((item, index) => {
                              return (
                                <li key={index}><Link href={item.url}><a>{item.title}</a></Link></li>
                              )
                            })
                          }
                        </ul>
                      }
                    </div>
                  </Col>
                  <Col xs={12} lg={6}>
                    <div className={styles.Quicklink}>

                      <p>{Footer.ConnectWithUs.heading}</p>
                      {Footer?.ConnectWithUs?.LinksUrl?.length > 0 &&
                        <ul>
                          {
                            Footer?.ConnectWithUs?.LinksUrl.map((item, index) => {
                              return (
                                <li key={index}>
                                  <Link href={item.url}><a className="d-flex"><span className={styles.QuicklinkImg}><Image width={18} height={18} src={`/images/${item.icon}`} alt={item.icon?.replaceAll('.png', '')} /></span> {item.title} </a></Link>
                                </li>
                              )
                            })
                          }
                        </ul>
                      }
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
        <Container className={styles.ContCopyright}>
          {Footer.Copyright}
        </Container>
      </footer>

    </>
  );
}
