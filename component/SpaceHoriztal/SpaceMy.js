import Link from 'next/link'
import React, { Children } from 'react'
import Container from 'react-bootstrap/Container'
import styles from "./common.module.css"

export default function SpaceMy({children, bottomSpczero, bgYellow, bgWhiteChoose, bgWhite}) { 
    return (
        <section className={`${styles.spaceTopbottom} ${bottomSpczero ? 'pb-0': ''} ${bgYellow ? styles.bgYellow : ''} ${bgWhiteChoose ? styles.bgWhiteChoose : ''} ${bgWhite ? styles.bgWhite : ''} `}>
            <Container className={`${bottomSpczero ? 'px-0' : ''} ${bgWhiteChoose ? styles.ContainerChoose : ''}`}>
                {children}
            </Container>
        </section>
    )
}
