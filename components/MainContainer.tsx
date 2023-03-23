import { useState, useEffect } from 'react'
import Head from 'next/head';
import styles from '@/styles/Main.module.scss';
import Header from './Header';
import Footer from './Footer';

const MainContainer = ({ children, title } : {children: any, title: string}) => {
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
                    <meta name="author" content="nikit4uk" />
                </Head>
                <Header />
                <main className={styles.page}>
                    {children}
                </main>
                <Footer />
            </>
        );
    }

};

export default MainContainer;