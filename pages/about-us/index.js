import React, { useEffect } from 'react'
import PageHead from '../../component/PageHead'
import BreadHero from '../../component/Breadcrumb/BreadHero'
import PageHeading from '../../component/HeadingStyle/PageHeading'
import SpaceMy from '../../component/SpaceHoriztal/SpaceMy'
import AchieveBx from '../../component/Achievements/AchieveBx';
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
                    <Col xs={12} lg={5} className={`${styles.OurStoryCenter} ${styles.OurStoryHidden}`}>
                        <div className={styles.OurStory}>
                            <img src='/images/ourstory.png' alt='About us' />
                        </div>
                    </Col>
                    <Col xs={12} lg={7} className={`mt-5 mt-lg-0 pl-lg-4 pl-xl-5 ${styles.OurStoryCenter}`}>
                        <PageHeading title={'About US'} />
                        <div className={styles.mtDescripInf}>
                            <p className={styles.DescripInf}>
                                Being one of the prominent travel agencies offering the best trip packages to travelers, Travoflies makes it easier to enjoy more and worry less about the travel plans made. At every step you take, towards your destination, we help provide the additional stride required to make the trip memories to be everlasting. We ensure to specially cater to and make modifications under the demands that you have.
                            </p>
                            <p className={styles.DescripInf}>
                                The main precept of Travoflies is to furnish travelers with a wide range of choices to pick from varied destinations around the world. As part of the same, we offer jaw-dropping deals and expert guidance for all travel destinations worldwide. Our team of highly skilled travel experts always finds the best deals and offers on flights without hampering your budget.
                            </p>
                        </div>

                    </Col>


                    <Col xs={12} lg={5}>
                        <div className='text-left mt-4 pt-2'>
                            <TimelineStep AboutPage={true}
                                ContentArray={[
                                    {
                                        'icon': '1',
                                        'iconImg': false,
                                        'heading': 'Our Vision:',
                                        'content': 'We envision exceeding the expectations that you have for us and gifting you with endless memories basketed under the travels taken. With this aim, our company lies in the central point of being the best online travel agency, getting recognized for professionalism and affordability. ',
                                        'type': ''
                                    },
                                    {
                                        'icon': '2',
                                        'iconImg': false,
                                        'heading': 'Our Values:',
                                        'content': 'Our core values lie in being a creator, innovator, and leader in the landscape drawn via travel, making us efficient and effective in holding to our virtues and delivering the best possible. ',
                                        'type': ''
                                    },
                                    {
                                        'icon': '3',
                                        'iconImg': false,
                                        'heading': 'Our Story:',
                                        'content': 'With millions of users around the world, we weave our stories around the travel satisfaction you achieve and the unrequited love we get back for the service we give. ',
                                        'type': ''
                                    },
                                ]} />
                        </div>
                    </Col>


                   <Col xs={12} lg={7} className='pl-lg-4 pl-xl-5'>
                        <h4 className={styles.ServiceOff}>Services offered by us:</h4>
                        <p className={styles.DescripInf}>
                            Travoflies works to create a seamless travel experience. As part of the same, there are varied services that get extended by them, which are as stated here:
                        </p>

                        <Row className={`${styles.DescripInf} ${styles.DescripInfImg}`}>
                            <Col xs={12} sm={6} className={`mb-3 ${styles.DescripInfImgMb}`}>
                                <div className={`d-flex align-items-start flex-column align-items-start justify-content-start ${styles.ColRoundBx}`}>
                                   <div className='d-flex align-items-start my-auto'> <img src='/images/correct-tic.png' alt='tic' /> Trustworthy expert guidance with 24/7 availability.</div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className={`mb-3 ${styles.DescripInfImgMb}`}>
                                <div className={`d-flex align-items-start flex-column align-items-start justify-content-start ${styles.ColRoundBx}`}>
                                   <div className='d-flex align-items-start my-auto'> <img src='/images/correct-tic.png' alt='tic' /> Multi-city itinerary selection and reservations.</div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className={`mb-3 ${styles.DescripInfImgMb}`}>
                                <div className={`d-flex align-items-start flex-column align-items-start justify-content-start ${styles.ColRoundBx}`}>
                                    <div className='d-flex align-items-start my-auto'><img src='/images/correct-tic.png' alt='tic' /> Budget-friendly deals and discounts.</div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className={`mb-3 ${styles.DescripInfImgMb}`}>
                                <div className={`d-flex align-items-start flex-column align-items-start justify-content-start ${styles.ColRoundBx}`}>
                                   <div className='d-flex align-items-start my-auto'> <img src='/images/correct-tic.png' alt='tic' /> Customization of the travel package chosen.</div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className={`mb-3 ${styles.DescripInfImgMb}`}>
                                <div className={`d-flex align-items-start flex-column align-items-start justify-content-start ${styles.ColRoundBx}`}>
                                   <div className='d-flex align-items-start my-auto'> <img src='/images/correct-tic.png' alt='tic' /> Upgrades, flight changes, and cancellations are necessary.</div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className={`mb-3 ${styles.DescripInfImgMb}`}>
                                <div className={`d-flex align-items-start flex-column align-items-start justify-content-start ${styles.ColRoundBx}`}>
                                    <div className='d-flex align-items-start my-auto'><img src='/images/correct-tic.png' alt='tic' /> A specific team is available to take up Special assistance requested.</div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className={`mb-3 ${styles.DescripInfImgMb}`}>
                                <div className={`d-flex align-items-start flex-column align-items-start justify-content-start ${styles.ColRoundBx}`}>
                                    <div className='d-flex align-items-start my-auto'><img src='/images/correct-tic.png' alt='tic' /> Easy group booking process and offers on it.</div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
 

                </Row>
            </SpaceMy>


            {/*---- Why Choose Us ----*/}
            <AchieveBx Achievements={[
                {
                    'number': 89,
                    'content': 'Total Destination'
                },
                {
                    'number': 1190,
                    'content': 'Flight Booking'
                },
                {
                    'number': 3000,
                    'content': 'Happy People'
                },
                {
                    'number': 1000,
                    'content': 'Hotel Reservation'
                },
            ]} />


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
                                        'heading': 'Instant booking',
                                        'content': 'We offer easy and hassle-free reservations to travelers worldwide, just a single click away. ',
                                        'type': ''
                                    },
                                    {
                                        'icon': '/images/arcticons-priceco-wchs.png',
                                        'iconImg': true,
                                        'heading': 'Affordable prices',
                                        'content': 'The tailor-made plans, designed with exclusivity, are well within the budget goals set by you for the entire trip. ',
                                        'type': ''
                                    },
                                    {
                                        'icon': '/images/twotone_people-safe-wchs.png',
                                        'iconImg': true,
                                        'heading': 'Highly experienced staff',
                                        'content': 'Roam around worldwide, trouble-free under expert guidance stationed across various locations, easily accessible. ',
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
                                        'icon': '/images/transparency-fl.png',
                                        'iconImg': true,
                                        'heading': 'Transparency',
                                        'content': 'There is clear translucency in the offers, deals, and discounts we offer. We make sure to give minuscule details of the travel to get shared with you. ',
                                        'type': ''
                                    },
                                    {
                                        'icon': '/images/customer-service.png',
                                        'iconImg': true,
                                        'heading': '24/7 customer service',
                                        'content': 'The adept team of professionals working with us is available for support at all times, under the 24/7 flexibility offered. ',
                                        'type': ''
                                    },
                                    {
                                        'icon': '/images/thumbs-up.png',
                                        'iconImg': true,
                                        'heading': '100% customer satisfaction',
                                        'content': 'The unrequired support and service that we bestow ensure that there is 100% customer satisfaction in all the domains where we provide our services. ',
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







