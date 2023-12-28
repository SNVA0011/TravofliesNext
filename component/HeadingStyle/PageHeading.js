import React from 'react'
import styles from './heading.module.css'

const PageHeading = ({ title, subtitle = null }) => {
    return (
        <h4 className={`${styles.sectionbxTitle} ${subtitle ? 'text-center':''}`}>
            <span className='d-block'>
                {title}
            </span>
            {subtitle && <span className={`d-block ${styles.subtitleHead}`}>{subtitle}</span>}
            <img src='/images/lineyellow.png' alt='line-yellow' className={`${subtitle ? styles.subLineCenter :''}`} />
        </h4>
    )
}

export default PageHeading