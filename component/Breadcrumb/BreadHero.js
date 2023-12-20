import Link from 'next/link'
import React from 'react'
import Container from 'react-bootstrap/Container'
import styles from "./bread.module.css"

export default function BreadHero({ heading, currentPage, AirplaneBg, pathBetween, blogHeading }) {

    return (
        <div className={`d-flex ${styles.breadcrumbSite} ${AirplaneBg ? styles.airplane : ''}`}>
            <Container className='m-auto'>
                {blogHeading ?
                    (<span className={styles.heading}>{heading}</span>)
                    :
                    (<h1>{heading}</h1>)
                }

                <ul>

                    <li><Link href="/"><a>Home</a></Link></li>
                    <li className={styles.mxSpace}><img src='/images/keyboard-arrow-right.png' alt='keyboard-arrow-right' /></li>

                    {pathBetween && pathBetween.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <li><Link href={item.url}><a>{item.title}</a></Link></li>
                                <li className={styles.mxSpace}><img src='/images/keyboard-arrow-right.png' alt='keyboard-arrow-right' /></li>
                            </React.Fragment>
                        )
                    })}

                    <li>{currentPage}</li>
                </ul>
            </Container>
        </div>
    )
}
