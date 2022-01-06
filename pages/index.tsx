import type { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../components/Layout';
import PageSection from '../components/PageSection';
import Posts from '../components/Posts';
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
    <section>
      <p>{`Welcome 👋! Introduce yourself here.`}</p>
    </section>

    <PageSection heading="Latest Posts" navigation={{ href: '/blog', text: 'Read all posts' }}>
      <Posts posts={posts} />
    </PageSection>
  </Layout>
);

export default Home;
