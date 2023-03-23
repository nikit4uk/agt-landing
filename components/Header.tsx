import styles from '@/styles/Header.module.scss';
import Image from 'next/image'

export default function Header() {
    return(
        <header className={styles.header}>
            <div className={`${styles.container} container`}>
                <Image 
                    src="/AGT Logo.png"
                    alt="AGT Logo"
                    className={styles.logotype}
                    width={159}
                    height={34}
                    priority
                />
                <div className={styles.menu}>
                    <nav>
                        <ul>
                            <li>
                                <a className={styles.menu_link} href='#direction'>Directions</a>
                            </li>
                            <li>
                                <a className={styles.menu_link} href='#contacts'>Contacts</a>
                            </li>
                            <li>
                                <a href='' className={`${styles.btn} btn btn-solid`}>Download catalogue</a>
                            </li>
                        </ul>
                        
                    </nav>
                    <a className={styles.mob_menu_btn}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
            </div>
        </header>
    )
}