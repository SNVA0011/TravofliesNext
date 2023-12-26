import React, { useEffect } from 'react'
import PageHead from '../../component/PageHead'
import BreadHero from '../../component/Breadcrumb/BreadHero'
import PageHeading from '../../component/HeadingStyle/PageHeading'
import SpaceMy from '../../component/SpaceHoriztal/SpaceMy'
import { Col, Row } from 'react-bootstrap'
import styles from "./contact.module.css"
import TimelineStep from '../../component/StepTimeline/TimelineStep'
import ContactUsForm from '../../component/ContactUs/ContactUsForm'


const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <PageHead
                title="Contact | Travoflies.com"
                description=""
                keywords=""
            />

            <BreadHero
                heading="Contact-Us"
                currentPage="Contact Us"
            />


            <SpaceMy>
                <Row>
                    <Col xs={12} lg={5}>
                        <PageHeading title={'Contact Us'} />

                        <div className={styles.mtDescripInf}>
                            <p className={styles.DescripInf}>
                                Lorem ipsum dolor sit amet consectetur. Ullamcorper malesuada vel et id nulla neque tincidunt tortor. Nulla nec vitae quisque eget amet faucibus eget penatibus ipsum
                            </p>

                            <TimelineStep LinkArray={[
                                {
                                    'url': `mailto:support@travoflies.com`,
                                    'icon': '/images/email-icn.png',
                                    'iconImg': true,
                                    'heading': 'Email Address',
                                    'content': 'Support@travoflies.com',
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
                        </div>

                    </Col>
                    <Col xs={12} lg={7} className='mt-5 mt-lg-0'>
                        <ContactUsForm />
                    </Col>
                </Row>
            </SpaceMy>
        </>
    )
}

export default Contact







