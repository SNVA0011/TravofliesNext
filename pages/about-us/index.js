import React, { useEffect } from 'react'
import PageHead from '../../component/PageHead'
import BreadHero from '../../component/Breadcrumb/BreadHero'
import PageHeading from '../../component/HeadingStyle/PageHeading'
import SpaceMy from '../../component/SpaceHoriztal/SpaceMy'
import { Col, Row } from 'react-bootstrap'
import TimelineStep from '../../component/StepTimeline/TimelineStep'
import styles from "./about.module.css"


const Aboutus = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <PageHead
                title="Travoflies - Online Travel Agency | Get Best Airfare Deals"
                description="Travoflies is an online travel agency. It offers amazing cheap flight deals to the passengers. Book your plane tickets with Travoflies to get amazing offers."
                keywords=""
            />

            <BreadHero
                heading="About-Us"
                currentPage="About us"
            />


            {/*---- About US ----*/}
            <SpaceMy>
                <Row className='align-items-xl-center'>
                    <Col xs={12} lg={5} xl={6} className={`${styles.OurStoryCenter} ${styles.OurStoryHidden}`}>
                        <div className={styles.OurStory}>
                            <img src='/images/ourstory.png' alt='About us' />
                        </div>
                    </Col>
                    <Col xs={12} lg={7} xl={6} className={`mt-5 mt-lg-0 ${styles.OurStoryCenter}`}>
                        <PageHeading title={'About US'} /> 
                        <div className={styles.mtDescripInf}>
                            <p className={styles.DescripInf}>
                            Lorem ipsum dolor sit amet consectetur. Nisi ut massa id dignissim ullamcorper maecenas massa. Phasellus mi egestas egestas sit. Mi lacus lacus arcu interdum tristique proin. Fringilla suscipit risus elit vehicula. Vestibulum id sit sed nisl leo volutpat viverra. Proin in quam faucibus eget ut elementum. Aliquam nisl ipsum elementum massa imperdiet in viverra sollicitudin tellus. Viverra sed ridiculus dolor sit cursus a pellentesque commodo.
</p>
                            <div className='text-left'>
                                <TimelineStep AboutPage={true}
                                    ContentArray={[
                                        {
                                            'icon': '1',
                                            'iconImg': false,
                                            'heading': 'Why choose us?',
                                            'content': 'Lorem ipsum dolor sit amet consectetur. Eget nulla nisi feugiat a imperdiet tristique curabitur ac morbi.',
                                            'type': ''
                                        },
                                        {
                                            'icon': '2',
                                            'iconImg': false,
                                            'heading': 'Our story',
                                            'content': 'Lorem ipsum dolor sit amet consectetur. Eget nulla nisi feugiat a imperdiet tristique curabitur ac morbi.',
                                            'type': ''
                                        },
                                        {
                                            'icon': '3',
                                            'iconImg': false,
                                            'heading': 'Our values',
                                            'content': 'Lorem ipsum dolor sit amet consectetur. Eget nulla nisi feugiat a imperdiet tristique curabitur ac morbi.',
                                            'type': ''
                                        },
                                    ]} />
                            </div>
                        </div>

                    </Col>

                </Row>
            </SpaceMy>



            {/*---- Why Choose Us ----*/}
            <SpaceMy bgWhiteChoose={true}>
                <div className='text-center'>
                    <PageHeading title={'Why Choose Us'} />
                </div>
                <div className='mt-58'>
                    <Row className='align-items-lg-center flex-row-reverse'>
                        <Col xs={12} sm={5} md={4} xl={6} className={`text-center`}>
                            <img src='/images/routed-about.png' alt='Why Choose Us' />
                        </Col>
                        <Col xs={12} sm={7} md={8} xl={6} className={`mt-4 mt-sm-0 ${styles.OurStoryCenter}`}>
                            <div className='text-left'>
                                <TimelineStep AboutPage={true} whyChooseList={true} ContentArray={[
                                    {
                                        'icon': '/images/confirm-circlei-wchs.png',
                                        'iconImg': true,
                                        'heading': 'Instant booking.',
                                        'content': 'Lorem ipsum dolor sit amet consectetur. Eget nulla nisi feugiat a imperdiet tristique curabitur ac morbi.',
                                        'type': ''
                                    },
                                    {
                                        'icon': '/images/arcticons-priceco-wchs.png',
                                        'iconImg': true,
                                        'heading': 'Affordable prices',
                                        'content': 'Lorem ipsum dolor sit amet consectetur. Eget nulla nisi feugiat a imperdiet tristique curabitur ac morbi.',
                                        'type': ''
                                    },
                                    {
                                        'icon': '/images/twotone_people-safe-wchs.png',
                                        'iconImg': true,
                                        'heading': 'Highly experienced staff.',
                                        'content': 'Lorem ipsum dolor sit amet consectetur. Eget nulla nisi feugiat a imperdiet tristique curabitur ac morbi.',
                                        'type': ''
                                    },
                                ]} />
                            </div>
                        </Col>
                    </Row>

                    <Row className='align-items-lg-center mt-58 pt-4 pt-md-0'>
                        <Col xs={12} sm={5} md={4} xl={6} className={`text-center`}>
                            <img src='/images/location-about.png' alt='Why Choose Us' />
                        </Col>
                        <Col xs={12} sm={7} md={8} xl={6} className={`mt-4 mt-sm-0 ${styles.OurStoryCenter}`}>
                            <div className='text-left'>
                                <TimelineStep AboutPage={true} whyChooseList={true} ContentArray={[
                                    {
                                        'icon': '/images/confirm-circlei-wchs.png',
                                        'iconImg': true,
                                        'heading': 'Instant booking.',
                                        'content': 'Lorem ipsum dolor sit amet consectetur. Eget nulla nisi feugiat a imperdiet tristique curabitur ac morbi.',
                                        'type': ''
                                    },
                                    {
                                        'icon': '/images/arcticons-priceco-wchs.png',
                                        'iconImg': true,
                                        'heading': 'Affordable prices',
                                        'content': 'Lorem ipsum dolor sit amet consectetur. Eget nulla nisi feugiat a imperdiet tristique curabitur ac morbi.',
                                        'type': ''
                                    },
                                    {
                                        'icon': '/images/twotone_people-safe-wchs.png',
                                        'iconImg': true,
                                        'heading': 'Highly experienced staff.',
                                        'content': 'Lorem ipsum dolor sit amet consectetur. Eget nulla nisi feugiat a imperdiet tristique curabitur ac morbi.',
                                        'type': ''
                                    },
                                ]} />
                            </div>
                        </Col>

                    </Row>
                </div>
            </SpaceMy>
        </>
    )
}

export default Aboutus







