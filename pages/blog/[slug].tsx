import { getMDXComponent } from 'mdx-bundler/client';
import type { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

import Layout from '../../components/Layout/Layout';
import MDXComponents from '../../components/mdx-components';
import { getAllPostIds, getPostData } from '../../lib/posts';
import type { Post, StaticPath } from '../../types/Post';
import styles from './[slug].module.scss';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<Props, StaticPath['params']> = async ({ params }) => {
  if (!params) {
    throw new Error('Post slug is missing in [slug].tsx -> getStaticProps!');
  }

  const post = await getPostData(params.slug);
  return {
    props: {
      post
    }
  };
};

interface Props {
  post: Post;
}

const PostComponent = ({ post }: Props) => {
  const Component = React.useMemo(() => post.code && getMDXComponent(post.code), [post.code]);
  return (
    <Layout>
      <h1 className={styles.heading}>{post.title}</h1>
      <p className={styles.publishedAt}>
        {new Date(post.date).toLocaleDateString('en', {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        })}
      </p>
      {Component && <Component components={MDXComponents} />}
    </Layout>
  );
};

export default PostComponent;
