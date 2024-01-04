import Link from 'next/link'
import React from 'react'
import Container from 'react-bootstrap/Container'
import styles from "./bread.module.css"
import Image from 'next/image'

export default function BreadHero({ heading, currentPage, AirplaneBg, pathBetween, blogHeading }) {

    return (
        <div className={`d-flex ${styles.breadcrumbSite} ${AirplaneBg ? styles.airplane : ''}`}>  
            <Container className={`m-auto ${styles.CvContainer}`}>
                {blogHeading ?
                    (<span className={styles.heading}>{heading}</span>)
                    :
                    (<h1>{heading}</h1>)
                }

                <ul>

                    <li><Link href="/"><a>Home</a></Link></li>
                    <li className={styles.mxSpace}>
                        <span className={styles.mxSpaceIcon}><Image src='/images/keyboard-arrow-right.png' alt='keyboard-arrow-right'
                        width={8}
                        height={13} /></span>
                    </li>

                    {pathBetween && pathBetween.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <li><Link href={item.url}><a>{item.title}</a></Link></li>
                                <li className={styles.mxSpaceIcon}>
                                    <span className={styles.mxSpace}><Image src='/images/keyboard-arrow-right.png' alt='keyboard-arrow-right'
                                    width={8}
                                    height={13} /></span>
                                </li>
                            </React.Fragment>
                        )
                    })}

                    <li>{currentPage}</li>
                </ul>
            </Container>
        </div>
    )
}
