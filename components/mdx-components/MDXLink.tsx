import React from 'react';
import Link from '../Link';

type Props = JSX.IntrinsicElements['a'];

const MDXLink = (props: Props) => {
  const { href, children } = props;
  if (!href) {
    return <a {...props} />;
  }

  const isInternalLink = href.startsWith('#') || href.startsWith('/');

  if (isInternalLink) {
    return <Link href={href}>{children}</Link>;
  }

  return (
    <a className={props.className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default MDXLink;
