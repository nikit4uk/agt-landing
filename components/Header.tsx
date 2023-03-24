import React, { useState, useEffect } from "react";
import styles from '@/styles/Header.module.scss';
import Image from 'next/image'

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobMenuActive, setMobMenuActive] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const MobMenuActivate = () => {
        if (mobMenuActive === false) {
            setMobMenuActive(true)
        } else {
            setMobMenuActive(false)
        }
    }

    return(
        <header className={!scrolled ? `${styles.header}` : `${styles.header} ${styles.scrolled}`}>
            <div className={`${styles.container} container`}>
                <Image 
                    src="/AGT Logo.png"
                    alt="AGT Logo"
                    className={styles.logotype}
                    width={159}
                    height={34}
                    priority
                />
                <div className={!mobMenuActive ? `${styles.menu_wrap}` : `${styles.menu_wrap} ${styles.menu_opened}`}>
                    <nav className={styles.menu}>
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
                    <a className={styles.mob_menu_btn} onClick={MobMenuActivate}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
            </div>
        </header>
    )
}