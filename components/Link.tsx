import type { LinkProps } from 'next/link';
import NextLink from 'next/link';
import classNames from 'clsx';
import styles from './Link.module.scss';

type Props = React.PropsWithChildren<
  Omit<LinkProps, 'href'> & {
    href: string;
    className?: string;
    variant?: 'primary' | 'text';
  }
>;

const Link = ({ children, href, className: propsClassName, variant }: Props) => {
  const isInternalLink = href.startsWith('#') || href.startsWith('/');
  const className = classNames(variant && styles.link, variant && styles[variant], propsClassName);

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a className={className}>{children}</a>
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
