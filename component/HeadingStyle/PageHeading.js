import React from 'react'
import styles from './heading.module.css'
import Image from 'next/image'

const PageHeading = ({ title, subtitle = null }) => {
    return (
        <h4 className={`${styles.sectionbxTitle} ${subtitle ? 'text-center':''}`}>
            <span className='d-block'>
                {title}
            </span>
            {subtitle && <span className={`d-block ${styles.subtitleHead}`}>{subtitle}</span>}
            <span className={`${styles.sectionbxImg} ${subtitle ? styles.subLineCenter :''}`}><Image width={120} height={7} src='/images/lineyellow.png' alt='line-yellow' /></span>
        </h4>
    )
}

export default PageHeading