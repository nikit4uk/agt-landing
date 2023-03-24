import styles from '@/styles/Quality.module.scss'

export default function Quality() {
    return (
        <section className={styles.quality}>
            <div className={`${styles.container} container`}>
                <h3 className={styles.section_title}>We work with people, <br />who need high quality standards</h3>
                <p className={styles.quality_text}>Our main tasks are high-quality products and on time. <br /><span></span>We have all regulatory and permitting documents.</p>
            </div>
        </section>
    )
}