import React from 'react'
import Container from 'react-bootstrap/Container'
import styles from "./achieve.module.css"
import { Col, Row } from 'react-bootstrap'

import dynamic from 'next/dynamic'
const AnimatedNumbers = dynamic(
    () => import('react-animated-numbers'),
    { ssr: false }
)


export default function AchieveBx({ title, Achievements }) {

    return (
        <>
            {/* Achievements */}
            {Achievements?.length > 0 && <div className={`${styles.AchievementsBx}`}>
                <Container className={styles.AchievContainer}>
                    <Row className={styles.AchievementRow}>
                        {Achievements.map((item, index) => {
                            const AddPlus = index === 0 ? '' : '+'
                            return (
                                <Col xs={6} lg={3} key={index} className={styles.AchievementsBox}>
                                    <h5> 
                                        <span className='d-inline-block'>
                                            <AnimatedNumbers
                                                includeComma
                                                animateToNumber={item.number}
                                                configs={[
                                                    { mass: 1, tension: 220, friction: 100 + 10 + index },
                                                    { mass: 1, tension: 180, friction: 130 + 10 + index },
                                                    { mass: 1, tension: 280, friction: 90 + 10 + index },
                                                    { mass: 1, tension: 180, friction: 135 + 10 + index },
                                                    { mass: 1, tension: 260, friction: 100 + 10 + index },
                                                    { mass: 1, tension: 210, friction: 180 + 10 + index },
                                                ]}
                                            ></AnimatedNumbers>
                                        </span> {AddPlus}</h5> 
                                    <p>{item.content}</p>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>}

        </>
    )
}
