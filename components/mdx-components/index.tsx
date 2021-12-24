import type { MDXContentProps } from 'mdx-bundler/client';
import MDXLink from './MDXLink';

const MDXComponents: MDXContentProps['components'] = {
  a: MDXLink
};

export default MDXComponents;
