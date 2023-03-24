import styles from '@/styles/Footer.module.scss'
import Image from 'next/image'
import SocialIcons from './SocialIcons'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.container} container`}>
                <div className={styles.upper_footer}>
                    <div className={styles.footer_left_col}>
                        <Image 
                            src="/AGT Logo.png"
                            alt="AGT Logo"
                            className={styles.logotype}
                            width={159}
                            height={34}
                            priority
                        />
                        <p className={`${styles.upper_footer_text} ${styles.desc_hidden}`}>© 2022 Aerospace Global Trade. All rights reserved.</p>
                        <div className={`${styles.footer_socials_icon} ${styles.mob_hidden}`}>
                            <SocialIcons />
                        </div>
                    </div>
                    <div className={styles.footer_right_col}>
                        <div className={styles.footer_menu}>
                            <h5 className={styles.footer_menu_title}>Navigation</h5>
                            <ul className={styles.footer_menu_items}>
                                <li>
                                    <a href='#'>About AGT</a>
                                </li>
                                <li>
                                    <a href='#'>Production</a>
                                </li>
                                <li>
                                    <a href='#'>Partners</a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footer_menu}>
                            <h5 className={styles.footer_menu_title}>Catalogue</h5>
                            <ul className={styles.footer_menu_items}>
                                <li>
                                    <a href='#'>Solutions for space</a>
                                </li>
                                <li>
                                    <a href='#'>Solutions for aviation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.lower_footer}>
                    <div className={styles.footer_left_col}>
                        <p className={`${styles.lower_footer_text} ${styles.mob_hidden}`}>© 2022 Aerospace Global Trade. All rights reserved.</p>
                        <div className={`${styles.footer_socials_icon} ${styles.desc_hidden}`}>
                            <SocialIcons />
                        </div>
                    </div>
                    <div className={styles.footer_right_col}>
                        <p className={styles.lower_footer_text}>Website by <a href='https://garne.agency'>gárne.agency</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}