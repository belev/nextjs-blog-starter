import type { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import PageInformation from '../components/PageInformation/PageInformation';
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

const Blog = ({ posts }: Props) => (
  <Layout>
    <Head>
      <title>Blog</title>
    </Head>

    <PageInformation heading="Blog" />

    <PageSection heading="All Posts">
      <Posts posts={posts} />
    </PageSection>
  </Layout>
);

export default Blog;
