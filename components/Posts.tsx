import React from 'react';
import type { Post } from '../types/Post';
import Icon from './Icon/Icon';
import Link from './Link';
import styles from './Posts.module.scss';

interface Props {
  posts: Post[];
}

const Posts = ({ posts }: Props) => (
  <>
    {posts.map(({ slug, title, description }) => (
      <article key={slug}>
        <Link href={`/blog/${slug}`} className={styles.link}>
          <h3 className={styles.heading}>{title}</h3>
          <p className={styles.description}>{description}</p>

          <div className={styles.readMore}>
            Read more{' '}
            <span className={styles.arrow}>
              <Icon name="arrow-right" />
            </span>
          </div>
        </Link>
      </article>
    ))}
  </>
);

export default Posts;
