import Image from 'next/image'

export default function SocialIcons() {
    return (
        <>
            <a href=''>
                <Image 
                    src="/social-icon/facebook.svg"
                    alt="facebook-icon"
                    width={32}
                    height={32}
                    priority
                />
            </a>
            <a href=''>
                <Image 
                    src="/social-icon/instagram.svg"
                    alt="instagram-icon"
                    width={32}
                    height={32}
                    priority
                />
            </a>
            <a href=''>
                <Image 
                    src="/social-icon/telegram.svg"
                    alt="telegram-icon"
                    width={32}
                    height={32}
                    priority
                />
            </a>
            <a href=''>
                <Image 
                    src="/social-icon/whatsapp.svg"
                    alt="whatsapp-icon"
                    width={32}
                    height={32}
                    priority
                />
            </a>
            <a href=''>
                <Image 
                    src="/social-icon/twitter.svg"
                    alt="twitter-icon"
                    width={32}
                    height={32}
                    priority
                />
            </a>
        </>
    )
}