import React from 'react';
import type { Post } from '../types/Post';
import Link from './Link';
import styles from './Posts.module.scss';

interface Props {
  posts: Post[];
}

const Posts = ({ posts }: Props) => {
  return (
    <>
      {posts.map(({ slug, title, description }) => (
        <article key={slug}>
          <Link href={`/blog/${slug}`} className={styles.link}>
            <h3 className={styles.hovered}>{title}</h3>
            <p>{description}</p>
            <div>
              Read more <span className={styles.hovered}>→</span>
            </div>
          </Link>
        </article>
      ))}
    </>
  );
};

export default Posts;
