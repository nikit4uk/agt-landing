import React, { useState, useEffect } from "react";
import styles from '@/styles/About.module.scss';

export default function About() {
    const [textVisioble, setTextVisioble] = useState(false)

    const displayText = () => {
        if (textVisioble === false) {
            setTextVisioble(true)
        } else {
            setTextVisioble(false)
        }
    }

    return (
        <section id='about' className={styles.about_us}>
            <div className={`${styles.container} container`}>
            <div className={styles.left_col}>
                    <h3 className={styles.section_title}>About us</h3>
                </div>
                <div className={!textVisioble ? `${styles.right_col} ${styles.text_hidden}` : `${styles.right_col} ${styles.text_visioble}`}>
                    <p className={styles.about_text}>Aerospace Global Trade LTD specializes in the repair and manufacture of sensors, transducers, electronic components and assemblies for the space and aviation industries. <br/><span></span>We have full cycle of manufacturing products: from incoming inspection for all materials, their mechanical, thermal, chemical processing, to assembly into a full-fledged product, followed by adjustment and testing. <br/><span></span>In addition to manufacturing, we have Design and Technology departments that are able to develop products according to the Customer&#39;s Specification.</p>
                    <a className={`btn btn-solid ${styles.about_more_text}`} onClick={displayText}>{!textVisioble ? `Show more` : `Show less`}</a>
                </div>
            </div>
        </section>
    )
}