import React, { useEffect } from 'react'
import Link from "next/link"
import PageHead from '../PageHead'
import styles from "./common.module.css"
import LinkButtonSite from '../ButtonSite/LinkButtonSite'

export default function Pageerror({ metatitle, title, link, linktext }) {
  
    return (
        <div className={styles.PageError}>
            <PageHead
                title={metatitle}
                description=""
                keywords=""
            />

            <div className="pageerror-wrap d-flex flex-row align-items-center full-w py-5 my-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <span className="display-3 d-block font-weight-bold">404</span>
                            <div className={`mb-5 mt-2 lead font-weight-semibold ${styles.fontweBold}`}>{title}</div>
                            <LinkButtonSite path={link}>
                                {linktext}
                            </LinkButtonSite>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
