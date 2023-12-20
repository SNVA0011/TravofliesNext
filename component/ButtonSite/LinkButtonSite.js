import Link from 'next/link'
import React, { Children } from 'react'
import Container from 'react-bootstrap/Container'
import styles from "./common.module.css"

export default function LinkButtonSite({ children, path}) {
    return (
        <Link href={`/${path}`}>
            <a className={`btn ${styles.ButtonGreen}`}>
                {children}
            </a>
        </Link>
    )
}

