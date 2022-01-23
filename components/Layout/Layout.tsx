import Head from 'next/head';
import styles from './Layout.module.scss';
import React from 'react';
import Header from './Header/Header';
import siteConfig from '../../siteConfig.json';

const Layout = ({ children }: React.PropsWithChildren<unknown>) => (
  <div className={styles.container}>
    <Head>
      <title>{siteConfig.siteTitle}</title>
      <meta name="description" content={siteConfig.siteDescription} />
      <meta property="og:image" content={`${siteConfig.siteUrl}/${siteConfig.siteImage}`} />
      <meta name="og:title" content={siteConfig.siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
