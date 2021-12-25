import type { LinkProps } from 'next/link';
import NextLink from 'next/link';

type Props = React.PropsWithChildren<
  Omit<LinkProps, 'href'> & {
    href: string;
    className?: string;
  }
>;

const Link = ({ children, href, className }: Props) => {
  const isInternalLink = href.startsWith('#') || href.startsWith('/');

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
    );
  }

  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Link;
