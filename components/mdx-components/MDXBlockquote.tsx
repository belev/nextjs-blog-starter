import React from 'react';
import styles from './MDXBlockquote.module.scss';

type Props = JSX.IntrinsicElements['blockquote'];

const MDXBlockquote = ({ children }: Props) => (
  <blockquote className={styles.blockquote}>{children}</blockquote>
);

export default MDXBlockquote;
