import React from 'react';
import Link from '../Link/Link';

type Props = JSX.IntrinsicElements['a'];

const MDXLink = ({ href, children, className }: Props) => {
  if (!href) {
    throw new Error('Link without href - please provide href!');
  }

  return (
    <Link href={href} className={className} variant="primary">
      {children}
    </Link>
  );
};

export default MDXLink;
