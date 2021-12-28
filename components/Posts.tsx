import React from 'react';
import type { Post } from '../types/Post';
import ArrowRight from './icons/ArrowRight';
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
            <h3 className={styles.heading}>{title}</h3>
            <p className={styles.description}>{description}</p>

            <div className={styles.readMore}>
              Read more{' '}
              <span className={styles.arrow}>
                <ArrowRight />
              </span>
            </div>
          </Link>
        </article>
      ))}
    </>
  );
};

export default Posts;
