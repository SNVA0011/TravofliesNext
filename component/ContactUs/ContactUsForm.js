import React from 'react'
import styles from './common.module.css'
import Image from 'next/image'


const ContactUsForm = () => {
    return (
        <div className={styles.ContactUsForm}>
            <h5><span className={`d-inline-flex ${styles.ContactUsFormImg}`}><Image src='/images/mail-send-fill.png'
                width={34}
                height={34} /></span> Send Message</h5>

            <div className={`form-group ${styles.FrmGroup}`}>
                <input type="text" className={`form-control ${styles.FormControl}`} placeholder='Your Name' />
            </div>
            <div className={`form-group ${styles.FrmGroup}`}>
                <input type="email" className={`form-control ${styles.FormControl}`} placeholder='Your  Email' />
            </div>
            <div className={`form-group ${styles.FrmGroup}`}>
                <input type="number" className={`form-control ${styles.FormControl}`} placeholder='Your Number' />
            </div>
            <div className={`form-group ${styles.FrmGroup}`}>
                <textarea className={`form-control ${styles.FormControl}`} placeholder='Message'></textarea>
            </div>

            <button className={`btn ${styles.FrmButton}`}>
                Send
            </button>
        </div>
    )
}

export default ContactUsForm