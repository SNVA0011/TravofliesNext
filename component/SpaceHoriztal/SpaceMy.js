import Link from 'next/link'
import React, { Children } from 'react'
import Container from 'react-bootstrap/Container'
import styles from "./common.module.css"

export default function SpaceMy({children, bottomSpczero, bgYellow}) { 
    return (
        <section className={`${styles.spaceTopbottom} ${bottomSpczero ? 'pb-0': ''} ${bgYellow ? styles.bgYellow : ''} `}>
            <Container className={bottomSpczero ? 'px-0' : ''}>
                {children}
            </Container>
        </section>
    )
}
