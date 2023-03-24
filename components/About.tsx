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
        <section className={styles.about_us}>
            <div className={`${styles.container} container`}>
            <div className={styles.left_col}>
                    <h3 className={styles.section_title}>About us</h3>
                </div>
                <div className={!textVisioble ? `${styles.right_col} ${styles.text_hidden}` : `${styles.right_col} ${styles.text_visioble}`}>
                    <p className={styles.about_text}>Aerospace Global Trade LTD specializes in the repair andmanufacture of sensors, transducers, electronic componentsand assemblies for the space and aviation industries. We havea full cycle of manufacturing products: from incominginspection for all materials, their mechanical, thermal, chemicalprocessing, to assembly into a full-fledged product, followed byadjustment and testing. In addition to manufacturing, we haveDesign and Technology departments that are able to developproducts according to the Customer's Specification.</p>
                    <a className={`btn btn-solid ${styles.about_more_text}`} onClick={displayText}>{!textVisioble ? `Show more` : `Show less`}</a>
                </div>
            </div>
        </section>
    )
}