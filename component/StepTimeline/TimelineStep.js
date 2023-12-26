import React, { useEffect } from 'react'
import styles from "./common.module.css"
import Link from 'next/link'

export default function TimelineStep({ LinkArray, ContentArray, whyChooseList, AboutPage }) {

    return (
        <ul className={styles.StepRound}>


            {LinkArray?.length > 0 && LinkArray.map((item, index) => {
                return (
                    <li className={styles.FlexListRow} key={index}>
                        <Link href={item.url}>
                            <a className={`d-flex`} target='_blank'>
                                <div className={`${styles.iconRound} d-inline-flex flex-column align-items-center justify-content-center`}>
                                    {item.iconImg ? <img src={item.icon} alt={item.heading} /> : item.icon}
                                </div>
                                <div className={`${styles.FlexGrow} flex-grow-1`}>
                                    <h5 className={styles.StepTitle}>{item.heading}</h5>
                                    <div className={styles.StepUrl}>
                                        {item.content}
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </li>
                )
            })}

            {ContentArray?.length > 0 && ContentArray.map((item, index) => {
                return (
                    <li className={styles.FlexListRow} key={index}>
                        <div className={`d-flex`}>
                            <div className={`${styles.iconRound} ${whyChooseList ? styles.whyChooseList : ''} ${AboutPage ? styles.AboutPage : ''} d-inline-flex flex-column align-items-center justify-content-center`}>
                                {item.iconImg ? <img src={item.icon} alt={item.heading} /> : item.icon}
                            </div>
                            <div className={`${styles.FlexGrow} flex-grow-1`}>
                                <h5 className={styles.StepTitle}>{item.heading}</h5>
                                {item.type === 'lg' ?
                                    (<div className={styles.StepTextOne}>
                                        {item.content}
                                    </div>)
                                    :
                                    (<div className={styles.StepTextTwo}>
                                        {item.content}
                                    </div>)
                                } 
                            </div>
                        </div>
                    </li>
                )
            })}

        </ul>
    )
}
