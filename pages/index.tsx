import type { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout, { siteTitle } from '../components/Layout';
import Link from '../components/Link';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.scss';
import type { Post } from '../types/Post';

export const getStaticProps: GetStaticProps<Props> = () => {
  const posts = getSortedPostsData();
  return {
    props: {
      posts
    }
  };
};

interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{`Welcome to Martin's blog`}</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ slug, date, title }) => (
            <li className={utilStyles.listItem} key={slug}>
              <Link href={`/blog/${slug}`}>{title}</Link>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
