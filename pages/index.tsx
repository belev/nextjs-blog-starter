import type { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout, { siteTitle } from '../components/Layout';
import Posts from '../components/Posts';
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
        <p>{`Welcome 👋!`}</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <Posts posts={posts} />
      </section>
    </Layout>
  );
};

export default Home;
