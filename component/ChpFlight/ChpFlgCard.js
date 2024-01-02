import Link from 'next/link'
import React from 'react'
import styles from "./cheap-flight.module.css"
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'

export default function ChpFlgCard({ flightslist, path, showitem = flightslist?.length }) {
    return (
        <Row className={styles.chpRow}>
            {flightslist && flightslist.slice(0, showitem).map((item, index) => {
                return (
                    <Col xs={12} sm={6} lg={4} className={styles?.colUpdate} key={index}>
                        <Link href={`/${path}/${item.url}`}>
                            <a className={`d-flex align-items-center ${styles.chpButton}`}>
                                <span className={styles?.colUpdateChp}>
                                    <Image src='/images/chp-icon.png' alt='chp-ico' width={30}
                                        height={30} />
                                </span>
                                <span className={`${styles.chpSpaceleft} flex-grow-1`}>
                                    {item.heading}
                                </span>
                            </a>
                        </Link>
                    </Col>
                )
            })
            }
        </Row>
    )
}
