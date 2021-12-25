import React from 'react';
import Link from '../Link';

type Props = JSX.IntrinsicElements['a'];

const MDXLink = (props: Props) => {
  const { href, children } = props;
  if (!href) {
    return <a {...props} />;
  }

  return (
    <Link href={href} className={props.className}>
      {children}
    </Link>
  );
};

export default MDXLink;
