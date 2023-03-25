import styles from '@/styles/Direction.module.scss';

export default function Direction() {
    return (
        <section id='direction' className={styles.direction}>
            <div className={`${styles.container} container`}>
            <div className={`${styles.direction_item} ${styles.space}`}>
                    <div className={styles.direction_text}>
                        <h4>Solutions for space</h4>
                        <p>We have developed the best solutions  for sensors in the space industry.</p>
                    </div>
                    <a className={`${styles.btn} btn`}>Download catalogue</a>
                </div>
                <div className={`${styles.direction_item} ${styles.aviation}`}>
                <div className={styles.direction_text}>
                        <h4>Solutions for aviation</h4>
                        <p>We offers time-tested solutions for aviation industry</p>
                    </div>
                    <a className={`${styles.btn} btn`}>Download catalogue</a>
                </div>
            </div>
        </section>
    )
}