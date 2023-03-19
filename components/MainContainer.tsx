import { useState, useEffect } from 'react'
import Head from 'next/head';
import styles from '@/styles/Main.module.scss';

const MainContainer = ({ children, title, headerTitles, footerTitles } : {children: any, title: any, headerTitles: any, footerTitles: any}) => {
    const [loading, isLoading] = useState(true);

    if(!loading) {
        return (
            <h4>Loading...</h4>
        )
    } else {
        return (
            <>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {/* <Header headerTitles={headerTitles} /> */}
                <main className={styles.page}>
                    {children}
                </main>
                {/* <Footer footerTitles={footerTitles}/> */}
            </>
        );
    }

};

export default MainContainer;