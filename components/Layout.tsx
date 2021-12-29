import Head from 'next/head';
import styles from './Layout.module.scss';
import React from 'react';
import Header from './Header/Header';

export const siteTitle = 'Next.js Sample Website';

const Layout = ({ children }: React.PropsWithChildren<unknown>) => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={'https://nextjs-playground-rosy.vercel.app/images/banner.png'}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
