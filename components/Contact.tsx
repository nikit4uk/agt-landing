import { useState } from 'react'
import styles from '@/styles/Contact.module.scss'
import SocialIcons from './SocialIcons'

export default function Contact() {
    const [costumerName, setCostumerName] = useState('');
    const [costumerEmail, setCostumerEmail] = useState('');
    const [costumerPhone, setCostumerPhone] = useState('');

    const pushCostumerInfo = () => {
        if(costumerName && costumerEmail && costumerPhone) {
            let apiURL = `https://api.telegram.org/bot6184038590:AAHKqNnbcOjpe00WgYR5tCr1IYnphWT8hwc/sendmessage?chat_id=-940401596&parse_mode=HTML&text=Оформлен%20новый%20заказ%20на%20<a href="http://agt-agent.com">agt-agent.com</a>%0D%0A<b>Имя:</b> ${costumerName}%0D%0A<b>EMail:</b> ${costumerEmail}%0D%0A<b>Телефон:</b> ${costumerPhone}`;
            fetch(apiURL, {
                method: "POST" })
                .then(function(response) {
                    return response.json(); 
            })
        }
    }

    return (
        <section id='contacts' className={styles.contact}>
            <div className={`${styles.container} container`}>
            <div className={styles.contact_form}>
                    <h4 className={styles.section_title}>Or leave your contacts:</h4>
                    <p className={styles.contact_form_text}>We wil respond you in 2 working days</p>
                    <form>
                        <div className={styles.form_item}>
                            <input type="text" id="name" placeholder="" required onChange={(e) => {setCostumerName(e.target.value)}}/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className={styles.form_item}>
                            <input type="email" id="email" placeholder="" required onChange={(e) => {setCostumerEmail(e.target.value)}}/>
                            <label htmlFor="email">E-mail</label>
                        </div>
                        <div className={styles.form_item}>
                            <input type="phone" id="phone" placeholder="" required onChange={(e) => {setCostumerPhone(e.target.value)}}/>
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <a className={`${styles.btn} btn`} onClick={pushCostumerInfo}>Send</a>
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