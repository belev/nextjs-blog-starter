import NextLink, { LinkProps } from 'next/link';

const Link = ({ children, ...props }: React.PropsWithChildren<LinkProps>) => {
  return (
    <NextLink href={props.href}>
      <a>{children}</a>
    </NextLink>
  );
};

export default Link;
