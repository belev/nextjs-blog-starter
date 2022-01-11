import React from 'react';
import classNames from 'clsx';
import styles from './MDXHeading.module.scss';

type Tag = keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: Tag;
}

const MDXHeading = ({ tag: Tag, children, ...rest }: Props) => (
  <Tag className={classNames(styles.heading, styles[Tag])}>{children}</Tag>
);

export default MDXHeading;
