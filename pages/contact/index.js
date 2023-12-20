import React, { useEffect } from 'react'
import PageHead from '../../component/PageHead'
import BreadHero from '../../component/Breadcrumb/BreadHero'
import PageHeading from '../../component/HeadingStyle/PageHeading'
import SpaceMy from '../../component/SpaceHoriztal/SpaceMy'
import { Col, Row } from 'react-bootstrap'
import styles from "./contact.module.css"
import TimelineStep from '../../component/StepTimeline/TimelineStep'


const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <PageHead
                title="Cheap Flight, Tickets, and Airfare Deals - Travoflies.com"
                description="Book a cheap flight on Travoflies.com to find amazing ticket deals to all your favorite destinations and save money. Get cheap airfare offers at the best prices."
                keywords="Cheap Flight, Tickets, Cheap Airfare Deals"
            />

            <BreadHero
                heading="Contact-Us"
                currentPage="Contact Us"
            />


            <SpaceMy>
                <PageHeading title={'Contact Us'} />

                <div className={styles.mtDescripInf}>
                    <Row>
                        <Col xs={12} md={5}>
                            <p className={styles.DescripInf}>Lorem ipsum dolor sit amet consectetur. Ullamcorper malesuada vel et id nulla neque tincidunt tortor. Nulla nec vitae quisque eget amet faucibus eget penatibus ipsum</p>

                            <TimelineStep LinkArray={[
                                {
                                    'url': `mailto:travoflies@gmail.com`,
                                    'icon': '/images/email-icn.png',
                                    'iconImg': true,
                                    'heading': 'Email Address',
                                    'content': 'Travoflies@gmail.com',
                                },
                                {
                                    'url': `tel:+91XXXXXXXXXX`,
                                    'icon': '/images/phone-icn.png',
                                    'iconImg': true,
                                    'heading': 'Phone Number',
                                    'content': '+91XXXXXXXXXX',
                                },
                            ]}
                                ContentArray={[
                                    {
                                        'icon': '/images/email-icn.png',
                                        'iconImg': true,
                                        'heading': 'Address',
                                        'content': 'Lorem ipsum dolor sit amet consectetur.',
                                        'type': 'lg'
                                    }
                                ]} />

                        </Col>
                        <Col xs={12} md={7}>
                            gfgf
                        </Col>
                    </Row>
                </div>
            </SpaceMy>
        </>
    )
}

export default Contact







