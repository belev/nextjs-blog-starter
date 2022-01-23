import type { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../components/Layout/Layout';
import PageInformation from '../components/PageInformation/PageInformation';
import PageSection from '../components/PageSection/PageSection';
import Posts from '../components/Posts/Posts';
import { getSortedPostsData } from '../lib/posts';
import type { Post } from '../types/Post';

export const getStaticProps: GetStaticProps<Props> = () => {
  const posts = getSortedPostsData({ limit: 5 });
  return {
    props: {
      posts
    }
  };
};

interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props) => (
  <Layout>
    <PageInformation heading="Martin Belev">
      <p>{`Welcome 👋! Introduce yourself here.`}</p>
    </PageInformation>

    <PageSection heading="Latest Posts" navigation={{ href: '/blog', text: 'Read all posts' }}>
      <Posts posts={posts} />
    </PageSection>
  </Layout>
);

export default Home;
