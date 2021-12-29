import type { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout, { siteTitle } from '../components/Layout';
import PageSection from '../components/PageSection';
import Posts from '../components/Posts';
import { getSortedPostsData } from '../lib/posts';
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

const Blog = ({ posts }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <PageSection heading="All Posts">
        <Posts posts={posts} />
      </PageSection>
    </Layout>
  );
};

export default Blog;
