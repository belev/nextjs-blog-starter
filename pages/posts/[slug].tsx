import { getMDXComponent } from 'mdx-bundler/client';
import React from 'react';

import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { Post, StaticPath } from '../../types/Post';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }: StaticPath) {
  const post = await getPostData(params.slug);
  return {
    props: {
      post
    }
  };
}

interface Props {
  post: Post;
}

const PostComponent = ({ post }: Props) => {
  const Component = React.useMemo(() => post.code && getMDXComponent(post.code), [post.code]);
  return (
    <Layout>
      {post.title}
      <br />
      {post.id}
      <br />
      {post.date}
      {Component && <Component />}
    </Layout>
  );
};

export default PostComponent;
