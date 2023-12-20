import React from "react"
import Link from "next/link"
import styles from './footer.module.css'
import { Col, Container, Row } from "react-bootstrap";
import { PageStaicJson } from "../../static/StaticJson";


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
                  <span className={styles.SubsNewsAddon}>
                    <img src="/images/user-ico.png" alt="user-icon" />
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
                  <img src="/images/travoflies-logo.png" alt="travoflies-logo" /><br></br>
                  <p>{Footer.Info}</p>
                </div>
              </Col>

              <Col xs={12} xl={7} className="mt-4 mt-xl-0">
                <Row>
                  <Col xs={6} md={6} lg={3} className={`${styles.ColFooter} ${styles.ColFooterRg}`}>
                    <div className={styles.Quicklink}>
                      <h5>{Footer.QuickLinks.heading}</h5>
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
                      <h5>{Footer.OurServices.heading}</h5>
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

                      <h5>{Footer.ConnectWithUs.heading}</h5>
                      {Footer?.ConnectWithUs?.LinksUrl?.length > 0 &&
                        <ul>
                          {
                            Footer?.ConnectWithUs?.LinksUrl.map((item, index) => {
                              return (
                                <li key={index}>
                                  <Link href={item.url}><a className="d-flex" target="_blank"><span><img src={`/images/${item.icon}`} alt={item.title} /></span> {item.title} </a></Link>
                                </li>
                              )
                            })
                          }
                        </ul>
                      }


                      {Footer?.ConnectWithUs?.Social?.length > 0 &&
                        <div className={styles.socialFooter}>
                          {
                            Footer?.ConnectWithUs?.Social.map((item, index) => {
                              return (
                                <Link href={item.url} key={index}>
                                  <a target="_blank" className="d-inline-flex flex-column align-items-center justify-content-center">
                                    <img src={`/images/${item.icon}`} alt={item.icon} /></a>
                                </Link>
                              )
                            })
                          }
                        </div>
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
