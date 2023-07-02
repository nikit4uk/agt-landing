import Image from 'next/image'

export default function SocialIcons() {
    return (
        <>
            <a href='https://telegram.me/agtagent' target='_blanc'>
                <Image 
                    src="/social-icon/telegram.svg"
                    alt="telegram-icon"
                    width={32}
                    height={32}
                    priority
                />
            </a>
            <a href='https://wa.me/447488818682' target='_blanc'>
                <Image 
                    src="/social-icon/whatsapp.svg"
                    alt="whatsapp-icon"
                    width={32}
                    height={32}
                    priority
                />
            </a>
            <a href='https://www.facebook.com/profile.php?id=100075950215275' target='_blanc'>
                <Image 
                    src="/social-icon/facebook.svg"
                    alt="facebook-icon"
                    width={32}
                    height={32}
                    priority
                />
            </a>
            <a href='https://instagram.com/aerospaceglobaltrade?igshid=YmMyMTA2M2Y=' target='_blanc'>
                <Image 
                    src="/social-icon/instagram.svg"
                    alt="instagram-icon"
                    width={32}
                    height={32}
                    priority
                />
            </a>
            <a href='https://twitter.com/agtagent' target='_blanc'>
                <Image 
                    src="/social-icon/twitter.svg"
                    alt="twitter-icon"
                    width={40}
                    height={32}
                    priority
                />
            </a>
            <a href='https://www.linkedin.com/company/aerospace-global-trade-ltd/' target='_blanc'>
                <Image 
                    src="/social-icon/linkedIn.svg"
                    alt="linkedin-icon"
                    width={40}
                    height={32}
                    priority
                />
            </a>
        </>
    )
}