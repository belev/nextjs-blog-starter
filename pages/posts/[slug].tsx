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
  const post = getPostData(params.slug);
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
  return (
    <Layout>
      {post.title}
      <br />
      {post.id}
      <br />
      {post.date}
    </Layout>
  );
};

export default PostComponent;
