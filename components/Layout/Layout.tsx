import Head from 'next/head';
import styles from './Layout.module.scss';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import siteConfig from '../../siteConfig.json';
import SkipNavigationLink from './SkipNavigationLink/SkipNavigationLink';

const Layout = ({ children }: React.PropsWithChildren<unknown>) => (
  <>
    <Head>
      <title>{siteConfig.siteTitle}</title>
      <meta name="description" content={siteConfig.siteDescription} />
      <meta property="og:image" content={`${siteConfig.siteUrl}/${siteConfig.siteImage}`} />
      <meta name="og:title" content={siteConfig.siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <SkipNavigationLink />
    <div className={styles.container}>
      <Header />
      <main className={styles.main} id="skip-nav">
        {children}
      </main>
      <Footer />
    </div>
  </>
);

export default Layout;
