import Link from 'next/link'
import React from 'react'
import Container from 'react-bootstrap/Container'
import styles from "./service.module.css"
import SpaceMy from '../SpaceHoriztal/SpaceMy'
import PageHeading from '../HeadingStyle/PageHeading'
import { Col, Row } from 'react-bootstrap'

export default function OurServiceBx({ title, subtitle, Services }) {
    return (
        <>
            {/* Services */}
            {Services?.length > 0 && <div className={`${styles.OurServiceBx}`}>
                <SpaceMy bgYellow={true}>
                    <aside className="recent-blogsalide position-relative bx-2">
                        <div className="text-center">
                            <PageHeading title={title} subtitle={subtitle}/> 
                        </div>

                        <div className={`mt-58 pt-md-4`}>
                            <Row className={`justify-content-lg-center ${styles.ServicesRow}`}>
                                {Services.map((item, index) => {
                                    return (
                                        <Col xs={12} sm={6} lg={4} xl={3} key={index} className={styles.ServicesBox}>
                                            <h5>{item.title}</h5>
                                            <hr></hr>
                                            <p>{item.content}</p>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </aside>
                    <SpaceMy bottomSpczero={true}></SpaceMy>
                </SpaceMy>
            </div>} 
        </>
    )
}
