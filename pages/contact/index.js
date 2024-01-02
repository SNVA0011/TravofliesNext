import React, { useEffect } from 'react'
import PageHead from '../../component/PageHead'
import BreadHero from '../../component/Breadcrumb/BreadHero'
import PageHeading from '../../component/HeadingStyle/PageHeading'
import SpaceMy from '../../component/SpaceHoriztal/SpaceMy'
import { Col, Row } from 'react-bootstrap'
import styles from "./contact.module.css"
import TimelineStep from '../../component/StepTimeline/TimelineStep'
import ContactUsForm from '../../component/ContactUs/ContactUsForm'
import { PageStaicJson } from '../../static/StaticJson'


const Contact = () => {

    const FooterUrl = PageStaicJson('footer');

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

                            <TimelineStep LinkArray={[
                                {
                                    'url': FooterUrl.ConnectWithUs.LinksUrl[0].url,
                                    'icon': '/images/email-icn.png',
                                    'iconImg': true,
                                    'heading': 'Email Address',
                                    'content': FooterUrl.ConnectWithUs.LinksUrl[0].title,
                                },
                                {
                                    'url': FooterUrl.ConnectWithUs.LinksUrl[1].url,
                                    'icon': '/images/phone-icn.png',
                                    'iconImg': true,
                                    'heading': 'Phone Number',
                                    'content': FooterUrl.ConnectWithUs.LinksUrl[1].title,
                                },
                            ]}  />
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







