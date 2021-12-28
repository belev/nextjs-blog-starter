import type { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout, { siteTitle } from '../components/Layout';
import Link from '../components/Link';
import Posts from '../components/Posts';
import { getSortedPostsData } from '../lib/posts';
import type { Post } from '../types/Post';
import styles from './index.module.scss';

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
      <section>
        <p>{`Welcome 👋!`}</p>
        <p>Introduction goes here...</p>
      </section>

      <section>
        <div className={styles.latestPostsWrapper}>
          <h2 className={styles.heading}>Latest Posts</h2>
          <div>
            <Link href="/blog" variant="text">
              Read all posts
            </Link>
          </div>
        </div>
        <Posts posts={posts} />
      </section>
    </Layout>
  );
};

export default Home;
