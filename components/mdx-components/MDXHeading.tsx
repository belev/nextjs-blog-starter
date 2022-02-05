import React from 'react';
import classNames from 'clsx';
import kebabCase from 'lodash.kebabcase';
import styles from './MDXHeading.module.scss';
import Link from '../Link/Link';
import Icon from '../Icon/Icon';

type Tag = keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: Tag;
}

const MDXHeading = ({ tag: Tag, children }: Props) => {
  const id = kebabCase(children as string);

  return (
    <Tag className={classNames(styles.heading, styles[Tag])}>
      <Link href={`#${id}`} id={id} variant="text" className={styles.link}>
        {children}
      </Link>
      <Icon name="anchor" width="20" height="20" className={styles.anchor} />
    </Tag>
  );
};

export default MDXHeading;
