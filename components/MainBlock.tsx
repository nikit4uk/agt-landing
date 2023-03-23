import styles from '@/styles/Main.module.scss';

export default function MainBlock() {
    return (
        <section className={styles.main}>
            <div className={`${styles.container} container`}>
                <h1>Leading UA Intelligent Aerospace market</h1>
                <a className={`${styles.btn} btn`}>Download catalogue</a>
            </div>
        </section>
    )
}