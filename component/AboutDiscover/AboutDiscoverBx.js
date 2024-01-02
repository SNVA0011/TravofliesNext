import React from 'react'
import styles from './common.module.css'
import SpaceMy from '../SpaceHoriztal/SpaceMy'
import { Col, Row } from 'react-bootstrap'
import PageHeading from '../HeadingStyle/PageHeading'
import LinkButtonSite from '../ButtonSite/LinkButtonSite'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const AnimatedNumbers = dynamic(
    () => import('react-animated-numbers'),
    { ssr: false }
)

const AboutDiscoverBx = ({ ThumbnailPath, Heading, ContentOne, ContentTwo, Discover, HappyCustomer }) => {
    return (
        <SpaceMy bgWhite={true}>
            <div className={styles.AboutDiscover}>
                <Row className='align-items-xl-center'>
                    <Col xs={12} lg={5} xl={6} className={`${styles.OurPlanCenter} ${styles.OurPlanHidden}`}>
                        <div className={styles.OurPlan}>
                            <Image src={ThumbnailPath} alt={Heading} width={503}
                                height={477} />
                        </div>
                    </Col>
                    <Col xs={12} lg={7} xl={6} className={`mt-5 mt-lg-0 ${styles.OurPlanCenter}`}>
                        <PageHeading title={Heading} />
                        <div className={styles.mtDescripInf}>
                            <p className={styles.DescripInf}>
                                {ContentOne}
                            </p>
                            <p className={styles.DescripInf}>
                                {ContentTwo}
                            </p>
                            <hr className={styles.OurPlanHr}></hr>
                            <Row className='align-items-center flex-row-reverse'>
                                <Col xs={12} sm={6} className={`text-sm-right ${styles.HappyCustomer}`}>
                                    <b>
                                        <span className='d-inline-block'>
                                            <AnimatedNumbers
                                                includeComma
                                                animateToNumber={HappyCustomer.number}
                                                configs={[
                                                    { mass: 1, tension: 220, friction: 100 },
                                                    { mass: 1, tension: 180, friction: 130 },
                                                    { mass: 1, tension: 280, friction: 90 },
                                                    { mass: 1, tension: 180, friction: 135 },
                                                    { mass: 1, tension: 260, friction: 100 },
                                                    { mass: 1, tension: 210, friction: 180 },
                                                ]}></AnimatedNumbers>
                                        </span>
                                        <span className='d-inline-block'>k</span></b> + {HappyCustomer.title}
                                </Col>
                                <Col xs={12} sm={6} className='text-sm-left mt-3 mt-sm-0'>
                                    <LinkButtonSite path={Discover.url}>
                                        {Discover.title}
                                    </LinkButtonSite>
                                </Col>
                            </Row>

                        </div>

                    </Col>

                </Row>
            </div>
        </SpaceMy>
    )
}

export default AboutDiscoverBx