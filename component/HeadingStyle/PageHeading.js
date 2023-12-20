import React from 'react'
import styles from './heading.module.css'

const PageHeading = ({title}) => {
    return (
        <h4 className={styles.sectionbxTitle}>
            <span className='d-block'>
                {title}
            </span>
            <img src='/images/lineyellow.png' alt='line-yellow' />
        </h4>
    )
}

export default PageHeading