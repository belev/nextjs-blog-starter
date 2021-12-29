import Head from 'next/head';
import styles from './Layout.module.scss';
import Link from './Link';
import React from 'react';

const name = 'Martin Belev';
export const siteTitle = 'Next.js Sample Website';

interface Props {
  home?: boolean;
}

const Layout = ({ children, home = false }: React.PropsWithChildren<Props>) => {
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
      <header className={styles.header}>{home && <h1>{name}</h1>}</header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/" variant="primary">
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
