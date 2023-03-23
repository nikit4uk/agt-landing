import styles from '@/styles/Contact.module.scss'
import SocialIcons from './SocialIcons'

export default function Contact() {
    return (
        <section className={styles.contact}>
            <div className={`${styles.container} container`}>
            <div className={styles.contact_form}>
                    <h4 className={styles.section_title}>Or leave your contacts:</h4>
                    <p className={styles.contact_form_text}>We wil respond you in 2 working days</p>
                    <form>
                        <div className={styles.form_item}>
                            <input type="text" id="name" placeholder="" required />
                            <label for="name">Name</label>
                        </div>
                        <div className={styles.form_item}>
                            <input type="email" id="email" placeholder="" required />
                            <label for="email">E-mail</label>
                        </div>
                        <div className={styles.form_item}>
                            <input type="phone" id="phone" placeholder="" required />
                            <label for="phone">Phone</label>
                        </div>
                        <a className={`${styles.btn} btn`}>Send</a>
                    </form>
                </div>
                <div className={styles.contact_information}>
                    <h4 className={styles.section_title}>We are open <br/>to collaborate</h4>
                    <p className={styles.contact_information_text}>Contact us, briefly describe your questions <br/>and also contact us assoon as possible</p>
                    <a href='tel:+447488818682' className={styles.contact_information_phone}>+447488818682</a>
                    <p className={styles.contact_information_text}>71-75, Shelton Street, Covent Garden, <br/>London, WC2H 9JQ<br/>AEROSPACE GLOBAL TRADE LTD</p>
                    <div className={styles.contact_socials_icon}>
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </section>
    )
}